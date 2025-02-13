export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  status: "completed" | "cancelled" | "pending";
  priority: "low" | "medium" | "high";
  createdAt: Date;
  updatedAt: Date;
  categoryId?: string;
}
