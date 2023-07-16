import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme'));
  const activeTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(activeTheme);
    root.classList.add(theme as string);
    localStorage.setItem('theme', theme as string);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme] as const;
};

export default useThemeSwitcher;
