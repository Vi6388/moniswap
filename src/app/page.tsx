'use client';
import { useState } from "react";
import { Mainpage } from "./components/main/main";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  // const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <Mainpage />
  );
}
