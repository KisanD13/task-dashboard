"use client";

import { Task } from "@/types/task";

interface TaskStatisticsProps {
  tasks: Task[];
}

export function TaskStatistics({ tasks }: TaskStatisticsProps) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const pending = tasks.filter((t) => t.status === "pending").length;
  const cancelled = tasks.filter((t) => t.status === "cancelled").length;

  const getPercentage = (count: number) => {
    return total === 0 ? 0 : Math.round((count / total) * 100);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Task Statistics</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Completed</span>
            <span>{getPercentage(completed)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${getPercentage(completed)}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Cancelled</span>
            <span>{getPercentage(cancelled)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${getPercentage(cancelled)}%` }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Pending</span>
            <span>{getPercentage(pending)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div
              className="h-full bg-gray-500 rounded-full"
              style={{ width: `${getPercentage(pending)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
