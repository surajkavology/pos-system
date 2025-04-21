import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteLogo from '../assets/Images/site-logo.svg';
import MenuItem from './MenuItem';

const SidebarMenu = ({ toggle, setToggle }) => { 
  const menuItems = [
    { item: "Dashboard", icon: <i className="ri-dashboard-fill"></i>, path: "/" },
    { item: "Order View", icon: <i className="ri-list-unordered"></i>, path: "/order-view" },
    { item: "Manage Items", icon: <i className="ri-stack-fill"></i>, path: "/manage-items" },
    { item: "Settings", icon: <i className="ri-settings-3-fill"></i>, path: "/settings" },
    { item: "Notifications", icon: <i className="ri-notification-2-fill"></i>, path: "/notifications" },
    { item: "Logout", icon: <i className="ri-logout-box-r-line"></i>, path: "/logout" },
  ];

  const location = useLocation();
  const activeIndex = menuItems.findIndex(menu => menu.path === location.pathname);

  function updateToggle(){
    setToggle(!toggle); 
  } 

  return (
    <div className={`${toggle ? 'w-[80px] py-0 px-4' : 'w-[300px] py-16 px-[50px]'} slidebar-menu  py-12  fixed top-0 left-0 bottom-0  shadow-2xl overflow-auto transition-all`}>
      <div className='dashborad-toggle lg:hidden text-right text-2xl mb-4 cursor-pointer px-2' onClick={updateToggle}>
        <i className="ri-menu-fold-line"></i>
      </div>
      <div className='site-logo mb-6'>
        <Link to={"/"} className='mb-16 block'>
          <img src={siteLogo} alt="site-logo" className={`${toggle ? 'hidden': 'block'} max-w-[150px] m-auto`} />
        </Link>
      </div>
      <div className='sidebar-menu'>
        <ul className='flex flex-col gap-3'>
          {menuItems.map((menu, index) => (
            <li key={index}>
              <MenuItem items={menu.item} icons={menu.icon} path={menu.path} isActive={activeIndex === index} toggle={toggle} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
