"use client";

import { useState } from "react";
import { Button, Column, Text } from "@/once-ui/components";

interface DownloadButtonProps {
  owner: string;
  repo: string;
  path?: string;
  newFolderName?: string;
}

export default function DownloadButton({ 
  owner, 
  repo, 
  path = "", 
  newFolderName
}: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownload = async () => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Use the provided newFolderName or default to repo name
      const folderName = newFolderName || repo;
      
      // Build URL parameters
      const params = new URLSearchParams();
      params.append('owner', owner);
      params.append('repo', repo);
      if (path) params.append('path', path);
      params.append('newFolderName', folderName);
      
      // Construct the URL with properly encoded parameters
      const url = `/api/download?${params.toString()}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to download repository');
      }
      
      // Create a blob from the response
      const blob = await response.blob();
      
      // Create a link element to trigger the download
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `${folderName}.zip`;
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      setErrorMessage(error.message || 'Failed to download repository');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Column gap="m" horizontal="center">
      <Button 
        size="l"
        variant="primary"
        onClick={handleDownload}
        disabled={isLoading}
        style={{ 
          minWidth: '180px',
          position: 'relative'
        }}
      >
        {isLoading ? (
          <>
            <span style={{ visibility: 'hidden' }}>Download</span>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)'
            }}>
              <LoadingSpinner />
            </div>
          </>
        ) : 'Download Project'}
      </Button>
      
      {errorMessage && (
        <Text 
          variant="body-default-s" 
          style={{ 
            padding: 'var(--static-space-8) var(--static-space-12)',
            borderRadius: 'var(--radius-s)',
            backgroundColor: 'var(--surface-critical-subtle)',
            color: 'var(--text-critical-strong)',
            maxWidth: '500px',
            textAlign: 'center'
          }}
        >
          {errorMessage}
        </Text>
      )}
    </Column>
  );
}

// Simple loading spinner component
function LoadingSpinner() {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      border: '3px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      borderTopColor: 'white',
      animation: 'spin 1s linear infinite'
    }}>
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
} 