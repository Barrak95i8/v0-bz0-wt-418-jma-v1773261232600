import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://taxease.ca'),
  title: 'TaxEase Canada - Effortless Tax Filing for Canadians',
  description: 'File your Canadian taxes in minutes with TaxEase. Expert support for T4/T4A, FHSA, and more. CRA EFILE certified. Get your maximum refund.',
  generator: 'v0.app',
  keywords: ['Tax filing', 'Canada taxes', 'T4', 'T4A', 'FHSA', 'CRA EFILE', 'Tax refund', 'TaxEase'],
  authors: [{ name: 'TaxEase Team' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'TaxEase Canada - Effortless Tax Filing',
    description: 'File your Canadian taxes in minutes. Expert support, maximum refunds.',
    url: 'https://taxease.ca',
    siteName: 'TaxEase',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaxEase Canada - Effortless Tax Filing',
    description: 'File your Canadian taxes in minutes. Expert support, maximum refunds.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0B3D7A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
