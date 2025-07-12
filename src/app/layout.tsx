import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'Sin Filtro Blog - Alisha Ibarra Bello',
    template: '%s | Sin Filtro Blog'
  },
  description: 'Blog personal de Alisha Ibarra Bello sobre skincare, moda y vida nocturna. Descubre mi rutina con productos Caudalie Paris Vinopure, tendencias de moda y tips de fiesta. Viviendo sin filtros con mucho estilo.',
  keywords: ['blog', 'skincare', 'moda', 'fiesta', 'beauty', 'lifestyle', 'Alisha Ibarra', 'belleza', 'cuidado facial', 'tendencias', 'vida nocturna', 'Caudalie Paris', 'Vinopure', 'ácido salicílico', 'rutina skincare', 'piel acneica'],
  authors: [{ name: 'Alisha Ibarra Bello', url: 'https://instagram.com/ali.ibarrabello' }],
  creator: 'Alisha Ibarra Bello',
  publisher: 'Alisha Ibarra Bello',
  category: 'lifestyle',
  classification: 'Blog Personal',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://sinfiltroblogue.vercel.app',
    title: 'Sin Filtro Blog - Alisha Ibarra Bello',
    description: 'Blog personal sobre skincare, moda y vida nocturna. Descubre mi rutina con productos Caudalie Paris Vinopure. Viviendo sin filtros con mucho estilo.',
    siteName: 'Sin Filtro Blog',
    images: [
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'Sin Filtro Blog - Alisha Ibarra Bello',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sin Filtro Blog - Alisha Ibarra Bello',
    description: 'Blog personal sobre skincare, moda y vida nocturna. Descubre mi rutina con productos Caudalie Paris Vinopure. Viviendo sin filtros con mucho estilo.',
    creator: '@ali.ibarrabello',
    images: ['/apple-touch-icon.png'],
  },
  alternates: {
    canonical: 'https://sinfiltroblogue.vercel.app',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#FF69B4',
    'theme-color': '#FF69B4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#FF69B4" />
        <meta name="msapplication-TileColor" content="#FF69B4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sin Filtro" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
