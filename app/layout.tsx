import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
title: 'GetValue | SEO, Web Development & Paid Ads in Abuja',
description: 'GetValue: Revenue-focused digital marketing for restaurants, hotels, and pharmacies in Nigeria. SEO, Google Ads, web development, and local SEO services that drive measurable results.',
keywords: 'digital marketing Abuja, GetValue, SEO Nigeria, Google Ads Abuja, web development Nigeria, restaurant marketing, hotel digital marketing, pharmacy SEO',
authors: [{ name: 'GetValue' }],
  icons: {
    icon: '/logo.png',
    apple: '/gv-logo.png',
  },
  openGraph: {
    title: 'Marketing by Joshua',
    description: 'Strategic digital marketing that delivers measurable results for Nigerian businesses',
    type: 'website',
    images: ['/gv-logo.png'],
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
