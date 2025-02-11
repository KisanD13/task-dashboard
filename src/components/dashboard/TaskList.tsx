import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  status: "pending" | "completed" | "in_progress";
  priority: "low" | "medium" | "high";
}

interface TaskListProps {
  title: string;
  tasks: Task[];
  variant: "today" | "tomorrow" | "future";
}

export function TaskList({ title, tasks, variant }: TaskListProps) {
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
          <div
            key={task.id}
            className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg group"
          >
            <button className="flex-shrink-0">
              {task.status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-300 group-hover:text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <span
                className={
                  task.status === "completed"
                    ? "line-through text-gray-500"
                    : ""
                }
              >
                {task.title}
              </span>
              {task.status === "in_progress" && (
                <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  In Progress
                </span>
              )}
            </div>
            {task.priority === "high" && (
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                High
              </span>
            )}
          </div>
        ))}

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center py-4">No tasks scheduled</p>
        )}
      </div>
    </Card>
  );
}
