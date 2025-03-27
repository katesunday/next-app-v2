'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.jpg';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path = usePathname();
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">
          <Image src={logo.src} id="logo" alt="Logo" width="40" height="40" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              className={path.startsWith('/news') ? 'active' : undefined}
              href="/news"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith('/archive') ? 'active' : undefined}
              href="/archive/"
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
