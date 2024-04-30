import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import ParticlesBackground from './Particles';
import ScrollAnimation from 'react-animate-on-scroll';

const Main = () => {
    const router = useRouter();
    const contactData = [
        {
            icon: <FaLinkedinIn />,
            text: 'linkedin',
            url: 'https://www.linkedin.com/in/rizqi-arta-fatullah/',
        },
        {
            icon: <FaGithub />,
            text: 'github',
            url: 'https://github.com/capt-arta',
        },
        {
            icon: <FaInstagram />,
            text: 'instagram',
            url: 'https://www.instagram.com/naefaaa__/',
        },
        {
            icon: <SiGmail />,
            text: 'email',
            url: 'mailto:rizqi.arta13@gmail.com',
        },
    ];

    const coder = [{
        icon: <FaLinkedinIn />,
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rizqi-arta-fatullah/',
    },
    {
        icon: <FaGithub />,
        text: 'Github',
        url: 'https://github.com/capt-arta',
    }]

    const ContactList = ({icon, text, url}) => {
        return (
            // <Link href={url} passHref rel='noopener noreferrer' target='_blank'>
            //     <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease duration-200'>
            //         <div className='text-artiysx-smoke text-3xl'>
            //             {icon}
            //         </div>
            //     </div>
            // </Link>
                <Link href={url} passHref rel='noopener noreferrer' target='_blank'>
                    <div className='flex flex-col items-center'>
                        <div className='text-artiysx-blu/80 text-4xl cursor-pointer hover:-translate-y-1 hover:text-artiysx-blu duration-75'>
                            {icon}
                        </div>
                    </div>
                </Link>
        );
    };

    return (
        <div id='home' className='w-full h-screen text-center relative bg-artiysx-bg'>
            <ParticlesBackground />
            <div className='max-w-[1240px] w-full h-full mx-auto p-8 flex justify-center items-center'>
                {/* <div className='pt-16 border-b-4 border-b-artiysx-blu/50'> */}
                <div className='m-auto pt-[68px] z-[999]'>
                    <ScrollAnimation animateIn='fadeIn' animateOnce>
                        <p className='uppercase text-sm tracking-widest text-artiysx-smoke'>
                            <span className=' bg-artiysx-smoke/20'>
                                {"let's build something together"}
                            </span>
                        </p>
                        <h1 className='mt-4 '>{"Hi! I'm "}<span className='px-2 text-artiysx-blu bg-artiysx-blu/20'>Arta</span>👋,</h1>
                        <h1 className='mt-2 '>a Front-End Developer.</h1>
                        <div className='w-full flex justify-center'>
                            <p className='mt-4 text-artiysx-smoke max-w-[720px]'>
                                {/* {"let's build something together"} */}
                                {"I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies."}
                            </p>
                        </div>
                        <div className='flex items-center justify-center gap-4 md:gap-8 my-auto py-8'>
                            {/* {contactData?.map((it, idx)=>{
                                return <ContactList key={idx} icon={it.icon} url={it.url} />
                            })} */}
                            {coder?.map((it, idx) => (<ContactList key={idx} icon={it.icon} url={it.url} />))}
                        </div>
                    </ScrollAnimation>
                </div>
                {/* <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none'>
                    <div className='absolute animate-morph w-56 h-56 lg:top-48 lg:-left-7 xl:top-50 xl:left-14 bg-artiysx-blu rounded-full blur-[86px]'></div>
                    <div className='absolute animate-morph w-32 h-16 bottom-40 right-[32%] lg:right-1/2 xl:bottom-40 xl:right-1/2 bg-artiysx-blu rounded-full blur-[42px]'></div>
                    <div className='absolute animate-morph w-36 h-24 xl:top-1/2 xl:right-40 bg-artiysx-blu rounded-full blur-2xl'></div>
                </div> */}
            </div>
        </div>
    )
}

Main.getLayout = function Layout(page) {
    return <ParticlesBackground>
        {page}
    </ParticlesBackground>;
};

export default Main;