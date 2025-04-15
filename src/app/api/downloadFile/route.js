import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileUrl = searchParams.get('fileUrl');
    const fileName = searchParams.get('fileName');

    if (!fileUrl || !fileName) {
        return NextResponse.json({ error: 'Missing fileUrl or fileName parameter' }, { status: 400 });
    }

    try {
        const response = await fetch(fileUrl);

        if (!response.ok) {
            if (response.status === 403) {
                const errorData = await response.json();
                throw new Error(`GitHub API error: ${errorData.message}`);
            }
            throw new Error('Failed to fetch file');
        }

        const fileData = await response.text();

        return new NextResponse(fileData, {
            headers: {
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Type': 'text/plain',
            },
        });
    } catch (error) {
        console.error('Error fetching file:', error);
        if (error.message.includes('GitHub API error')) {
            return NextResponse.json({
                error: 'You have exceeded the number of API calls allowed in a specific time period. Please visit my GitHub page: https://github.com/ZaidQourah2004 to view and download the project directly, or wait for a while and try again.'
            }, { status: 429 });
        }
        return NextResponse.json({ error: 'Error fetching file.' }, { status: 500 });
    }
}
