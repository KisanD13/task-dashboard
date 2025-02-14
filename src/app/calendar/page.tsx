"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Check,
  X,
  XCircle,
  Clock,
  Edit,
  Trash2,
} from "lucide-react";
import { useTasks } from "@/context/TaskContext";
import { EditTaskDrawer } from "@/components/dashboard/EditTaskDrawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDueDate, isTaskForToday } from "@/utils/utils";
import { AddTaskDrawer } from "@/components/dashboard/AddTaskDrawer";

export default function CalendarPage() {
  const {
    tasks,
    updateTaskStatus,
    completeTask,
    cancelledTask,
    deleteTask,
    pendingTask,
    addTask,
  } = useTasks();
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  // 📌 Filter tasks for the selected date
  const filteredTasks = tasks.filter(
    (task) =>
      new Date(task.dueDate).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="space-y-8 p-6">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <Button
          className="w-1/2 md:w-auto"
          onClick={() => setIsDrawerOpen(true)}
        >
          + Add Task
        </Button>
        <AddTaskDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onSubmit={addTask}
        />
      </div>

      <Tabs defaultValue="calendar">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="tasks">All Tasks</TabsTrigger>
        </TabsList>

        {/* 📅 Calendar View */}
        <TabsContent value="calendar">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 🗓️ Calendar Section */}
            <Card className="w-full md:w-2/3 p-6">
              <div className="space-y-4">
                {/* 🔄 Month Navigation */}
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
                    onSelect={(day) => day && setSelectedDate(day)}
                    className="rounded-md border"
                  />
                </div>
              </div>
            </Card>

            {/* 📋 Task List for Selected Date */}
            <Card className="w-full md:w-1/3 p-6">
              <h2 className="font-semibold text-center">
                Tasks for {selectedDate.toLocaleDateString()}
              </h2>

              <div className="space-y-4 mt-4">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => {
                    return (
                      <div key={task.id}>
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

                              <span title={task.description}>{task.title}</span>
                            </div>

                            {task.status === "pending" && (
                              <Badge
                                variant="outline"
                                className="text-yellow-600"
                              >
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
                              {task.status !== "completed" &&
                                isTaskForToday(task) && (
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
                          onClose={() => {
                            setIsDrawerOpen(false);
                          }}
                          taskId={selectedTaskId}
                        />
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    No tasks scheduled for this day
                  </p>
                )}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* 📋 All Tasks Tab */}
        <TabsContent value="tasks">
          <Card className="p-6">
            <h2 className="font-semibold mb-4">All Tasks</h2>
            <div className="space-y-4">
              <div className="space-y-4 mt-4">
                {tasks.length > 0 ? (
                  tasks.map((task) => {
                    const isTaskForToday = () => {
                      const taskDate = new Date(task.dueDate);
                      const today = new Date();
                      today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

                      return taskDate.toDateString() === today.toDateString();
                    };
                    return (
                      <div key={task.id}>
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

                              <span title={task.description}>{task.title}</span>
                            </div>

                            {task.status === "pending" && (
                              <Badge
                                variant="outline"
                                className="text-yellow-600"
                              >
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
                              {task.status !== "completed" &&
                                isTaskForToday() && (
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
                            <Badge
                              variant="outline"
                              className={`${
                                task.status === "completed"
                                  ? "text-green-600"
                                  : task.status === "cancelled"
                                  ? "text-red-600"
                                  : "text-yellow-600"
                              }`}
                            >
                              Task{" "}
                              {task.status === "completed"
                                ? `is completed on ${
                                    task.completedAt &&
                                    formatDueDate(
                                      task?.completedAt.toDateString()
                                    )
                                  }`
                                : task.status === "cancelled"
                                ? `is cancelled on ${
                                    task.cancelledAt &&
                                    formatDueDate(
                                      task?.cancelledAt.toDateString()
                                    )
                                  }`
                                : `is scheduled for ${formatDueDate(
                                    task.dueDate.toDateString()
                                  )}`}{" "}
                            </Badge>
                          </div>
                        </div>

                        <EditTaskDrawer
                          isOpen={isDrawerOpen}
                          onClose={() => {
                            setIsDrawerOpen(false);
                          }}
                          taskId={selectedTaskId}
                        />
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    No tasks scheduled for this day
                  </p>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
