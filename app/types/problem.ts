export type Problem = {
  id: string;
  number: number;
  title: string;
  dueDate: string;
  order: number;
};

export interface ProblemWithCompletion extends Problem {
  completed: boolean;
} 