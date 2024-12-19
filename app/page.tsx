'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllProblems } from './lib/problems';
import { getTimeRemaining, formatDueDate } from './lib/utils';
import { Problem } from './types/problem';
import { useEffect, useState } from 'react';
import { useCompletedProblems } from './hooks/useCompletedProblems';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const { isCompleted, toggleProblemCompletion } = useCompletedProblems();

  useEffect(() => {
    getAllProblems().then(setProblems);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex items-center gap-6">
            <Image
              src="/bunny.png"
              alt="Coding Bunny"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <div>
              <h1 className="text-4xl font-bold">Coding Bunny</h1>
              <p className="text-text-light dark:text-text-dark mt-2">
                Come back every day for a new lesson from the coding bunny!
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {problems
            .sort((a, b) => a.order - b.order)
            .map((problem) => {
              const percentRemaining = getTimeRemaining(problem.dueDate);
              const formattedDueDate = formatDueDate(problem.dueDate);
              const completed = isCompleted(problem.id);
              
              return (
                <div key={problem.id} className="relative">
                  <Link
                    href={`/problems/${problem.id}`}
                    className={`surface-card hover:shadow-lg transition-all duration-200 block ${
                      completed ? 'opacity-75' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-semibold">{problem.title}</h2>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleProblemCompletion(problem.id);
                        }}
                        className={`w-6 h-6 transition-colors duration-200 ${
                          completed 
                            ? 'text-green-500 hover:text-green-600' 
                            : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                        }`}
                        aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
                      >
                        {completed ? <CheckCircleIcon className="w-6 h-6" /> : <MinusCircleIcon className="w-6 h-6" />}
                      </button>
                    </div>
                    <div className="text-sm text-text-light dark:text-text-dark opacity-80 mb-2">
                      Due {formattedDueDate}
                    </div>
                    <div className="w-full bg-accent-pink-light dark:bg-accent-pink-light/20 rounded-full h-2.5">
                      <div 
                        className="bg-pink-500 dark:bg-pink-400 h-2.5 rounded-full transition-all duration-1000" 
                        style={{ width: `${percentRemaining}%` }}
                      ></div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
} 