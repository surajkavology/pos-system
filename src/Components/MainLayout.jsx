import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

const MainLayout = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  // Add all routes where you want to hide the sidebar
  const hideSidebarRoutes = ['/logout'];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="main-layout flex">
      {!shouldHideSidebar && <SidebarMenu toggle={toggle} setToggle={setToggle} />}
      <div className={`${!shouldHideSidebar ? (toggle ? 'ml-[80px]' : 'ml-[300px]') : 'ml-0'} w-full overflow-hidden bg-zinc-50 min-h-screen p-8`}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
