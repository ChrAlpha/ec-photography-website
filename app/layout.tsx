import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import { MoadlProvider } from '@/components/providers/ModalProvider'
import { Toaster } from "@/components/ui/toaster"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        
        <body className={ibmPlexMono.className}>
            <MoadlProvider />
            <Toaster />
            {children}
        </body>
        
      </html>
    </ClerkProvider>
  )
}
