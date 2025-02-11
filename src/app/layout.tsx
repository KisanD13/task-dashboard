import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Dashboard",
  description: "Task Management Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full relative">
          <div className="hidden md:flex h-full md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-50">
            <Sidebar />
          </div>
          <main className="md:pl-72 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
