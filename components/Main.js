import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

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
    const ContactList = ({icon, text, url}) => {

        return (
            <Link href={url} passHref rel='noopener noreferrer' target='_blank'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease duration-200'>
                    <div className='text-artiysx-smoke text-3xl'>
                        {icon}
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-8 flex justify-center items-center'>
                {/* <div className='pt-16 border-b-4 border-b-artiysx-coksu/50'> */}
                <div className='pt-16'>
                    <p className='uppercase text-sm tracking-widest text-artiysx-smoke'>
                        <span className=' bg-artiysx-smoke/20'>
                            {"let's build something together"}
                        </span>
                    </p>
                    <h1 className='mt-4 '>{"Hi! I'm "}<span className='px-2 text-artiysx-coksu bg-artiysx-coksu/20'>Arta</span>.</h1>
                    <h1 className='mt-2 '>A Front-End Developer.</h1>
                    <p className='mt-4 text-artiysx-smoke'>
                        {"I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies."}
                    </p>
                    <div className='flex items-center justify-center gap-4 md:gap-8 my-auto py-8'>
                        {contactData?.map((it, idx)=>{
                            return <ContactList key={idx} icon={it.icon} url={it.url} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;