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
            <NavLink title={'News'} href={'/news'} />
          </li>
          <li>
            <NavLink title={'Archive'} href={'/archive'} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
