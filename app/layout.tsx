import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation-Components/Navigation';
import NavigationTitle from '@/components/Navigation-Components/NavigationTitle';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen bg-neutral-300 ${inter.className}`}
      >
        <Navigation />
        <NavigationTitle />
        {children}
        <Footer />
      </body>
    </html>
  );
}
