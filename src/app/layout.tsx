import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProvidersNextUI } from './ProviderNextUI'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro J Gomez | Frontend Developer',
  description: 'I\'m a passionate Frontend Developer with strong skills in crafting engaging web experiences.Specialized in building modern and responsive user interfaces, I leverage technologies like HTML, CSS, and JavaScript to bring elegant designs to life.My goal is to merge creativity with functionality, creating visually appealing and highly usable websites.Explore my portfolio to discover my innovative approach to web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersNextUI>
          {children}
        </ProvidersNextUI>
      </body>
    </html>
  )
}
