import { ReactNode, useEffect, useState } from 'react';
import AppHeader from './AppHeader';
import SideBar from './SideBar';
import useAuth from '../hooks/useAuth';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, navigate } = useAuth();
  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
  }, [user]);

  if (user) {
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
  }
  return null;
};

export default Layout;
