// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-900 dark:text-white transition-all"
    >
      {theme === "dark" ? <Sun   size={18} /> : <Moon size={18} />}
    </button>
  );
}
