"use client";

import HistoryTaskList from "@/components/history/HistoryTaskList";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTasks } from "@/context/TaskContext";
import {
  CheckCircle2,
  Clock,
  Calendar,
  XCircle,
  ArrowRight,
} from "lucide-react";

export default function HistoryPage() {
  const { tasks } = useTasks();
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task History</h1>
        <div className="flex gap-2">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Export History
          </button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All History</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="p-6">
            <div className="space-y-8">
              {tasks.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[17px] p-1 bg-white">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : item.status === "pending" ? (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : item.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4" />
                      <span>
                        {item.status === "completed"
                          ? `Completed at ${
                              item.completedAt
                                ? new Date(item?.completedAt).toLocaleString()
                                : "Unknown"
                            }`
                          : item.status === "pending"
                          ? "Task is still pending"
                          : `Cancelled at ${
                              item.cancelledAt
                                ? new Date(item?.cancelledAt).toLocaleString()
                                : "Unknown"
                            }`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <HistoryTaskList
            tasks={tasks.filter((task) => task.status === "completed")}
            status="completed"
          />
        </TabsContent>

        <TabsContent value="cancelled">
          <HistoryTaskList
            tasks={tasks.filter((task) => task.status === "cancelled")}
            status="cancelled"
          />
        </TabsContent>

        <TabsContent value="pending">
          <HistoryTaskList
            tasks={tasks.filter((task) => task.status === "pending")}
            status="pending"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
