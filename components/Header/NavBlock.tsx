'use client'
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBlock() {
  const path = usePathname();

  return (
    <nav>
      <ul className='flex justify-around gap-3'>
        <li>
          <Link
            href="/"
            className={cn({
              'text-red-600': path === '/'
            })}
          >
            Про Нас
          </Link>
        </li>
        <li>
          <Link
            href="/patient"
            className={cn({
              'text-red-600': path === '/patient'
            })}
          >
            Пацієнтам
          </Link>
        </li>
        <li>
          <Link
            href="/med"
            className={cn({
              'text-red-600': path === '/med'
            })}
          >
            Лікарям
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className={cn({
              'text-red-600': path === '/contacts'
            })}
          >
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  )
}