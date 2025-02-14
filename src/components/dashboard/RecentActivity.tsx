"use client";

import { CheckCircle2, Clock, X } from "lucide-react";
import { format } from "date-fns";
import { useTasks } from "@/context/TaskContext";
interface Activity {
  id: string;
  type: "pending" | "completed" | "cancelled" | "deleted";
  taskTitle: string;
  timestamp: string;
}

export function RecentActivity() {
  const { tasks } = useTasks();
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "pending":
        return <Clock className="h-4 w-4 text-gray-500" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "cancelled":
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getActivityText = (type: Activity["type"]) => {
    switch (type) {
      case "pending":
        return "was created";
      case "completed":
        return "was completed";
      case "cancelled":
        return "was cancelled";
      case "deleted":
        return "was deleted";
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Recent Activity</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3 text-sm">
            <div className="mt-1">{getActivityIcon(task.status)}</div>
            <div className="flex-1">
              <p className="text-gray-600">
                Task &quot;{task.title}&quot; {getActivityText(task.status)}
              </p>
              <p className="text-xs text-gray-400">
                {format(new Date(task.createdAt), "HH:mm:ss")}
              </p>
            </div>
          </div>
        ))}

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center py-4">No recent activity</p>
        )}
      </div>
    </div>
  );
}
