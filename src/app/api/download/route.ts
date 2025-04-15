import JSZip from 'jszip';
import fetch from 'node-fetch';
import { NextResponse } from 'next/server';
import { Response as NodeFetchResponse } from 'node-fetch';

interface ErrorResponse {
    message: string;
    [key: string]: any;
}

const fetchJson = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 403) {
                const errorData = await response.json() as ErrorResponse;
                throw new Error(`GitHub API rate limit exceeded: ${errorData.message}`);
            } else if (response.status === 404) {
                throw new Error(`Resource not found: The requested file or directory does not exist`);
            }
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return response.json();
    } catch (error: any) {
        console.error(`Error fetching JSON from ${url}:`, error);
        throw error;
    }
};

const fetchFileContent = async (url: string): Promise<Buffer> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 403) {
                const errorData = await response.json() as ErrorResponse;
                throw new Error(`GitHub API rate limit exceeded: ${errorData.message}`);
            } else if (response.status === 404) {
                throw new Error(`Resource not found: The requested file does not exist`);
            }
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return Buffer.from(await response.arrayBuffer());
    } catch (error: any) {
        console.error(`Error fetching file content from ${url}:`, error);
        throw error;
    }
};

interface GitHubFile {
    name: string;
    type: string;
    download_url?: string;
    url: string;
}

const addFilesToZip = async (zip: JSZip, files: GitHubFile[], basePath: string, newFolderName: string): Promise<void> => {
    for (const file of files) {
        // Create clean path with correct folder structure
        const filePath = basePath 
            ? `${newFolderName}/${basePath}/${file.name}`
            : `${newFolderName}/${file.name}`;
        
        if (file.type === 'file') {
            try {
                if (!file.download_url) continue;
                const content = await fetchFileContent(file.download_url);
                zip.file(filePath, content);
            } catch (error: any) {
                console.error(`Error fetching file ${file.name}:`, error);
                // Add an error note file instead of failing completely
                zip.file(`${filePath}.error.txt`, `Error downloading this file: ${error.message}`);
            }
        } else if (file.type === 'dir') {
            try {
                const dirFiles = await fetchJson(file.url) as GitHubFile[];
                await addFilesToZip(
                    zip, 
                    dirFiles, 
                    basePath ? `${basePath}/${file.name}` : file.name, 
                    newFolderName
                );
            } catch (error: any) {
                console.error(`Error fetching directory ${file.name}:`, error);
                zip.file(`${filePath}/README.error.txt`, `Error downloading this directory: ${error.message}`);
            }
        }
    }
};

export async function GET(req: Request): Promise<NextResponse> {
    const { searchParams } = new URL(req.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');
    const path = searchParams.get('path') || '';
    const newFolderName = searchParams.get('newFolderName') || repo;
    const branch = searchParams.get('branch') || 'main';
    
    if (!owner || !repo) {
        return NextResponse.json({ 
            error: 'Missing required parameters: owner and repo are required' 
        }, { status: 400 });
    }
    
    // Construct API URL based on whether path is provided
    let apiUrl: string;
    if (path) {
        // If we have a path, we need to make sure it's properly encoded for the GitHub API
        apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
    } else {
        // If no path, get the repository root
        apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents?ref=${branch}`;
    }

    try {
        const files = await fetchJson(apiUrl);
        const zip = new JSZip();
        
        // Handle both single file and directory responses
        if (Array.isArray(files)) {
            // Directory
            await addFilesToZip(zip, files, '', newFolderName || '');
        } else {
            // Single file
            const singleFile = files as GitHubFile;
            if (singleFile.download_url) {
                const content = await fetchFileContent(singleFile.download_url);
                zip.file(`${newFolderName}/${singleFile.name}`, content);
            }
        }

        const content = await zip.generateAsync({ type: 'nodebuffer' });
        const response = new NextResponse(content, {
            headers: {
                'Content-Disposition': `attachment; filename=${newFolderName}.zip`,
                'Content-Type': 'application/zip'
            }
        });
        return response;
    } catch (error: any) {
        console.error('Error creating zip file:', error);
        
        // Handle specific error types
        if (error.message.includes('rate limit exceeded')) {
            return NextResponse.json({
                error: 'GitHub API rate limit exceeded. Please visit my GitHub page: https://github.com/ZaidQourah2004 to view and download the project directly, or wait for a while and try again.'
            }, { status: 429 });
        } else if (error.message.includes('Resource not found')) {
            return NextResponse.json({ 
                error: `${error.message}. Please check that the repository and path exist: github.com/${owner}/${repo}${path ? `/tree/main/${path}` : ''}`
            }, { status: 404 });
        }
        
        return NextResponse.json({ 
            error: `Error creating zip file: ${error.message}. Please try again later or visit github.com/${owner}/${repo} directly.` 
        }, { status: 500 });
    }
}
