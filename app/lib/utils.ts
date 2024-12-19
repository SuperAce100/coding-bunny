export function getTimeRemaining(dueDate: string): number {
  const now = new Date();
  const due = new Date(dueDate);
  // Set the due date to 11:59:59 PM
  due.setHours(23, 59, 59, 999);
  
  const timeRemaining = due.getTime() - now.getTime();
  const totalDuration = 24 * 60 * 60 * 1000; // One day in milliseconds
  
  // If it's past due, return 0
  if (timeRemaining <= 0) return 0;
  
  // Calculate percentage remaining
  const percentRemaining = (timeRemaining / totalDuration) * 100;
  return Math.min(Math.max(percentRemaining, 0), 100); // Clamp between 0 and 100
}

export function formatDueDate(dueDate: string): string {
  const date = new Date(dueDate);
  // Set to 11:59:59 PM
  date.setHours(23, 59, 59, 999);
  
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
} 