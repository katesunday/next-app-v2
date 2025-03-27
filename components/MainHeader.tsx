import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.jpg';
import NavLink from './NavLink';

export default function MainHeader() {
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
            <NavLink href={'/news'}>News</NavLink>
          </li>
          <li>
            <NavLink href={'/archive'}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
