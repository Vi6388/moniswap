'use client';

import Logo from '@/assets/images/logo.svg';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn, useDisclosure } from '@nextui-org/react';
import { useClickAway } from 'ahooks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ConnectModal } from '../connectModal';

const NavItems = [
  {
    name: 'Swap',
    href: '/components/swap',
  },
  {
    name: 'Dashboard',
    href: '/components/dashboard',
  },
  {
    name: 'Liquidity',
    href: '/components/liquidity',
  },
  {
    name: 'Vote',
    href: '/vote',
  },
  {
    name: 'Lock',
    href: '/lock',
  },
  {
    name: 'Incentives',
    href: '/incentives',
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { isOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useClickAway(() => {
    setMenuOpen(false);
  }, [ref1, ref2]);

  return (
    <div className="max-md:px-3">
      <div className="container m-auto flex items-center justify-between border-b border-navBorder py-3 max-md:px-2 md:py-5">
        <Link href={'/'} className="flex items-center gap-1">
          <Image src={Logo} width={50} height={50} alt="logo" />
          <span className="hidden text-3xl font-semibold md:block">
            MONISWAP
          </span>
        </Link>
        <div className="absolute left-[50%] hidden -translate-x-[50%] items-center gap-10 text-sm font-medium lg:flex">
          {NavItems.map((nav, index) => {
            return (
              <Link
                href={nav.href}
                className={cn('cursor-pointer py-1', {
                  'border-b border-content4': pathname.includes(nav.href),
                })}
                key={index}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="text-md rounded-lg bg-primary px-3 py-2 font-medium text-white"
            onClick={onOpenChange}
          >
            Connect
          </button>
          <button
            className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-black1 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={ref1}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-xl text-white" />
            ) : (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="text-xl text-white"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 flex w-full flex-col gap-4 bg-base dark:bg-darkFooter px-8 py-8 shadow-lg ${menuOpen ? 'flex flex-col' : 'hidden'}`}
        ref={ref2}
      >
        {NavItems.map((nav, index) => {
          return (
            <Link
              key={index}
              href={nav.href}
              className="flex h-[40px] cursor-pointer items-center gap-5 rounded-lg bg-white font-medium text-black1"
            >
              <p
                className={`h-full w-[10px] rounded-l-lg ${pathname === nav.href ? 'bg-content2' : 'bg-content3'}`}
              ></p>
              <p>{nav.name}</p>
            </Link>
          );
        })}
      </div>
      <ConnectModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};