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
  title: 'IPTV PRO',
  description:
    'Verique os planos para um mundo digital completo.',
  keywords:
    'IPTV, assinatura, planos, canais',
  openGraph: {
    title: `IPTV SMART PRO`,
    description:
      'Descubra alta qualidade de canais do mundo inteiro.',
    url: 'https://iptvpro-ten.vercel.app',
    type: 'website',
    images: [
      {
        url: '',
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
