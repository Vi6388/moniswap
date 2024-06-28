"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger= () => {
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if(currentTheme ==="dark"){
      return (
        <button onClick={() => setTheme('light')}>
            <FontAwesomeIcon icon={faSun} className="text-xl text-black" />
        </button>
      )
    }

    else {
      return (
        <button role="button" onClick={() => setTheme('dark')}>
            <FontAwesomeIcon icon={faMoon} className="text-xl text-black" />
        </button>
      )
    }
  };

  return (
    <>
    {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher;
