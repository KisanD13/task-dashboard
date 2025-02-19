import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Calendar,
  XCircle,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import { Task } from "@/types/task";
import { Button } from "../ui/button";
import { useTasks } from "@/context/TaskContext";
export default function HistoryTaskList({
  tasks,
  status,
}: {
  tasks: Task[];
  status: string;
}) {
  const { cancelledTask, updateTaskStatus, completeTask } = useTasks();
  if (tasks.length === 0) {
    return (
      <Card className="p-6">
        <p className="text-gray-500 text-center py-4">No tasks found</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-8">
        {tasks.map((item) => {
          const dueDate = new Date(item.dueDate);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return (
            <div
              key={item.id}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] p-1 bg-white">
                {status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : status === "pending" ? (
                  <Clock className="h-5 w-5 text-yellow-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {dueDate < today
                      ? `Task was scheduled for ${dueDate.toLocaleDateString()}`
                      : dueDate.toDateString() === today.toDateString()
                      ? "Task is scheduled for today"
                      : `Task is scheduled for ${dueDate.toLocaleDateString()}`}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      status === "completed"
                        ? "bg-green-100 text-green-700"
                        : status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ArrowRight className="h-4 w-4" />
                  <span>
                    {status === "completed"
                      ? `Completed at ${
                          item.completedAt
                            ? new Date(item.completedAt).toLocaleString()
                            : "Unknown"
                        }`
                      : status === "pending"
                      ? "Task is still pending"
                      : `Cancelled at ${
                          item.cancelledAt
                            ? new Date(item.cancelledAt).toLocaleString()
                            : "Unknown"
                        }`}
                  </span>
                </div>
                {status === "pending" && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Button
                      variant="default"
                      className="bg-red-200 hover:bg-red-300 active:bg-red-300"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        cancelledTask(item);
                        updateTaskStatus(item.id, "cancelled");
                      }}
                      title="Cancel Task"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="default"
                      className="bg-green-200 hover:bg-green-300 active:bg-green-300"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        completeTask(item);
                        updateTaskStatus(item.id, "completed");
                      }}
                      title="Complete Task"
                    >
                      <Check className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
