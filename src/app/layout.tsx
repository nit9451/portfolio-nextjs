import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Nitish Kumar - Fullstack Developer',
  description: 'Fullstack Developer specializing in React, Node.js, and modern web technologies. Building scalable applications with clean code and innovative solutions.',
  keywords: ['fullstack developer', 'react', 'nodejs', 'javascript', 'web development', 'software engineer'],
  authors: [{ name: 'Nitish Kumar' }],
  creator: 'Nitish Kumar',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nitishkumar.dev',
    title: 'Nitish Kumar - Fullstack Developer',
    description: 'Fullstack Developer specializing in React, Node.js, and modern web technologies.',
    siteName: 'Nitish Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitish Kumar - Fullstack Developer',
    description: 'Fullstack Developer specializing in React, Node.js, and modern web technologies.',
    creator: '@nitishkumar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}