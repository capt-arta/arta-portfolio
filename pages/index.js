import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contacts from '@/components/Contacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col scroll-smooth ${inter.className}`}
    >
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}
