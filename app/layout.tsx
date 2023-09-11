import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { LikedProductsProvider } from './context/LikedProductsContext';
import { ClerkProvider } from '@clerk/nextjs'

const Progress = dynamic(() => import('./components/progress/Progress'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

const inter = Inter({ subsets: ['latin'] })
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
    <html className={inter.className}>
    <Head>
        <title>Create Next App</title>
         <meta name="description" content="Generated by create next app" />
         {/* You can add other meta tags, links, etc. here */}
       </Head>
      <body className={inter.className}>
      <LikedProductsProvider> {/* Wrap the app with the context provider */}
         <Navbar activeRoute="/" />
        {children}
         <Footer />
        <Progress />
        </LikedProductsProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}