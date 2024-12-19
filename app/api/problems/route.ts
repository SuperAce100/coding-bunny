import { readFile, readdir } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import matter from 'gray-matter';
import { Problem } from '@/app/types/problem';

export async function GET() {
  try {
    // Get the absolute path to the problems directory
    const problemsDirectory = path.join(process.cwd(), 'app', 'problems');
    
    // Read all markdown files
    const files = await readdir(problemsDirectory);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    // Process each file
    const problems = await Promise.all(
      markdownFiles.map(async (filename) => {
        const filePath = path.join(problemsDirectory, filename);
        const fileContent = await readFile(filePath, 'utf8');
        const { data: frontmatter, content } = matter(fileContent);
        
        return {
          id: filename.replace('.md', ''),
          title: frontmatter.title,
          content,
          dueDate: frontmatter.dueDate
        } as Problem;
      })
    );
    
    // Sort by ID and return
    return NextResponse.json(
      problems.sort((a, b) => a.id.localeCompare(b.id))
    );
  } catch (error) {
    console.error('Error loading problems:', error);
    return NextResponse.json([], { status: 500 });
  }
} 