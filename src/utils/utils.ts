import { Task } from "@/types/task";

export const formatDueDate = (dueDate: string) => {
  const taskDate = new Date(dueDate);
  const today = new Date();
  const tomorrow = new Date();

  today.setHours(0, 0, 0, 0);
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  if (taskDate.toDateString() === today.toDateString()) {
    return "Today";
  } else if (taskDate.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    return taskDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
};

export const isTaskForToday = (task: Task) => {
  const taskDate = new Date(task.dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

  return taskDate.toDateString() === today.toDateString();
};
