import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ssamssam Documents',
  description: 'ssamssam Documents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
