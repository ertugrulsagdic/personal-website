'use client';

import { Moon } from './icons/Moon';
import { Sun } from './icons/Sun';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  return (
    <button
      aria-label="Switch to light mode"
      onClick={() => {
        console.log('Theme Switched');
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className="dark:border-zinc-700 dark:bg-zinc-800 p-2 border shadow-lg rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      {(resolvedTheme === 'dark') ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}