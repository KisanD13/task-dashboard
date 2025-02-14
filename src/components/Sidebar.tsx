"use client";

// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Calendar,
  Clock,
  BarChart2,
  Menu,
} from "lucide-react";
import { useState } from "react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Calendar",
    icon: Calendar,
    href: "/calendar",
    color: "text-violet-500",
  },
  {
    label: "History",
    icon: Clock,
    href: "/history",
    color: "text-pink-700",
  },
  {
    label: "Analytics",
    icon: BarChart2,
    href: "/analytics",
    color: "text-orange-700",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const SidebarContent = (
    <div className="space-y-4 py-4 flex flex-col h-full">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <div className="rounded-full bg-gray-200 w-full h-full" />
          </div>
          <div>
            <p className="font-semibold">King Kishan</p>
            <p className="text-xs text-muted-foreground">Premium User</p>
          </div>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <button
              key={route.href}
              onClick={() => handleNavigation(route.href)}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? "text-primary bg-primary/10"
                  : "text-zinc-500"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Separator />
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <SheetTitle className="flex items-center justify-center">
            <Menu className="h-8 w-8 md:hidden ml-2 mt-2" />
            <span className="text-2xl font-bold md:hidden absolute left-1/2 transform -translate-x-1/2 mt-2">
              Task Manager
            </span>
          </SheetTitle>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          {SidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full w-72 flex-col">
        {SidebarContent}
      </div>
    </>
  );
}
