import { readFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import matter from 'gray-matter';
import { Problem } from '@/app/types/problem';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Get the problem ID from the URL
    const params = await Promise.resolve(context.params);

    const problemId = params.id;
    
    // Build the file path
    const filePath = path.join(process.cwd(), 'app', 'problems', `${problemId}.md`);
    
    // Read and parse the file
    const fileContent = await readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    const problem: Problem = {
      id: problemId,
      title: frontmatter.title,
      content,
      dueDate: frontmatter.dueDate
    };

    return NextResponse.json(problem);
  } catch (error) {
    console.error(`Error loading problem:`, error);
    return NextResponse.json(
      { error: 'Problem not found' },
      { status: 404 }
    );
  }
} 