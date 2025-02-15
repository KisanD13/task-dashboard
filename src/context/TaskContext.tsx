"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Task } from "@/types/task";

interface TasksContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  completeTask: (completeTask: Task) => void;
  cancelledTask: (cancelledTask: Task) => void;
  deleteTask: (deleteTask: Task) => void;
  pendingTask: (pendingTask: Task) => void;
  updateTaskStatus: (
    taskId: string,
    newStatus: "completed" | "cancelled"
  ) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Update an existing task
  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const completeTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...task, status: "completed" } : t
      )
    );
  };

  const cancelledTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...task, status: "cancelled" } : t
      )
    );
  };

  const pendingTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...task, status: "pending" } : t
      )
    );
  };

  const deleteTask = (task: Task) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  const updateTaskStatus = (
    taskId: string,
    newStatus: "completed" | "cancelled"
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
              updatedAt: new Date().toISOString(),
              completedAt:
                newStatus === "completed"
                  ? new Date().toISOString()
                  : undefined,
              cancelledAt:
                newStatus === "cancelled"
                  ? new Date().toISOString()
                  : undefined,
            }
          : task
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        completeTask,
        cancelledTask,
        deleteTask,
        pendingTask,
        updateTaskStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
}
