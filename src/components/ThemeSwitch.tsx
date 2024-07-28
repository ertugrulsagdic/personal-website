'use client';

import { Moon } from './icons/Moon';
import { Sun } from './icons/Sun';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch({ className, children }: { className?: string, children?: string }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  return (
    <button
      aria-label="Switch to light mode"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className={className}
    >
      {children && <p>{children}</p>}
      {(resolvedTheme === 'dark') ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}