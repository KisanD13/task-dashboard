import { Button } from "@/components/ui/button";
import { Edit, Check, X, Trash2 } from "lucide-react"; // Assuming you're using lucide-react for icons
import { useState } from "react";
import { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onStatusChange: (
    taskId: string,
    status: "completed" | "cancelled" | "pending"
  ) => void;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
}

export function TaskItem({
  task,
  onStatusChange,
  onDelete,
  onEdit,
}: TaskItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  const getStatusStyles = () => {
    switch (task.status) {
      case "completed":
        return "text-green-600";
      case "cancelled":
        return "text-red-600";
      case "pending":
        return isSelected ? "text-blue-600" : "text-foreground/70";
    }
  };

  return (
    <div
      className={`p-3 rounded-lg transition-colors cursor-pointer hover:bg-accent/50 ${
        isSelected ? "bg-accent" : ""
      }`}
      onClick={() => setIsSelected(!isSelected)}
    >
      <div className={`flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div
            className={`w-4 h-4 rounded-full border-2 ${
              isSelected ? "border-blue-600" : "border-gray-400"
            } ${
              task.status === "completed" ? "border-green-600 bg-green-600" : ""
            } ${task.status === "cancelled" ? "border-red-600" : ""}`}
          />
          <span className={getStatusStyles()}>{task.title}</span>
        </div>

        {isSelected && (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(task);
              }}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(task.id, "completed");
              }}
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onStatusChange(task.id, "cancelled");
              }}
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(task.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
