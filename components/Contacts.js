import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contacts = () => {
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
        {
            icon: <FaInstagram />,
            text: 'Instagram',
            url: 'https://www.instagram.com/naefaaa__/',
        },
        {
            icon: <SiGmail />,
            text: 'Email',
            url: 'mailto:rizqi.arta13@gmail.com',
        },
    ];
    const ContactList = ({icon, text, url}) => {
        return (
            <Link href={url} passHref rel='noopener noreferrer' target='_blank'>
                <div className='flex flex-col items-center'>
                    <div className='rounded-full bg-white shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease duration-200'>
                        <div className='text-artiysx-smoke text-3xl'>
                            {icon}
                        </div>
                    </div>
                    {/* <div className='text-white'>{text}</div> */}
                </div>
            </Link>
        );
    };

    return (
        <div id='contact' className='w-full h-full text-center bg-artiysx-smoke'>
            <div className='p-10'>
                <div className='flex items-center justify-center gap-4 md:gap-8 my-auto pb-8'>
                    {contactData?.map((it, idx)=>{
                        return <ContactList key={idx} icon={it.icon} url={it.url} />
                    })}
                </div>
                <div className='flex items-center justify-center text-white'>
                    Arta &copy; 2023
                </div>
            </div>
        </div>
    )
}

export default Contacts;