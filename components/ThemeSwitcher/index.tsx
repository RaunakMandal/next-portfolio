'use client';

import { useEffect, useState } from 'react';
import { ICONS } from '@/core/icons';
import {
  DEFAULT_THEME,
  getOppositeTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
  ThemeName,
  THEMES,
} from '@/core/theme/config';

function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeName>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const resolved = resolveTheme(stored);
    setTheme(resolved);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = getOppositeTheme(theme);
    document.documentElement.classList.add('theme-transition');
    applyTheme(next);
    setTheme(next);
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  };

  const isDark = theme === THEMES.dark;

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='btn btn-ghost btn-sm btn-square text-base-content/60 hover:text-primary'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className='relative flex items-center justify-center w-5 h-5'>
        <span
          className={`absolute transition-all duration-300 ${
            mounted && isDark
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          {ICONS.sun}
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            mounted && !isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        >
          {ICONS.moon}
        </span>
      </span>
    </button>
  );
};
