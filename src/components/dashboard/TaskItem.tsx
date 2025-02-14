"use client";

import { Button } from "@/components/ui/button";
import {
  Edit,
  Check,
  X,
  Trash2,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { Task } from "@/types/task";
import { EditTaskDrawer } from "./EditTaskDrawer";
import { useTasks } from "@/context/TaskContext";
import { Badge } from "../ui/badge";

export function TaskItem({ task, dueDate }: { task: Task; dueDate?: Date }) {
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
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <>
      <div className="p-3 rounded-lg transition-colors cursor-pointer hover:bg-accent/50">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full gap-2">
          {/* Left Section: Title & Status */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {task.status === "completed" ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : task.status === "cancelled" ? (
              <XCircle className="h-5 w-5 text-red-500" />
            ) : (
              <Clock className="h-5 w-5 text-yellow-500" />
            )}

            <span className={getStatusStyles()} title={task.description}>
              {task.title}
            </span>
          </div>

          {task.status === "pending" && (
            <Badge variant="outline" className="text-yellow-600">
              {task.status.toUpperCase()}
            </Badge>
          )}

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
            {task.status !== "completed" && !dueDate && (
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
            )}

            {task.status !== "cancelled" && (
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
            )}

            {task.status !== "pending" && (
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
            )}

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
