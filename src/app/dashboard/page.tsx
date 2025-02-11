"use client";

import { TaskList } from "@/components/dashboard/TaskList";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TaskStatistics } from "@/components/dashboard/TaskStatistics";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Types that will match our future backend schema
interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  status: "pending" | "completed" | "in_progress";
  priority: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
  userId: string; // For authentication
  categoryId?: string; // For task categorization
}

interface Activity {
  id: string;
  type: "created" | "completed" | "updated" | "deleted";
  taskId: string;
  taskTitle: string;
  timestamp: string;
  userId: string;
}

// Mock data - will be replaced with API calls
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Team meeting at 2 PM",
    description: "Weekly sync with development team",
    dueDate: new Date().toISOString().split("T")[0], // Today
    status: "pending",
    priority: "high",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    userId: "user1",
  },
  {
    id: "2",
    title: "Review project proposal",
    description: "Review and provide feedback on new client proposal",
    dueDate: new Date().toISOString().split("T")[0], // Today
    status: "in_progress",
    priority: "medium",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    userId: "user1",
  },
  {
    id: "3",
    title: "Client presentation preparation",
    description: "Prepare slides for tomorrow's client meeting",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0], // Tomorrow
    status: "pending",
    priority: "high",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    userId: "user1",
  },
  {
    id: "4",
    title: "Update documentation",
    description: "Update API documentation with new endpoints",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0], // Tomorrow
    status: "pending",
    priority: "low",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    userId: "user1",
  },
  {
    id: "5",
    title: "Quarterly planning session",
    description: "Plan next quarter objectives and key results",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 5))
      .toISOString()
      .split("T")[0], // Future
    status: "pending",
    priority: "high",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    userId: "user1",
  },
  {
    id: "6",
    title: "Code review",
    description: "Review pull requests for the new feature",
    dueDate: new Date(new Date().setDate(new Date().getDate() + 3))
      .toISOString()
      .split("T")[0], // Future
    status: "pending",
    priority: "medium",
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    userId: "user1",
  },
];

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "completed",
    taskId: "1",
    taskTitle: "Website Design Review",
    timestamp: "2024-03-14T16:23:00Z",
    userId: "user1",
  },
  // ... more mock activities
];

export default function DashboardPage() {
  // const [date, setDate] = useState<Date | undefined>(new Date());

  const todayTasks = mockTasks.filter(
    (task) =>
      new Date(task.dueDate).toDateString() === new Date().toDateString()
  );

  const tomorrowTasks = mockTasks.filter((task) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return new Date(task.dueDate).toDateString() === tomorrow.toDateString();
  });

  const futureTasks = mockTasks.filter((task) => {
    const future = new Date();
    future.setDate(future.getDate() + 2);
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
          <input type="date" className="px-4 py-2 border rounded-lg" />
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
          + Add Task
        </button>
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
        <Card className="p-6">
          <RecentActivity activities={mockActivities} />
        </Card>

        <div className="space-y-6">
          {/* <Card className="p-6">
            <h2 className="font-semibold text-lg mb-4">Calendar</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </Card> */}

          <Card className="p-6">
            <TaskStatistics tasks={mockTasks} />
          </Card>
        </div>
      </div>
    </div>
  );
}
