import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title: 'BlackFlix Prime',
  description:
    'Verique os planos para um mundo digital completo.',
  keywords:
    'IPTV, assinatura, planos, canais',
  openGraph: {
    title: `BlackFlix Prime`,
    description:
      'Descubra alta qualidade de canais do mundo inteiro.',
    url: 'https://www.blackflixprime.com',
    type: 'website',
    images: [
      {
        url: 'https://www.blackflixprime.com/_next/image?url=%2Fblackflixprime.webp&w=640&q=100',
        alt: 'logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
