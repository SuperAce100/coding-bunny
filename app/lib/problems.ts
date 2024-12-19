import { Problem } from '../types/problem';

// Cache for problem data
const problemCache = new Map<string, Problem>();

export async function getProblem(id: string): Promise<Problem | null> {
  try {
    // Check cache first
    if (problemCache.has(id)) {
      return problemCache.get(id) || null;
    }

    const response = await fetch(`${window.location.origin}/api/problems/${id}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) return null;
    
    const problem = await response.json();
    // Store in cache
    problemCache.set(id, problem);
    
    return problem;
  } catch (error) {
    console.error(`Error loading problem ${id}:`, error);
    return null;
  }
}

// Cache for all problems
let allProblemsCache: Problem[] | null = null;

export async function getAllProblems(): Promise<Problem[]> {
  try {
    // Check cache first
    if (allProblemsCache) {
      return allProblemsCache;
    }

    const response = await fetch(`${window.location.origin}/api/problems`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) throw new Error('Failed to fetch problems');
    
    const problems = await response.json();
    // Store in cache
    allProblemsCache = problems;
    
    return problems;
  } catch (error) {
    console.error('Error loading problems:', error);
    return [];
  }
} 