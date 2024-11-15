import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import Contacts from '@/components/Contacts'
import Spotlight from '@/components/Spotlight'
import { useState } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   setMousePosition({ x: e.pageX, y: e.pageY });
  // };

  return (
    <>
      <Head>
        <title>{"Arta's Portfolio"}</title>
      </Head>
      <div
        className={`flex relative min-h-screen flex-col scroll-smooth overflow-hidden ${inter.className}`}
        // onMouseMove={handleMouseMove}
      >
        <Navbar />
        {/* <Spotlight x={mousePosition.x} y={mousePosition.y} /> */}
        <div className='fixed w-full h-full'>
          <Main />
        </div>
        <div className='bg-artiysx-bg-light z-30 relative mt-[100vh] outline outline-artiysx-blu' >
          <About />
          <Skills />
          <Projects />
          <Contacts />
          <Footer  />
        </div>
      </div>
    </>
  )
}
