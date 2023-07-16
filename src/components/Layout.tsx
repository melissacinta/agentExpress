import { Children, ReactNode, useState } from 'react';
import AppHeader from './AppHeader';
import SideBar from './SideBar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="fixed w-full inset-0 z-50 h-max">
        <AppHeader setSidebarOpen={setSidebarOpen} />
      </div>
      <div>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="lg:pl-64 mt-20">
          <main>
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 dark:text-white">
              {/* Main area */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
