import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <div className='z-[999]'>
        <Navbar />
      </div>
      <Main />
      <Skills />
    </div>
  )
}
