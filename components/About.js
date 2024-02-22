import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
// import arta from '/public/assets/arta-bgblur.png'

const About = () => {
  return (
    <div id='about' className='w-full md:min-h-screen p-8 flex items-center py-24 bg-artiysx-bg'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 flex flex-col-reverse gap-8'>
        <div className='col-span-2 '>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <p className='tracking-widest text-xl font-medium '>
                  <span className='bg-artiysx-blu/20 text-artiysx-blu'>
                      ABOUT
                  </span>
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <h2 className='py-4'>Who I Am</h2>
          </ScrollAnimation>
            <div className='mb-4'>
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className='relative'>
                  <div className='pl-4 break-pointer border-l-artiysx-blu/50 border-l-2'>
                    <p className='py-2 text-white'>
                      Hi, {"I'm"} <span className='text-lg font-semibold'>Rizqi Arta Fatullah</span>. A passionate Front-end Developer based in Jakarta, Indonesia📍.<br/>
                      I am a person who can communicate well, likes to socialize and can work under pressure. I am very interested in continuing to develop my skills and grow professionally. I am confident in my ability to produce something worthwhile.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className='relative'>
                <div className='pl-4 break-pointer border-l-artiysx-blu/50 border-l-2'>
                  <p className='py-2 text-white'>
                  {`I specialize in building web responsive front-end UI applications
                      that connect with API’s and other backend technologies. I’m
                      passionate about learning new technologies and understand there is
                      more than one way to accomplish a task. Though I am most proficient
                      in building front-end applications using HTML, CSS, Javascript, and
                      React, I am a quick learner and can pick up new tech stacks as
                      needed. I believe that being a great developer is not using one
                      specific language, but choosing the best tool for the job.`}
                  </p>
                </div>
                </div>
              </ScrollAnimation>
            </div>
              {/* <div className='my-4'>
                <h2 className='py-3'>Education</h2>
                <div className='relative'>
                  <div className='pl-4 pb-4 break-pointer border-l-artiysx-blu/50 border-l-2'>
                    <p className='py-2 text-white'>
                      {`I specialize in building web responsive front-end UI applications
                      that connect with API’s and other backend technologies. I’m
                      passionate about learning new technologies and understand there is
                      more than one way to accomplish a task. Though I am most proficient
                      in building front-end applications using HTML, CSS, Javascript, and
                      React, I am a quick learner and can pick up new tech stacks as
                      needed. I believe that being a great developer is not using one
                      specific language, but choosing the best tool for the job.`}
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className='my-4'>
                <h2 className='py-3'>Education</h2>
                <div className='relative'>
                  <div className='pl-4 pb-4 break-pointer border-l-artiysx-blu/50 border-l-2'>
                    <h3>SMKN 1 KOTA BEKASI</h3>
                    <div className='my-1 p-3 text-sm py-1 bg-artiysx-blu/30 w-fit'>2019 - 2022</div>
                    <div className='w-fit italic'>Software Engineering</div>
                    <div className='w-fit'>Learning basic programing like HTML, CSS, PHP and later create project with ReactJS</div>
                  </div>
                </div>
              </div>
              <div className='my-4'>
                <h2 className='py-3'>Personal Experience</h2>
                <div className='relative'>
                  <div className='pl-4 pb-4 break-pointer border-l-artiysx-blu/50 border-l-2'>
                    <h3>JUNIOR WEB DEVELOPER</h3>
                    <div className='my-1 p-3 text-sm py-1 bg-artiysx-blu/30 w-fit'>2022 - now</div>
                    <div className='w-fit italic'>PT. Adyatma Cendikira Sinergi Abadi, Bekasi City</div>
                    <div className='w-fit'>Learning basic programing like HTML, CSS, PHP and later create project with ReactJS</div>
                  </div>
                </div>
                <div className='relative'>
                  <div className='pl-4 pb-4 break-pointer border-l-artiysx-blu/50 border-l-2'>
                    <h3>INTERNSHIP</h3>
                    <div className='my-1 p-3 text-sm py-1 bg-artiysx-blu/30 w-fit'>Jun 2021 - Nov 2021</div>
                    <div className='w-fit italic'>PT. Akebono Brake Astra Indonesia, Jakarta</div>
                    <div className='w-fit'>Learning basic programing like HTML, CSS, PHP and later create project with ReactJS</div>
                  </div>
                </div>
              </div> */}
            <ScrollAnimation animateIn="fadeIn" animateOnce delay={500}>
              <div className='flex items-center flex-wrap'>
                <Link href='https://drive.google.com/file/d/1hpYJLjBm2TT84Q-92DF8pkJO0pPP2TJG/view?usp=sharing' className='w-fit' legacyBehavior >
                  <a target="_blank" rel="noopener noreferrer" className='w-fit text-artiysx-blu hover:text-artiysx-blu/80 underline cursor-pointer'>
                      Check out of my CV
                  </a>
                </Link>
                <span className='mx-1'>or</span>
                <Link href='/#projects' legacyBehavior>
                  <a className='w-fit text-artiysx-blu hover:text-artiysx-blu/80 underline cursor-pointer whitespace-normal'>
                      check out some of my latest projects.
                  </a>
                </Link>
              </div>
            </ScrollAnimation>
        </div>
        {/* <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 bg-artiysx-blu/90'> */}
        {/* <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5'>
          <Image src={arta} className='rounded-xl' alt='/' width={400} height={400} />
        </div> */}
        <ScrollAnimation animateIn='fadeIn' animateOnce>
          <div className='flex items-center justify-center md:justify-end w-full min-h-full max-h-screen'>
            <div className={`w-full hero-image lg:w-[300px] xl:w-[400px] lg:h-[300px] xl:h-[400px] transition-all duration-200`} ></div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  )
}

export default About;