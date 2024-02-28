import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    const contactData = [
        {
            icon: <FaLinkedinIn />,
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/rizqi-arta-fatullah/',
        },
        {
            icon: <FaGithub />,
            text: 'Github',
            url: 'https://github.com/capt-arta',
        },
        // {
        //     icon: <FaInstagram />,
        //     text: 'Instagram',
        //     url: 'https://www.instagram.com/naefaaa__/',
        // },
        // {
        //     icon: <SiGmail />,
        //     text: 'Email',
        //     url: 'mailto:rizqi.arta13@gmail.com',
        // },
    ];
    const ContactList = ({icon, text, url}) => {
        return (
            <Link href={url} passHref rel='noopener noreferrer' target='_blank'>
                <div className='flex flex-col items-center'>
                    {/* <div className='rounded-full bg-white shadow-lg p-4 cursor-pointer hover:scale-110 ease duration-200'> */}
                        {/* <div className='text-white text-3xl '> */}
                        <div className='text-white text-2xl cursor-pointer hover:scale-110 hover:text-artiysx-blu duration-75'>
                            {icon}
                        </div>
                    {/* </div> */}
                </div>
            </Link>
        );
    };

    return (
        <div id='contact' className='w-full h-full text-center bg-artiysx-bg z-50'>
            <div className='p-14 max-w-[1240px] mx-auto px-8 flex flex-col md:flex-row md:justify-between items-center'>
                <h3 className='flex items-center justify-center text-white'>
                    Copyright © 2024. All rights are reserved
                </h3>
                <div className='flex items-center justify-center gap-4 md:gap-7 my-auto pt-4 md:pt-0'>
                    {contactData?.map((it, idx)=>{
                        return <ContactList key={idx} icon={it.icon} url={it.url} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer;