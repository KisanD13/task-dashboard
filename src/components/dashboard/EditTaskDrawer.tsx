"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Task } from "@/types/task";
import { useTasks } from "@/context/TaskContext";

interface EditTaskDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  taskId: string | null;
}

export function EditTaskDrawer({
  isOpen,
  onClose,
  taskId,
}: EditTaskDrawerProps) {
  const { tasks, updateTask } = useTasks();
  const [task, setTask] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");

  useEffect(() => {
    if (taskId) {
      const existingTask = tasks.find((t) => t.id === taskId);

      if (existingTask) {
        setTask(existingTask);
        setTitle(existingTask.title);
        setDescription(existingTask.description || "");
        setDueDate(new Date(existingTask.dueDate).toISOString().split("T")[0]);
        setPriority(existingTask.priority);
      }
    }
  }, [taskId, tasks]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;

    const updatedTask: Task = {
      ...task,
      title,
      description,
      dueDate,
      priority,
      updatedAt: new Date().toISOString(),
    };

    updateTask(updatedTask);
    onClose();
  };

  if (!task) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Task</SheetTitle>
          <SheetDescription>Modify the details of your task.</SheetDescription>
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
            Save Changes
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
