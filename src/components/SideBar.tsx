import { Transition, Dialog, Menu } from '@headlessui/react';
import { Fragment } from 'react';
import {
  FiCalendar,
  FiFile,
  FiFolder,
  FiHome,
  FiPieChart,
  FiUsers,
  FiX,
} from 'react-icons/fi';
import { classNames } from '../utils';
import Logo from './Logo';
import { IconType } from 'react-icons';

const navigation = [
  { name: 'Dashboard', href: '#', icon: FiHome as IconType, current: true },
  { name: 'Team', href: '#', icon: FiUsers as IconType, current: false },
  { name: 'Projects', href: '#', icon: FiFolder as IconType, current: false },
  { name: 'Calendar', href: '#', icon: FiCalendar as IconType, current: false },
  { name: 'Documents', href: '#', icon: FiFile as IconType, current: false },
  { name: 'Reports', href: '#', icon: FiPieChart as IconType, current: false },
];

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (x: boolean) => void;
};
const SideBar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <FiX className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary-light dark:bg-primary-dark pb-2 ring-1 ring-white/10">
                  <div className="flex  px-6 h-16 pt-4 shrink-0 items-center">
                    <Logo />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="-mx-2 flex-1 space-y-4 w-[98%]">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gradient-linear text-white rounded-r-full'
                                : 'text-[#858585] dark:text-white hover:bg-gray-50 hover:rounded-r-full',
                              'group flex gap-x-3 rounded-md hover:text-white hover:bg-gradient-rev hover:opacity-50 pl-12 py-2 text-sm leading-6 font-semibold transition-all duration-500 ease-in-out'
                            )}
                          >
                            <div className="relative w-6">
                              <div className="absolute inset-0 group-hover:hidden">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-8 h-8 transition-colors duration-300 ease-in-out"
                                >
                                  <linearGradient
                                    id={`gradient-mobile-${item.name}`}
                                    gradientUnits="userSpaceOnUse"
                                    x1="0"
                                    y1="0"
                                    x2="24"
                                    y2="24"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor={
                                        item.current ? '#FFFFFF' : '#FD749B'
                                      }
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor={
                                        item.current ? '#FFFFFF' : '#281AC8'
                                      }
                                    />
                                  </linearGradient>
                                  <mask id={`icon-mobile-mask-${item.name}`}>
                                    <item.icon
                                      aria-hidden="true"
                                      name={item.name}
                                    />
                                  </mask>
                                  <rect
                                    fill={`url(#gradient-mobile-${item.name})`}
                                    mask={`url(#icon-mobile-mask-${item.name})`}
                                    width="24"
                                    height="24"
                                  />
                                </svg>
                              </div>
                              <div className="hidden absolute w-6 inset-0 group-hover:flex items-center justify-center">
                                <item.icon
                                  aria-hidden="true"
                                  className=" text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                />
                              </div>
                            </div>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:block lg:w-64 lg:overflow-y-auto lg:bg-white lg:border-r-2 border-border-light lg:dark:bg-primary-dark lg:pb-4">
        <nav className="mt-32">
          <ul role="list" className="-mx-2 space-y-4 w-[98%]">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gradient-linear text-white rounded-r-full'
                      : 'text-[#858585] dark:text-white hover:bg-gray-50 hover:rounded-r-full',
                    'group flex gap-x-3 rounded-md hover:text-white hover:bg-gradient-rev hover:opacity-50 pl-12 py-2 text-sm leading-6 font-semibold transition-all duration-500 ease-in-out'
                  )}
                >
                  <div className="relative w-6">
                    <div className="absolute inset-0 group-hover:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 transition-colors duration-300 ease-in-out"
                      >
                        <linearGradient
                          id={`gradient-${item.name}`}
                          gradientUnits="userSpaceOnUse"
                          x1="0"
                          y1="0"
                          x2="24"
                          y2="24"
                        >
                          <stop
                            offset="0%"
                            stopColor={item.current ? '#FFFFFF' : '#FD749B'}
                          />
                          <stop
                            offset="100%"
                            stopColor={item.current ? '#FFFFFF' : '#281AC8'}
                          />
                        </linearGradient>
                        <mask id={`icon-mask-${item.name}`}>
                          <item.icon aria-hidden="true" name={item.name} />
                        </mask>
                        <rect
                          fill={`url(#gradient-${item.name})`}
                          mask={`url(#icon-mask-${item.name})`}
                          width="24"
                          height="24"
                        />
                      </svg>
                    </div>
                    <div className="hidden absolute w-6 inset-0 group-hover:flex items-center justify-center">
                      <item.icon
                        aria-hidden="true"
                        className=" text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
