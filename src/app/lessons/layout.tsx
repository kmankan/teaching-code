import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import ProgressBar from "@/components/ProgressBar";

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ProgressBar />

      {/* Header */}
      <header className="sticky top-1 z-40 bg-background/80 backdrop-blur-sm border-b border-border px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link href="/" className="font-bold text-sm sm:text-base hover:text-accent transition-colors">
            Learn to Vibecode
          </Link>
        </div>
        <ThemeToggle />
      </header>

      {/* Content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
