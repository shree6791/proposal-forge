import { NextResponse } from 'next/server';
import { processFileContent } from '@/lib/api/file-processor';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: 'No content provided' },
        { status: 400 }
      );
    }

    const objectives = await processFileContent(content);

    return NextResponse.json({ objectives });
  } catch (error) {
    console.error('Error in process-objectives API:', error);
    return NextResponse.json(
      { error: 'Failed to process objectives' },
      { status: 500 }
    );
  }
}