"use client";

import {
  faDiscord,
  faGithub,
  faMedium,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeSwitcher from '../themeSwitcher';

export const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) {
    return null;
  }
  
  const handleTheme = () => {
    if(theme === "dark") {
      setTheme("light")
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="pt-20 font-medium max-md:text-sm md:pt-32 bg-white dark:bg-darkFooter">
      <div className="container m-auto max-md:px-5">
        <div className="flex md:items-center md:justify-between">
          <div className="flex flex-1 flex-col gap-8 md:flex-row">
            <ul className="flex flex-col gap-3 md:flex-row md:items-center">
              <li className="cursor-pointer">Articles</li>
              <li className="cursor-pointer">Support</li>
            </ul>

            <div className="flex flex-wrap items-center gap-5">
              <div className="flex size-[40px] items-center justify-center rounded-full bg-content4 dark:text-black">
                <FontAwesomeIcon icon={faTelegram} className="text-lg" />
              </div>

              <div className="flex size-[40px] items-center justify-center rounded-full bg-content4 dark:text-black">
                <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
              </div>

              <div className="flex size-[40px] items-center justify-center rounded-full bg-content4 dark:text-black">
                <FontAwesomeIcon icon={faDiscord} className="text-lg" />
              </div>

              <div className="flex size-[40px] items-center justify-center rounded-full bg-content4 dark:text-black">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </div>

              <div className="flex size-[40px] items-center justify-center rounded-full bg-content4 dark:text-black">
                <FontAwesomeIcon icon={faMedium} className="text-lg" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-end justify-end">
            <div className="flex size-[40px] items-center justify-center rounded-full bg-content4 dark:text-black">
              <ThemeSwitcher/>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex flex-col justify-between border-t border-content2 pb-[50px] pt-[30px] max-md:gap-10 md:h-[200px]">
          <div className="flex justify-between">
            <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
              <li className="cursor-pointer">Documentation</li>
              <li className="cursor-pointer">Security</li>
              <li className="cursor-pointer">Brand Kit</li>
              <li className="cursor-pointer">Tokens</li>
            </ul>

            <div className="flex flex-col justify-end md:flex-row">
              <button className="flex h-fit items-center gap-2 border border-content2 px-7 py-2 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800">
                <span className="text-content3 dark:text-white">Mirror</span>
                <FontAwesomeIcon icon={faAngleLeft} className="text-content2" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <ul className="flex flex-col gap-2 md:flex-row md:gap-5">
              <li>2024 &copy; Moniswap</li>
              <li>Terms of Service</li>
            </ul>

            <p>A public good for 🐻⛓️ Berachain</p>
          </div>
        </div>
      </div>
    </div>
  );
};
