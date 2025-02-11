import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  // SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Task } from "@/types/task";

interface AddTaskDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
}

export function AddTaskDrawer({
  isOpen,
  onClose,
  onSubmit,
}: AddTaskDrawerProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      dueDate,
      status: "pending",
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: "user1",
    };

    onSubmit(newTask);
    onClose();
    // Reset form
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("medium");
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New Task</SheetTitle>
          <SheetDescription>
            Create a new task by filling out the form below.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              min={today}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task["priority"])}
              className="w-full border rounded-md p-2"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            Add Task
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
