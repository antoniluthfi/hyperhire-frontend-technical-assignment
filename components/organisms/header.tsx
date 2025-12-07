'use client';

import { useEffect, useState } from 'react';
import { Logo, Button } from '@/components/atoms';
import { Dropdown } from '@/components/molecules';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
      <Logo variant="header" />
      <nav className="hidden sm:flex items-center gap-8">
        <Dropdown
          label="채용"
          title="채용"
          items={[
            { label: '해외 개발자 원격 채용', href: '#services' },
            { label: '외국인 원격 채용 (비개발 직군)', href: '#services' },
            {
              label: '한국어 가능 외국인 채용',
              href: '#services',
              separator: true,
            },
          ]}
        />
        <Link className="opacity-90 hover:opacity-100 font-black" href="#services">
          해외 개발자 채용 서비스
        </Link>
      </nav>

      <button
        type="button"
        aria-label="Open menu"
        className="sm:hidden ring-1 ring-white/20"
        onClick={() => setOpen(true)}>
        <span className="block w-5 h-[2px] bg-white mb-[4px]" />
        <span className="block w-5 h-[2px] bg-white mb-[4px]" />
        <span className="block w-5 h-[2px] bg-white" />
      </button>
      <Button variant="white" className="hidden sm:block">
        문의하기
      </Button>
      <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
          aria-hidden={true}
        />
        <div
          role="dialog"
          aria-modal={true}
          className={`absolute left-0 top-0 bottom-0 w-80 bg-white text-[#0F172A] shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <span className="font-black">메뉴</span>
            <button type="button" aria-label="Close menu" className="p-2" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <nav className="p-4 space-y-2">
            <Link
              href="#services"
              className="block py-3 font-black opacity-90 hover:opacity-100"
              onClick={() => setOpen(false)}>
              해외 개발자 채용 서비스
            </Link>
            <div className="border-t my-2 border-slate-200" />
            <Link href="#services" className="block py-3 text-[#344054]" onClick={() => setOpen(false)}>
              해외 개발자 원격 채용
            </Link>
            <Link href="#services" className="block py-3 text-[#344054]" onClick={() => setOpen(false)}>
              외국인 원격 채용 (비개발 직군)
            </Link>
            <Link href="#services" className="block py-3 text-[#344054]" onClick={() => setOpen(false)}>
              한국어 가능 외국인 채용
            </Link>
            <Button variant="primary" className="mt-4 w-full" onClick={() => setOpen(false)}>
              문의하기
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
