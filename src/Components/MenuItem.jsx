import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

const MenuItem = ({ items, icons, isActive, path, toggle }) => {
  return (
    <Link
      to={path} 
      className={`${isActive ? 'bg-theme text-white ' : 'bg-transparent text-theme-gray '} 
                 ${toggle ? 'text-[0px] justify-center gap[0px] ': 'text-base justify-start gap-2'} px-6 py-2 flex rounded-10 hover:bg-theme hover:text-white transition-all duration-200 ease-linear`}>
      <span className='text-base'>{icons}</span> {items}
    </Link>
  );
};

export default MenuItem;
