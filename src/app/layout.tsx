import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Search for pokemons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen align-middle justify-center bg-gradient-to-b from-teal-700 to-teal-800'>
          {children}
        </main>
      </body>
    </html>
  );
}
