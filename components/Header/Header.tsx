'use client';
import Link from 'next/link';
import cn from 'classnames';
import { NavBlock } from './NavBlock';
import { useState } from 'react';
import MenuButton from '../MenuButton';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(state => !state);

  return (
    <header
      className='border-b-2 bg-sky-50 border-sky-500 flex sticky top-0 flex-col lg:flex-row lg:justify-between items-center'
    >
      <div className='flex justify-between items-center w-full px-6 py-4'>
        <Link href='/'>
          <h1 className='text-xl md:text-2xl font-bold'>UKR ORTO GROUP</h1>
        </Link>
        <button
          onClick={toggleMenu}
          className='md:hidden'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuButton isOpen={isMenuOpen} />
        </button>
        <div className='hidden md:inline-block'>
          <NavBlock />
        </div>
      </div>

      <div className={cn(
        'flex items-center h-0 w-full transition-all duration-500 overflow-hidden md:hidden',
        {
          'h-52': isMenuOpen,
        })}>
        <div className='flex justify-center w-full h-full'>
          <NavBlock />
        </div>
      </div>

    </header>
  )
}