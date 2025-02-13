"use client";

import { TaskList } from "@/components/dashboard/TaskList";
// import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TaskStatistics } from "@/components/dashboard/TaskStatistics";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Task } from "@/types/task";
import { AddTaskDrawer } from "@/components/dashboard/AddTaskDrawer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const loadTasks = (): Task[] => {
  if (typeof window !== "undefined") {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  return [];
};

// const mockActivities: Activity[] = [
//   {
//     id: "1",
//     type: "completed",
//     taskId: "1",
//     taskTitle: "Website Design Review",
//     timestamp: "2024-03-14T16:23:00Z",
//     userId: "user1",
//   },
//   // ... more mock activities
// ];

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const todayTasks = tasks.filter(
    (task) =>
      new Date(task.dueDate).toDateString() === new Date().toDateString()
  );

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    // Save the new task to localStorage
    // localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const tomorrowTasks = tasks.filter((task) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return new Date(task.dueDate).toDateString() === tomorrow.toDateString();
  });

  const futureTasks = tasks.filter((task) => {
    const future = new Date();
    future.setDate(future.getDate() + 2);
    future.setHours(0, 0, 0, 0);
    return new Date(task.dueDate) >= future;
  });


  return (
    <div className="space-y-8">
      {/* Search and Add Task Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search tasks..."
            className="px-4 py-2 border rounded-lg w-80"
          />
        </div>
        <Button onClick={() => setIsDrawerOpen(true)}>+ Add Task</Button>
        <AddTaskDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onSubmit={addTask}
        />
      </div>

      {/* Task Lists Section with Tabs */}
      <Card className="p-6">
        <Tabs defaultValue="today" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">
              Today&apos;s Tasks ({todayTasks.length})
            </TabsTrigger>
            <TabsTrigger value="tomorrow">
              Tomorrow ({tomorrowTasks.length})
            </TabsTrigger>
            <TabsTrigger value="future">
              Future Tasks ({futureTasks.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <TaskList
              title="Today's Tasks"
              tasks={todayTasks}
              variant="today"
            />
          </TabsContent>

          <TabsContent value="tomorrow">
            <TaskList
              title="Tomorrow"
              tasks={tomorrowTasks}
              variant="tomorrow"
            />
          </TabsContent>

          <TabsContent value="future">
            <TaskList
              title="Future Tasks"
              tasks={futureTasks}
              variant="future"
            />
          </TabsContent>
        </Tabs>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <Card className="p-6">
          <RecentActivity activities={mockActivities} />
        </Card> */}

        <div className="space-y-6">
          <Card className="p-6">
            <TaskStatistics tasks={tasks} />
          </Card>
        </div>
      </div>
    </div>
  );
}
