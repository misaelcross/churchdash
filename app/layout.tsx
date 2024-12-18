import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '../components/layout/providers';
import { auth } from '../auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calendário com FullCalendar e Shadcn',
  description: 'Um calendário estilizado com Tailwind CSS e FullCalendar'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen items-center justify-center bg-gray-50`}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
