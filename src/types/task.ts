export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string; // Changed from Date to string
  status: "completed" | "cancelled" | "pending";
  priority: "low" | "medium" | "high";
  createdAt: string; // Changed from Date to string
  updatedAt: string; // Changed from Date to string
  categoryId?: string;
  completedAt?: string; // Changed from Date to string
  cancelledAt?: string; // Changed from Date to string
}
