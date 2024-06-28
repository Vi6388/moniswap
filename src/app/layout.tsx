"use client";

import { Inter } from 'next/font/google';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import './globals.css';
import classNames from 'classnames'
import Provider from './components/provider';

const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Moniswap</title>
        <meta name="description" content="The central trading & liquidity marketplace on Berachain" />
      </head>
      <body className={classNames("bg-base dark:bg-dark-base", inter.className)}>
        <Provider>
          <div className="flex min-h-svh flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
