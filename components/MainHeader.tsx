import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.jpg';

export default function MainHeader() {
  return (
    <header id="main-header">
      <ul>
        <Link href="/">
          <Image src={logo.src} id="logo" alt="Logo" width="40" height="40" />
        </Link>
      </ul>
      <ul className="m-0 flex list-none gap-2 p-0 font-bold no-underline active:bg-amber-600 active:bg-clip-text">
        <Link href="/news">News</Link>
      </ul>
    </header>
  );
}
