"use client";

import { TaskList } from "@/components/dashboard/TaskList";
// import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TaskStatistics } from "@/components/dashboard/TaskStatistics";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskDrawer } from "@/components/dashboard/AddTaskDrawer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTasks } from "@/context/TaskContext";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  const { tasks, addTask } = useTasks();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0); // Reset to start of the day

  // Define Future Date (Day After Tomorrow Onwards)
  const future = new Date();
  future.setDate(future.getDate() + 2);
  future.setHours(0, 0, 0, 0);

  const todayTasks = tasks.filter(
    (task) =>
      new Date(task.dueDate).toDateString() === new Date().toDateString()
  );

  const tomorrowTasks = tasks.filter((task) => {
    return new Date(task.dueDate).toDateString() === tomorrow.toDateString();
  });

  const futureTasks = tasks.filter((task) => {
    return new Date(task.dueDate) >= future;
  });

  return (
    <div className="space-y-8">
      {/* Search and Add Task Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <input
            type="text"
            placeholder="Search tasks..."
            className="px-4 py-2 border rounded-lg w-full md:w-80"
          />
          <Button
            className="w-full md:w-auto"
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
      </div>

      {/* Task Lists Section with Tabs */}
      <Card className="p-6">
        <Tabs defaultValue="today" className="space-y-4">
          <TabsList className="hidden md:grid w-full grid-cols-3">
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

          <TabsList className="md:hidden grid w-full grid-cols-3">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="future">Future</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <TaskList
              title="Today's Tasks"
              tasks={todayTasks.filter((task) => task.status === "pending")}
              variant="today"
            />
          </TabsContent>

          <TabsContent value="tomorrow">
            <TaskList
              title="Tomorrow"
              tasks={tomorrowTasks.filter((task) => task.status === "pending")}
              variant="tomorrow"
              dueDate={tomorrow}
            />
          </TabsContent>

          <TabsContent value="future">
            <TaskList
              title="Future Tasks"
              tasks={futureTasks.filter((task) => task.status === "pending")}
              variant="future"
              dueDate={future}
            />
          </TabsContent>
        </Tabs>
      </Card>

      <Card className="p-6">
        <Tabs defaultValue="completed" className="space-y-4">
          <TabsList className=" grid w-full grid-cols-2">
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="completed">
            <TaskList
              title="Completed Tasks"
              tasks={tasks.filter((task) => task.status === "completed")}
              variant="completed"
            />
          </TabsContent>

          <TabsContent value="cancelled">
            <TaskList
              title="Cancelled Tasks"
              tasks={tasks.filter((task) => task.status === "cancelled")}
              variant="cancelled"
            />
          </TabsContent>
        </Tabs>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <RecentActivity />
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <TaskStatistics tasks={tasks} />
          </Card>
        </div>
      </div>
    </div>
  );
}
