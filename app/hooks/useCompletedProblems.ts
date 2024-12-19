'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'completed_problems';

export function useCompletedProblems() {
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());

  // Load completed problems from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCompletedProblems(new Set(JSON.parse(stored)));
    }
  }, []);

  // Save to localStorage whenever completedProblems changes
  const toggleProblemCompletion = (problemId: string) => {
    setCompletedProblems(prev => {
      const next = new Set(prev);
      if (next.has(problemId)) {
        next.delete(problemId);
      } else {
        next.add(problemId);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      return next;
    });
  };

  return {
    completedProblems,
    toggleProblemCompletion,
    isCompleted: (problemId: string) => completedProblems.has(problemId)
  };
} 