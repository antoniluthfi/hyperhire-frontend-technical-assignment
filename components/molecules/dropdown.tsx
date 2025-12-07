'use client';

import { useState } from 'react';
import { useWindowSize } from '@/hooks/use-window-size';
import { Icon } from '@/components/atoms';
import Link from 'next/link';

type DropdownItem = { label: string; href: string; separator?: boolean };

type Props = {
  label: string;
  title?: string;
  items: DropdownItem[];
};

export default function Dropdown({ label, title, items }: Props) {
  const { isDesktop } = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative group before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-full before:h-3 before:w-80`}>
      <button
        type="button"
        className="opacity-90 hover:opacity-100 inline-flex items-center gap-1 font-black"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="dropdown-menu"
        onClick={() => {
          if (!isDesktop) {
            setOpen((v) => !v);
          }
        }}>
        {label}
        <Icon
          src="/images/ic_caret_down.png"
          alt="caret down"
          width={16}
          height={16}
          className={`transform transition-transform duration-200 ease-out group-hover:rotate-180 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        id="dropdown-menu"
        role="menu"
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 w-80 rounded-lg overflow-hidden bg-white text-[#0F172A] shadow-xl ring-1 ring-black/10 transition-opacity transition-transform duration-200 ease-out ${
          isDesktop
            ? 'opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
            : open
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
        <li role="none" className="px-4 pt-4 pb-2 font-black text-[#0F172A]">
          {title ?? label}
        </li>
        {items.map((item, i) => (
          <li key={i} role="none">
            <Link
              role="menuitem"
              className={`block px-4 py-3 text-[#344054] hover:bg-slate-50 ${item.separator ? 'border-t border-slate-100' : ''}`}
              href={item.href}
              onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
