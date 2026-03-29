import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
title: 'REPUTEBULL | Reputation-First Digital Marketing',
description: 'REPUTEBULL: Revenue-focused digital marketing and reputation management for businesses, public figures, and leaders worldwide.',
keywords: 'digital marketing, reputation management, SEO, web development, Abuja, global',
authors: [{ name: 'REPUTEBULL' }],
  icons: {
    icon: 'https://i.imgur.com/muXihmh.png',
    apple: 'https://i.imgur.com/muXihmh.png',
  },
  openGraph: {
    title: 'REPUTEBULL Case Studies & Services',
    description: 'REPUTEBULL delivers measurable growth through SEO, web development, ads and reputation management.',
    type: 'website',
    images: ['https://i.imgur.com/muXihmh.png'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
