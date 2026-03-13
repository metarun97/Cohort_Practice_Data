import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-blue-400 flex items-center justify-between px-6'>
      <h1 className='text-2xl'>Sheriyans</h1>
      <div className='flex gap-6 text-xl'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
