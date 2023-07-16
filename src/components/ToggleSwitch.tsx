import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { Switch } from '@headlessui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ToggleSwitch = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  return (
    <Switch
      checked={activeTheme === 'light'}
      onChange={() => setTheme(activeTheme)}
      className="bg-transparent  border-2 border-grey-light dark:border-border-light  relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
    >
      <span className="sr-only">Use setting</span>
      <span className="bg-gradient-linear translate-x-0 dark:translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out">
        <span
          className="opacity-0 duration-100 ease-out dark:opacity-100 dark:duration-200 dark:ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          aria-hidden="true"
        >
          <FiMoon className="text-gray-200 hover:text-gray-50 text-sm" />
        </span>
        <span
          className="opacity-100 duration-200 ease-in dark:opacity-0 dark:duration-100 dark:ease-out absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          aria-hidden="true"
        >
          <FiSun className="text-gray-200 hover:text-gray-50 text-sm" />
        </span>
      </span>
    </Switch>
  );
};

export default ToggleSwitch;
