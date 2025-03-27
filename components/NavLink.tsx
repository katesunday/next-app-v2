'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ title, href }: { title: string; href: string }) {
  const path = usePathname();
  return (
    <Link className={path.startsWith(href) ? 'active' : undefined} href={href}>
      {title}
    </Link>
  );
}

export default NavLink;
