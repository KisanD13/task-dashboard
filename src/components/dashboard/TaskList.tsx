"use client";

import { Card } from "@/components/ui/card";
// import { CheckCircle2, Circle } from "lucide-react";
import { Task } from "@/types/task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  title: string;
  tasks: Task[];
  variant:
    | "today"
    | "tomorrow"
    | "future"
    | "completed"
    | "cancelled"
    | "search";
  onClose?: () => void;
}

export function TaskList({ title, tasks, variant, onClose }: TaskListProps) {
  const getBadgeColor = () => {
    switch (variant) {
      case "today":
        return "bg-indigo-100 text-indigo-700";
      case "tomorrow":
        return "bg-purple-100 text-purple-700";
      case "future":
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className={`px-2 py-1 rounded-full text-sm ${getBadgeColor()}`}>
          {tasks.length} tasks
        </span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onClose={onClose} variant={variant} />
        ))}

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center py-4">No tasks scheduled</p>
        )}
      </div>
    </Card>
  );
}
