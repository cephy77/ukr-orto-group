import Link from 'next/link';
import { NavBlock } from './NavBlock';


export function Header() {

  return (
    <header className='h-15 border-b-2 bg-sky-100 border-sky-500 flex justify-between items-center p-6 sticky top-0'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>UKR ORTO GROUP</h1>
      </Link>
      <NavBlock />
    </header>
  )
}