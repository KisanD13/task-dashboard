import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Calendar,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Task } from "@/types/task";
export default function HistoryTaskList({
  tasks,
  status,
}: {
  tasks: Task[];
  status: string;
}) {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        {tasks.map((item) => (
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
                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
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
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
