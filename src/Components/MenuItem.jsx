import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const MenuItem = ({ items, icons, isActive, path }) => {
  return (
    <Link
      to={path} 
      className={`${isActive ? 'bg-theme text-white' : 'bg-transparent text-theme-gray'} 
                  text-base px-6 py-2 flex gap-2 rounded-10 hover:bg-theme hover:text-white transition-all duration-200 ease-linear`}>
      {icons} {items}
    </Link>
  );
};

export default MenuItem;
