export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  status: "completed" | "cancelled" | "pending";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId?: string;
} 