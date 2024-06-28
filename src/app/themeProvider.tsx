"use client";

import { createContext, useState, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes'


export const ThemeProvider = ({ children, ...props }: { children: ReactNode }) => {

  return (
    <NextThemesProvider>
      {children}
    </NextThemesProvider>
  );
};