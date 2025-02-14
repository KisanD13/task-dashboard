"use client";

import { Button } from "@/components/ui/button";
import { Edit, Check, X, Trash2, Clock } from "lucide-react";
import { useState } from "react";
import { Task } from "@/types/task";
import { EditTaskDrawer } from "./EditTaskDrawer";
import { useTasks } from "@/context/TaskContext";
import { Badge } from "../ui/badge";

export function TaskItem({ task }: { task: Task }) {
  const {
    completeTask,
    cancelledTask,
    deleteTask,
    pendingTask,
    updateTaskStatus,
  } = useTasks();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const getStatusStyles = () => {
    switch (task.status) {
      case "completed":
        return "text-green-600";
      case "cancelled":
        return "text-red-600";
      case "pending":
        return "text-foreground/70";
    }
  };

  return (
    <>
      <div className="p-3 rounded-lg transition-colors cursor-pointer hover:bg-accent/50">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full gap-2">
          {/* Left Section: Title & Status */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div
              className={`w-4 h-4 rounded-full border-2 border-gray-400 ${
                task.status === "completed"
                  ? "border-green-600 bg-green-600"
                  : task.status === "cancelled"
                  ? "border-red-600"
                  : ""
              }`}
            />
            <span className={getStatusStyles()} title={task.description}>
              {task.title}
            </span>
          </div>

          <Badge variant="outline" className={getStatusStyles()}>
            {task.status.toUpperCase()}
          </Badge>

          {/* Center Section: Description */}
          <div className="text-sm text-gray-500 w-full md:w-auto">
            {task.description}
          </div>

          {/* Right Section: Action Buttons */}
          <div className="flex gap-2 w-full md:w-auto">
            <Button
              variant="ghost"
              className="bg-blue-200 hover:bg-blue-300 active:bg-blue-300"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTaskId(task.id);
                setIsDrawerOpen(true);
              }}
              title="Edit Task"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="bg-green-200 hover:bg-green-300 active:bg-green-300"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                completeTask(task);
                updateTaskStatus(task.id, "completed");
              }}
              title="Complete Task"
            >
              <Check className="h-4 w-4" />
            </Button>

            <Button
              variant="default"
              className="bg-red-200 hover:bg-red-300 active:bg-red-300"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                cancelledTask(task);
                updateTaskStatus(task.id, "cancelled");
              }}
              title="Cancel Task"
            >
              <X className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              className="bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-300"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                pendingTask(task);
              }}
              title="Pending Task"
            >
              <Clock className="h-4 w-4" />
            </Button>

            <Button
              variant="default"
              size="sm"
              className="bg-red-400 hover:bg-red-500 active:bg-red-500"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task);
              }}
              title="Delete Task"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <EditTaskDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        taskId={selectedTaskId}
      />
    </>
  );
}
