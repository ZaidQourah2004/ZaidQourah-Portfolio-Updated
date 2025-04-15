"use client";
import React, { useEffect, useState } from "react";
import { createHighlighter } from 'shiki';
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  useEffect(() => {
    const highlightCode = async () => {
      setIsLoading(true);
      try {
        const highlighter = await createHighlighter({
          themes: ['github-dark'],
          langs: ['javascript', 'typescript', 'python', 'jsx', 'bash', 'json', 'css']
        });
        
        // Use a supported language or fallback to 'text'
        const lang = highlighter.getLoadedLanguages().includes(activeLanguage as any) 
          ? activeLanguage 
          : 'text';
          
        const html = highlighter.codeToHtml(String(activeCode), { 
          lang: lang as any,
          theme: 'github-dark' 
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        // Fallback - just show the plain code
        setHighlightedCode(`<pre>${String(activeCode)}</pre>`);
      } finally {
        setIsLoading(false);
      }
    };
    
    highlightCode();
  }, [activeCode, activeLanguage]);

  return (
    <div className="relative w-full rounded-lg bg-[#292d3e] p-4 font-mono text-sm shadow-lg border border-slate-700">
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center py-2">
            <div className="text-xs text-zinc-300">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
              aria-label={copied ? "Copied code" : "Copy code to clipboard"}
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      
      <div className="relative">
        {isLoading ? (
          <div className="animate-pulse h-20 bg-slate-700 rounded"></div>
        ) : (
          <div 
            className="shiki-wrapper rounded-md overflow-hidden bg-[#1e2130] p-4"
            style={{ 
              fontSize: "0.875rem", 
              lineHeight: 1.6 
            }}
            dangerouslySetInnerHTML={{ __html: highlightedCode }} 
          />
        )}
        
        {/* Add line highlights as overlays */}
        {activeHighlightLines.length > 0 && !isLoading && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {activeHighlightLines.map((lineNum) => (
              <div 
                key={lineNum}
                className="absolute left-0 right-0 bg-white/10"
                style={{
                  top: `${(lineNum - 1) * 1.6}rem`, // Based on line height
                  height: '1.6rem'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 