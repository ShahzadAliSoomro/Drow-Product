
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import dynamic from 'next/dynamic'

const Progress = dynamic(() => import('./components/progress/Progress'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar activeRoute="/" />
        {children}
         <Footer />
        <Progress />
        </body>
    </html>
  )
}
