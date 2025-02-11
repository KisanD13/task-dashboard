"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  CheckCircle2,
  Circle,
} from "lucide-react";

// Mock data - replace with real data later
const tasks = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2024-03-15",
    time: "14:00",
    type: "upcoming",
    completed: false,
  },
  {
    id: 2,
    title: "Project Deadline",
    date: "2024-03-20",
    time: "18:00",
    type: "upcoming",
    completed: true,
  },
  // Add more tasks as needed
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg">
            + Add Task
          </button>
        </div>
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="tasks">All Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Calendar Section */}
            <Card className="md:col-span-8 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    {date?.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setDate(new Date(date!.setMonth(date!.getMonth() - 1)))
                      }
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setDate(new Date(date!.setMonth(date!.getMonth() + 1)))
                      }
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>
            </Card>

            {/* Selected Date Tasks */}
            <Card className="md:col-span-4 p-6">
              <div className="space-y-6">
                <h2 className="font-semibold">
                  Tasks for {selectedDate?.toLocaleDateString()}
                </h2>

                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition"
                    >
                      <div className="flex-shrink-0">
                        {task.type === "upcoming" ? (
                          <Clock className="h-5 w-5 text-blue-500" />
                        ) : (
                          <CalendarIcon className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">{task.title}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <p>{new Date(task.date).toLocaleDateString()}</p>
                          <span className="mx-2">•</span>
                          <p>{task.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {tasks.length === 0 && (
                    <p className="text-gray-500 text-center py-4">
                      No tasks scheduled for this day
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tasks">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">All Tasks</h2>
                <div className="flex gap-2">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Sort by Date
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Filter
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    <button className="flex-shrink-0">
                      {task.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-300" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          task.completed ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {task.title}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <p>{new Date(task.date).toLocaleDateString()}</p>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <p>{task.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
