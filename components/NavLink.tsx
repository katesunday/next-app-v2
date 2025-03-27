'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const path = usePathname();
  return (
    <Link className={path.startsWith(href) ? 'active' : undefined} href={href}>
      {children}
    </Link>
  );
}

export default NavLink;
