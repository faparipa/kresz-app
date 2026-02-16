'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition
     ${
       pathname === path
         ? 'bg-amber-800 text-white'
         : 'text-amber-900 hover:bg-amber-200'
     }`;

  return (
    <nav className='sticky top-0 z-40 bg-amber-100 border-b border-amber-300 shadow-sm'>
      <div className='mx-auto max-w-4xl flex items-center justify-between p-3'>
        <Link href='/' className='font-bold text-amber-900 text-lg'>
          Jogsértések
        </Link>

        <div className='flex gap-2'>
          <Link href='/' className={linkStyle('/')}>
            Kereső
          </Link>

          <Link href='/segedletek' className={linkStyle('/segedletek')}>
            Segédletek
          </Link>
        </div>
      </div>
    </nav>
  );
}
