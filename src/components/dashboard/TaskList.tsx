import { Card } from "@/components/ui/card";
// import { CheckCircle2, Circle } from "lucide-react";
import { Task } from "@/types/task";
import { TaskItem } from "./TaskItem";

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

  const handleStatusChange = async (
    taskId: string,
    status: "completed" | "cancelled" | "pending"
  ) => {
    try {
      // API call would go here
      console.log(`Updating task ${taskId} to status: ${status}`);
      // await updateTaskStatus(taskId, status);
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      // API call would go here
      console.log(`Deleting task ${taskId}`);
      // await deleteTask(taskId);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleEdit = (task: Task) => {
    // Handle edit action - could open a modal or navigate to edit page
    console.log("Editing task:", task);
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
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}

        {tasks.length === 0 && (
          <p className="text-gray-500 text-center py-4">No tasks scheduled</p>
        )}
      </div>
    </Card>
  );
}
