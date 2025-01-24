import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/parts/NavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Engineer Portfolio',
  description: 'Engineer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-700`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
