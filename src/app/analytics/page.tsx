"use client";

import { useMemo, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { useTasks } from "@/context/TaskContext";
import { format, subDays, addDays } from "date-fns";

// Helper function to generate formatted date ranges
const getFormattedDates = (days: number, future = false) => {
  return Array.from({ length: days }, (_, i) => {
    const date = future ? addDays(new Date(), i) : subDays(new Date(), i);
    return format(date, "yyyy-MM-dd");
  }).reverse();
};

export default function TaskAnalytics() {
  const { tasks } = useTasks();

  const last7Days = useMemo(() => getFormattedDates(7), []);
  const next7Days = useMemo(() => getFormattedDates(7, true), []);

  // Function to process tasks for the given date range
  const getTaskData = useCallback(
    (dateRange: string[]) => {
      return dateRange.map((date) => {
        const filteredTasks = tasks.filter((task) => {
          const taskDate = new Date(task.dueDate).toISOString().split("T")[0]; // Convert to "YYYY-MM-DD"
          return taskDate === date;
        });

        return {
          date,
          pending: filteredTasks.filter((task) => task.status === "pending")
            .length,
          completed: filteredTasks.filter((task) => task.status === "completed")
            .length,
          cancelled: filteredTasks.filter((task) => task.status === "cancelled")
            .length,
        };
      });
    },
    [tasks]
  );

  const pastTaskData = useMemo(
    () => getTaskData(last7Days),
    [getTaskData, last7Days]
  );
  const futureTaskData = useMemo(
    () => getTaskData(next7Days),
    [getTaskData, next7Days]
  );

  return (
    <div className="space-y-6">
      {/* Past 7 Days */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Task Analytics (Last 7 Days)
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={pastTaskData}
            margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
          >
            <XAxis
              dataKey="date"
              angle={-45}
              textAnchor="end"
              tick={{ fontSize: 12, fill: "#666" }}
              padding={{ left: 10, right: 10 }}
              dy={10} // Moves X-axis labels down slightly
            />
            <YAxis
              domain={[0, "dataMax + 1"]} // Ensures line touches the bottom
              tick={{ fontSize: 12, fill: "#666" }}
              padding={{ bottom: 10 }} // Adds a slight gap between points and labels
            />
            <Tooltip formatter={(value) => [`${value} Tasks`, ""]} />
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="pending"
              stroke="#facc15"
              name="Pending"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#22c55e"
              name="Completed"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="cancelled"
              stroke="#ef4444"
              name="Cancelled"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Next 7 Days */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Task Analytics (Next 7 Days)
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={futureTaskData}
            margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
          >
            <XAxis
              dataKey="date"
              angle={-45}
              textAnchor="end"
              tick={{ fontSize: 12, fill: "#666" }}
              padding={{ left: 10, right: 10 }}
              dy={10} // Moves X-axis labels down slightly
            />
            <YAxis
              domain={[0, "dataMax + 1"]} // Ensures line touches the bottom
              tick={{ fontSize: 12, fill: "#666" }}
              padding={{ bottom: 10 }} // Adds a slight gap between points and labels
            />
            <Tooltip formatter={(value) => [`${value} Tasks`, ""]} />
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="pending"
              stroke="#facc15"
              name="Pending"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#22c55e"
              name="Completed"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="cancelled"
              stroke="#ef4444"
              name="Cancelled"
              strokeWidth={2.5}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
