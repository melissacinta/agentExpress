import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import Logo from './Logo';
import ToggleSwitch from './ToggleSwitch';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { classNames, imageUrl } from '../utils';
import useAuth from '../hooks/useAuth';

type Props = {
  setSidebarOpen: (x: boolean) => void;
};

const userNavigation = [{ name: 'Sign out', href: '#' }];

const AppHeader = ({ setSidebarOpen }: Props) => {
  const { user } = useAuth();
  return (
    <div className="bg-white dark:bg-primary-dark w-full flex justify-between px-4 lg:px-16 dark:text-white transition-all duration-500 linear py-6 h-max border-b-2 border-border-light">
      <div className="flex items-center gap-x-4">
        <button
          type="button"
          className="-m-2.5 p-2.5 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <FiMenu className="h-6 w-6" aria-hidden="true" />
        </button>

        <div
          className="h-6 w-px bg-border-light dark:bg-border-light/50 lg:hidden"
          aria-hidden="true"
        />
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="block md:hidden">
          <Logo small />
        </div>
      </div>
      <div className="flex items-center gap-x-8">
        <ToggleSwitch />
        <button
          type="button"
          className="-m-2.5 p-2.5 text-grey-light dark:text-primary-light hover:text-gray-300"
        >
          <span className="sr-only">View notifications</span>
          <FiBell className="h-6 w-6" aria-hidden="true" />
        </button>
        <Menu as="div" className="relative">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src={imageUrl(user?.displayImage)}
              alt=""
            />
            <span className="hidden lg:flex lg:items-center">
              <span
                className="ml-4 text-sm font-semibold leading-6 "
                aria-hidden="true"
              >
                {user?.fullName}
              </span>
              <FiChevronDown
                className="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-56 divide-y divide-border-light origin-top-right rounded-md bg-primary-light dark:bg-primary-dark py-2 shadow-lg ring-1 ring-border-light/50 focus:outline-none">
              <div className="px-4 py-3">
                <p className="text-sm">Signed in as</p>
                <p className="truncate text-sm font-medium">{user?.email}</p>
              </div>
              <div className="py-1">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? 'bg-gradient-linear text-white' : '',
                          'block px-3 py-1 text-sm leading-6'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default AppHeader;
