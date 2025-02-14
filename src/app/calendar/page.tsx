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
import { useTasks } from "@/context/TaskContext";

export default function CalendarPage() {
  const { tasks, updateTaskStatus } = useTasks();
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // 🔹 Filter tasks based on selected date
  const filteredTasks = tasks.filter(
    (task) =>
      new Date(task.dueDate).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg">
          + Add Task
        </button>
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="tasks">All Tasks</TabsTrigger>
        </TabsList>

        {/* 📅 Calendar View */}
        <TabsContent value="calendar">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 📅 Calendar Section */}
            <Card className="w-full md:w-2/3 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    {date.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setDate(new Date(date.setMonth(date.getMonth() - 1)))
                      }
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setDate(new Date(date.setMonth(date.getMonth() + 1)))
                      }
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* 📆 Calendar Component */}
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(day) => {
                      if (day) {
                        setSelectedDate(day);
                      }
                    }}
                    className="rounded-md border"
                  />
                </div>
              </div>
            </Card>

            {/* 📋 Selected Date Tasks */}
            <Card className="w-full md:w-1/3 p-6">
              <div className="space-y-6">
                <h2 className="font-semibold text-center">
                  Tasks for {selectedDate.toLocaleDateString()}
                </h2>

                <div className="space-y-4">
                  {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition"
                      >
                        <button
                          onClick={() =>
                            updateTaskStatus(
                              task.id,
                              task.status === "completed"
                                ? "cancelled"
                                : "completed"
                            )
                          }
                          className="flex-shrink-0"
                        >
                          {task.status === "completed" ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-300" />
                          )}
                        </button>
                        <div className="flex-1 space-y-1">
                          <p
                            className={`font-medium ${
                              task.status === "completed"
                                ? "line-through text-gray-500"
                                : ""
                            }`}
                          >
                            {task.title}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <p>{new Date(task.dueDate).toLocaleDateString()}</p>
                            <span className="mx-2">•</span>
                            <p>{task.priority.toUpperCase()}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      No tasks scheduled for this day
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* 📋 All Tasks Tab */}
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
                    <button
                      onClick={() =>
                        updateTaskStatus(
                          task.id,
                          task.status === "completed"
                            ? "cancelled"
                            : "completed"
                        )
                      }
                      className="flex-shrink-0"
                    >
                      {task.status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-300" />
                      )}
                    </button>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          task.status === "completed"
                            ? "line-through text-gray-500"
                            : ""
                        }`}
                      >
                        {task.title}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <p>{new Date(task.dueDate).toLocaleDateString()}</p>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <p>{task.priority.toUpperCase()}</p>
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
