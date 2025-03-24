import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.jpg';

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
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
