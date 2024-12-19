import { readFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import matter from 'gray-matter';
import { Problem } from '@/app/types/problem';

type RouteParams = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function GET(
  request: NextRequest,
  routeParams: RouteParams
) {
  try {
    const problemId = routeParams.params.id;
    
    // Build the file path
    const filePath = path.join(process.cwd(), 'app', 'problems', `${problemId}.md`);
    
    // Read and parse the file
    const fileContent = await readFile(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    const problem: Problem = {
      id: problemId,
      title: frontmatter.title,
      content,
      dueDate: frontmatter.dueDate,
      order: frontmatter.order || 0
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