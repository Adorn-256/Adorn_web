import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { JsonLd } from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00a3ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F19' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://adornsoft.tech'),
  title: {
    default:
      'Adorn Soft Technologies | Web Development, IT Support & Digital Solutions in Fort Portal, Uganda',
    template: '%s | Adorn Soft Technologies',
  },
  description:
    'Adorn Soft Technologies is a premier digital solutions provider in Fort Portal, Uganda. We deliver custom website development, software systems, CCTV camera installation, networking infrastructure, and AI solutions.',
  applicationName: 'Adorn Soft Technologies',
  authors: [
    { name: 'Adorn Soft Technologies', url: 'https://adornsoft.tech' },
    { name: 'Mugera Swabri' },
  ],
  generator: 'Next.js',
  keywords: [
    'Adorn Soft Technologies',
    'Adorn Soft',
    'Web Development Fort Portal',
    'Software Development Uganda',
    'IT Support Fort Portal',
    'CCTV Installation Fort Portal Uganda',
    'Computer Networking Fort Portal',
    'Mugera Swabri',
    'Digital Solutions Uganda',
    'Website Designers in Fort Portal',
    'Tech Company Fort Portal',
    'AI Solutions Uganda',
    'Systems Development Uganda',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Adorn Soft Technologies',
  publisher: 'Adorn Soft Technologies',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/adornsoft-logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    alternateLocale: ['en_US'],
    url: 'https://adornsoft.tech',
    siteName: 'Adorn Soft Technologies',
    title:
      'Adorn Soft Technologies | Web Development, IT Support & Digital Solutions',
    description:
      'Premier digital solutions provider in Fort Portal, Uganda. Custom website development, software engineering, CCTV installation, and networking infrastructure.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adorn Soft Technologies - Web Development & IT Solutions in Fort Portal, Uganda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adorn Soft Technologies | Web Development & Digital Solutions',
    description:
      'Custom website development, software systems, CCTV, and network infrastructure in Fort Portal, Uganda.',
    images: ['/og-image.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  other: {
    'geo.region': 'UG-W',
    'geo.placename': 'Fort Portal',
    'geo.position': '0.6545;30.2744',
    ICBM: '0.6545, 30.2744',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
