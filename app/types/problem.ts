export interface Problem {
  id: string;
  title: string;
  content: string;
  order: number;
  dueDate: string;
}

export interface ProblemWithCompletion extends Problem {
  completed: boolean;
} 