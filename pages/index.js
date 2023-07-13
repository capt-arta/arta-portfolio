import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Navbar/>
      <Main />
    </div>
  )
}
