import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
// import arta from '/public/assets/arta-bgblur.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-8 flex items-center py-16 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 flex flex-col-reverse gap-8'>
        <div className='col-span-2'>
          <ScrollAnimation animateIn="slideInUp" animateOnce>
            <p className='tracking-widest text-xl font-medium '>
                  <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
                      ABOUT
                  </span>
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInUp" animateOnce>
            <h2 className='py-4'>Who I Am</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInUp" animateOnce>
            <p className='py-2 text-gray-600'>
              Hi, {"I'm"} <span className='text-lg font-semibold'>Rizqi Arta Fatullah</span>. A passionate Front-end Developer based in Jakarta, Indonesia. 📍
              {/* I am a person who can communicate well, likes to socialize and can work under pressure. I am very interested in continuing to develop my skills and grow professionally. I am confident in my ability to produce something worthwhile. */}
            </p>
            <p className='py-2 text-gray-600'>
              I specialize in building mobile responsive front-end UI applications
              that connect with API’s and other backend technologies. I’m
              passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using HTML, CSS, Javascript, and
              React, I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job.
            </p>
            <Link href='https://drive.google.com/file/d/1hpYJLjBm2TT84Q-92DF8pkJO0pPP2TJG/view?usp=sharing' className='' legacyBehavior >
              <a target="_blank" rel="noopener noreferrer" >
                <p className='py-2 text-gray-600 hover:text-artiysx-coksu underline cursor-pointer'>
                  Check out of my CV.
                </p>
              </a>
            </Link>
            <Link href='/#projects' className=''>
              <p className='py-2 text-gray-600 hover:text-artiysx-coksu underline cursor-pointer'>
                Check out some of my latest projects.
              </p>
            </Link>
          </ScrollAnimation>
        </div>
        {/* <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 bg-artiysx-coksu/90'> */}
        {/* <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5'>
          <Image src={arta} className='rounded-xl' alt='/' width={400} height={400} />
        </div> */}
        <ScrollAnimation animateIn='fadeIn' animateOnce>
          <div className='flex items-center justify-center md:justify-end w-full h-full'>
            <div className={`w-full hero-image lg:w-[300px] xl:w-[400px] lg:h-[300px] xl:h-[400px]`} ></div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  )
}

export default About;