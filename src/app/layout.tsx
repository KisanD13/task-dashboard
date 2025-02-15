import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TasksProvider } from "@/context/TaskContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Dashboard",
  description: "Task Management Dashboard",
  generator: "Next.js",
  manifest: "/manifest.json",
  applicationName: "Task Dashboard",
  themeColor: "#00ff00",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Task Dashboard",
  },
  icons: [
    { rel: "icon", url: "/icons/taskM-192.png" },
    { rel: "apple-touch-icon", url: "/icons/taskM-192.png" },
  ],
  viewport:
    "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/taskM-192.png" />
        <link rel="apple-touch-icon" href="/icons/taskM-192.png" />
      </head>
      <body className={inter.className}>
        <TasksProvider>
          <div className="h-full relative">
            <div className="md:flex h-full md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-50">
              <Sidebar />
            </div>
            <main className="md:pl-72 p-8">{children}</main>
          </div>
        </TasksProvider>
      </body>
    </html>
  );
}
