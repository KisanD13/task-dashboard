"use client";

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

// Extended mock data with more entries
// const historyData = [
//   {
//     id: 1,
//     title: "Website Design Review",
//     date: "2024-03-10",
//     time: "14:00",
//     status: "completed",
//     completedAt: "2024-03-10 14:30",
//     description: "Reviewed homepage design with the team",
//   },
//   {
//     id: 2,
//     title: "Client Meeting - ABC Corp",
//     date: "2024-03-09",
//     time: "11:30",
//     status: "cancelled",
//     cancelledAt: "2024-03-09 10:00",
//     description: "Quarterly review meeting",
//   },
//   {
//     id: 3,
//     title: "Project Planning Session",
//     date: "2024-03-08",
//     time: "15:00",
//     status: "completed",
//     completedAt: "2024-03-08 16:15",
//     description: "Q2 project roadmap planning",
//   },
//   {
//     id: 4,
//     title: "Team Training Workshop",
//     date: "2024-03-07",
//     time: "09:00",
//     status: "completed",
//     completedAt: "2024-03-07 12:30",
//     description: "New framework training for developers",
//   },
//   {
//     id: 5,
//     title: "Budget Review Meeting",
//     date: "2024-03-06",
//     time: "13:00",
//     status: "cancelled",
//     cancelledAt: "2024-03-06 12:45",
//     description: "Monthly budget analysis",
//   },
//   {
//     id: 6,
//     title: "Product Demo",
//     date: "2024-03-05",
//     time: "16:00",
//     status: "completed",
//     completedAt: "2024-03-05 17:00",
//     description: "New feature demonstration to stakeholders",
//   },
//   {
//     id: 7,
//     title: "Code Review Session",
//     date: "2024-03-04",
//     time: "10:00",
//     status: "completed",
//     completedAt: "2024-03-04 11:30",
//     description: "Sprint code review with senior developers",
//   },
//   {
//     id: 8,
//     title: "Marketing Strategy Meeting",
//     date: "2024-03-03",
//     time: "14:00",
//     status: "cancelled",
//     cancelledAt: "2024-03-03 13:30",
//     description: "Q2 marketing plan discussion",
//   },
//   {
//     id: 9,
//     title: "UI/UX Workshop",
//     date: "2024-03-02",
//     time: "11:00",
//     status: "completed",
//     completedAt: "2024-03-02 13:00",
//     description: "Design system workshop",
//   },
//   {
//     id: 10,
//     title: "Client Presentation",
//     date: "2024-03-01",
//     time: "15:30",
//     status: "completed",
//     completedAt: "2024-03-01 16:45",
//     description: "Project progress presentation to client",
//   },
// ];

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
          <Card className="p-6">
            <div className="space-y-8">
              {tasks
                .filter((item) => item.status === "completed")
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[17px] p-1 bg-white">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
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
                          className={`px-2 py-1 rounded-full text-xs bg-green-100 text-green-700`}
                        >
                          Completed
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="h-4 w-4" />
                        <span>
                          Completed at{" "}
                          {item.completedAt
                            ? new Date(item?.completedAt).toLocaleString()
                            : "Unknown"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled">
          <Card className="p-6">
            <div className="space-y-8">
              {tasks
                .filter((item) => item.status === "cancelled")
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[17px] p-1 bg-white">
                      <XCircle className="h-5 w-5 text-red-500" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                        <Clock className="h-4 w-4" />
                      </div>

                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{item.title}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs bg-red-100 text-red-700`}
                        >
                          Cancelled
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="h-4 w-4" />
                        <span>
                          Cancelled at{" "}
                          {item.cancelledAt
                            ? new Date(item?.cancelledAt).toLocaleString()
                            : "Unknown"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="p-6">
            <div className="space-y-8">
              {tasks
                .filter((item) => item.status === "pending")
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[17px] p-1 bg-white">
                      <Clock className="h-5 w-5 text-yellow-500" />
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
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                          Pending
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <ArrowRight className="h-4 w-4" />
                        <span>Task is still pending</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
