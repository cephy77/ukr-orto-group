'use client'
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    path: '/',
    label: 'Про Нас'
  },
  {
    path: '/patient',
    label: 'Пацієнтам'
  },
  {
    path: '/med',
    label: 'Лікарям'
  },
  {
    path: '/contacts',
    label: 'Контакти'
  }
]

export function NavBlock() {
  const currentPath = usePathname();

  return (
    <nav className='w-full border-t-2 border-gray-400 md:border-t-0 pt-9 px-6 md:pt-0'>
      <ul className='flex flex-col w-1/2 md:w-full md:flex-row justify-around gap-1 md:gap-3'>
        {routes.map(({ path, label }) => (
          <li
            className={cn(
              'transition-all',
              {
                'hover:translate-x-3 md:hover:-translate-y-1 md:hover:translate-x-0': currentPath !== path
              }
            )}
            key={path}
          >
            <Link
              href={path}
              className={cn(
                'p-1 w-max rounded text-lg font-semibold md:text-center',
                {
                  'text-sky-900 bg-sky-200': currentPath === path,
                  'md:bg-gray-300': currentPath !== path
                }
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}