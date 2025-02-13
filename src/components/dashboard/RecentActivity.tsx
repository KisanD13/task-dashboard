"use client";

import { CheckCircle2, Clock, Plus, RefreshCw } from "lucide-react";
import { format } from "date-fns";

interface Activity {
  id: string;
  type: "created" | "completed" | "updated" | "deleted";
  taskTitle: string;
  timestamp: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "created":
        return <Plus className="h-4 w-4 text-blue-500" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "updated":
        return <RefreshCw className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getActivityText = (type: Activity["type"]) => {
    switch (type) {
      case "created":
        return "was created";
      case "completed":
        return "was completed";
      case "updated":
        return "was updated";
      case "deleted":
        return "was deleted";
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 text-sm">
            <div className="mt-1">{getActivityIcon(activity.type)}</div>
            <div className="flex-1">
              <p className="text-gray-600">
                Task &quot;{activity.taskTitle}&quot;{" "}
                {getActivityText(activity.type)}
              </p>
              <p className="text-xs text-gray-400">
                {format(new Date(activity.timestamp), "HH:mm:ss")}
              </p>
            </div>
          </div>
        ))}

        {activities.length === 0 && (
          <p className="text-gray-500 text-center py-4">No recent activity</p>
        )}
      </div>
    </div>
  );
}
