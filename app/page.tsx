'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllProblems } from './lib/problems';
import { getTimeRemaining, formatDueDate } from './lib/utils';
import { Problem } from './types/problem';
import { useEffect, useState } from 'react';
import { useCompletedProblems } from './hooks/useCompletedProblems';
import { CheckCircleIcon, MinusCircleIcon, GiftIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const { isCompleted, toggleProblemCompletion } = useCompletedProblems();

  useEffect(() => {
    getAllProblems().then(setProblems);
  }, []);

  const sortedProblems = problems.sort((a, b) => a.order - b.order);
  const latestProblem = sortedProblems[sortedProblems.length - 1];
  const olderProblems = sortedProblems.slice(0, -1);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="relative rounded-lg bg-gradient-to-br from-pink-50/80 to-purple-50/80 dark:from-pink-950/10 dark:to-purple-950/10 p-6 shadow-md">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-200 dark:bg-pink-600 blur-2xl"></div>
              <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-purple-200 dark:bg-purple-600 blur-2xl"></div>
            </div>
            
            <div className="relative flex items-center gap-6">
              <div className="relative">
                <div className="absolute -inset-0.5 animate-pulse rounded-lg bg-pink-200/40 dark:bg-pink-500/10"></div>
                <Image
                  src="/bunny.png"
                  alt="Coding Bunny"
                  width={64}
                  height={64}
                  className="relative w-16 h-16 transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Coding Bunny
                  </h1>
                  <SparklesIcon className="w-5 h-5 text-pink-500/80 dark:text-pink-400/80" />
                </div>
                <p className="text-text-light dark:text-text-dark mt-2 flex items-center gap-2">
                  Come back every day for a new lesson from the coding bunny!
                  <span className="inline-block animate-bounce">🥕</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {latestProblem && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30 group">
                <GiftIcon className="w-5 h-5 text-pink-500 dark:text-pink-400 transition-transform duration-300 group-hover:scale-110 animate-[wiggle_2s_ease-in-out_infinite]" />
              </span>
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                The coding bunny has come by with a new problem!
              </span>
            </h2>
            <div className="relative">
              <Link
                href={`/problems/${latestProblem.id}`}
                className={`surface-card hover:shadow-lg transition-all duration-200 block ${
                  isCompleted(latestProblem.id) ? 'opacity-75' : ''
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-pink-500 dark:text-pink-400">
                      {latestProblem.number}
                    </span>
                    <h2 className="text-2xl font-semibold">{latestProblem.title}</h2>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleProblemCompletion(latestProblem.id);
                    }}
                    className={`w-8 h-8 transition-colors duration-200 ${
                      isCompleted(latestProblem.id)
                        ? 'text-green-500 hover:text-green-600'
                        : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                    }`}
                    aria-label={isCompleted(latestProblem.id) ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {isCompleted(latestProblem.id) ? (
                      <CheckCircleIcon className="w-8 h-8" />
                    ) : (
                      <MinusCircleIcon className="w-8 h-8" />
                    )}
                  </button>
                </div>
                <div className="text-base text-text-light dark:text-text-dark opacity-80 mb-3">
                  Due {formatDueDate(latestProblem.dueDate)}
                </div>
                <div className="w-full bg-accent-pink-light dark:bg-accent-pink-light/20 rounded-full h-3">
                  <div
                    className="bg-pink-500 dark:bg-pink-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${getTimeRemaining(latestProblem.dueDate)}%` }}
                  ></div>
                </div>
              </Link>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 group">
            <BookOpenIcon className="w-5 h-5 text-purple-500 dark:text-purple-400 transition-transform duration-300 group-hover:rotate-6 animate-[float_3s_ease-in-out_infinite]" />
          </span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Here's a list of all the problems you've completed!
          </span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {olderProblems.map((problem) => {
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
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-pink-500 dark:text-pink-400">{problem.number}</span>
                      <h2 className="text-xl font-semibold">{problem.title}</h2>
                    </div>
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