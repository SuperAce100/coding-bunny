'use client';

import React, { useEffect, useState } from 'react';
import { getProblem } from '@/app/lib/problems';
import { Problem } from '@/app/types/problem';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';
import { useCompletedProblems } from '@/app/hooks/useCompletedProblems';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
import { formatDueDate } from '@/app/lib/utils';

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);
  const { isCompleted, toggleProblemCompletion } = useCompletedProblems();

  useEffect(() => {
    async function loadProblem() {
      try {
        const data = await getProblem(params.id);
        setProblem(data);
      } catch (error) {
        console.error('Error loading problem:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProblem();
  }, [params.id]);

  if (loading) {
    return <div className="max-w-3xl mx-auto p-8">Loading...</div>;
  }

  if (!problem) {
    return <div className="max-w-3xl mx-auto p-8">Problem not found</div>;
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{problem?.title}</h1>
          <button
            onClick={() => problem && toggleProblemCompletion(problem.id)}
            className={`w-8 h-8 transition-all duration-200 hover:scale-105 ${
              problem && isCompleted(problem.id)
                ? 'text-green-500 hover:text-green-600' 
                : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
            }`}
            aria-label={problem && isCompleted(problem.id) ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {problem && isCompleted(problem.id) 
              ? <CheckCircleIcon className="w-8 h-8" /> 
              : <MinusCircleIcon className="w-8 h-8" />
            }
          </button>
        </div>
        <div className="surface-card">
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 inline-block"
          >
            ← Back to Problems
          </Link>

          <h1 className="text-3xl font-bold mb-4">{problem.title}</h1>
          
          {problem.dueDate && (
            <div className="text-gray-600 dark:text-gray-400 mb-4">
              Due {formatDueDate(problem.dueDate)}
            </div>
          )}
          
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                code(props) {
                  const {children, className, node, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      language={match[1]}
                      style={oneDark}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={className}>
                      {String(children).replace(/^`|`$/g, '')}
                    </code>
                  )
                },
                p({ children }) {
                  if (React.Children.count(children) === 1) {
                    const child = React.Children.toArray(children)[0];
                    if (React.isValidElement(child) && child.type === SyntaxHighlighter) {
                      return child;
                    }
                  }
                  return <p className="my-4 leading-relaxed">{children}</p>;
                },
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside my-4 space-y-2" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold" {...props} />
                )
              }}
            >
              {problem.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
} 