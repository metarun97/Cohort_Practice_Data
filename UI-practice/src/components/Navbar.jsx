import React from 'react';
import mark from '../../public/mark.svg';
import user from '../../public/images.png';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="bg-slate-400 w-full py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <RxHamburgerMenu className='block md:hidden text-2xl text-slate-200'/>
          <div className="w-10 h-10">
            <img className="w-full h-full object-cover" src={mark} alt="" />
          </div>
          <ul className="hidden md:flex items-center gap-x-5">
            <li className="px-2 py-1 bg-slate-600 rounded cursor-pointer text-slate-200 font-semibold">
              Dashboard
            </li>
            <li className="cursor-pointer text-slate-200 font-semibold">
              Team
            </li>
            <li className="cursor-pointer text-slate-200 font-semibold">
              Projects
            </li>
            <li className="cursor-pointer text-slate-200 font-semibold">
              Calender
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-x-2.5'>
          <IoNotificationsOutline className='text-2xl text-slate-200' />
          <div className='w-10 h-10'>
            <img className='w-full h-full object-cover rounded-full' src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
