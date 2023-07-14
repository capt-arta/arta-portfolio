import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arta from '/public/assets/arta-bgblur.png'

const About = () => {
  return (
    // <div className='w-full md:h-screen px-8 py-14 flex items-center'>
    //     <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
    //         <div className='col-span-2'>
    //             <p className='tracking-widest text-xl font-medium '>
    //                 <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
    //                     ABOUT
    //                 </span>
    //             </p>
    //             <h2 className='py-3'>
    //                 Who I Am
    //             </h2>
    //         </div>
    //         <div></div>
    //     </div>
    // </div>
    <div id='about' className='w-full md:h-screen p-8 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='tracking-widest text-xl font-medium '>
                <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
                    ABOUT
                </span>
          </p>
          <h2 className='py-4'>Who I Am</h2>
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
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempore atque optio molestias veniam cum ducimus id eaque provident nihil? Reprehenderit temporibus suscipit quos at in voluptas delectus nesciunt nisi. Error aspernatur laboriosam neque unde nulla eaque reiciendis laborum, laudantium, recusandae voluptatibus consectetur repudiandae, cum vel quo corrupti. Sed, ducimus facilis. Molestias, maiores?
          </p>
          <Link href='/#projects' className=''>
            <p className='py-2 text-gray-600 hover:text-artiysx-coksu underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        {/* <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 bg-artiysx-coksu/90'> */}
        <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5'>
          <Image src={arta} className='rounded-xl' alt='/' width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default About;