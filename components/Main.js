import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Main = () => {
    const contactData = [
        {
            icon: <FaLinkedinIn className='text-artiysx-smoke' />,
            text: 'linkedin',
        },
        {
            icon: <FaGithub className='text-artiysx-smoke' />,
            text: 'github',
        },
        {
            icon: <FaInstagram className='text-artiysx-smoke' />,
            text: 'instagram',
        },
        {
            icon: <SiGmail className='text-artiysx-smoke' />,
            text: 'email',
        },
    ];
    const ContactList = (props) => {
        const {icon, text} = props
        return (<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            {icon}
        </div>)
    };

    return (
        <div id='profile_section' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-8 flex justify-center items-center'>
                <div>
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
                    <div className='flex items-center justify-center gap-8 my-auto py-8'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn className='text-artiysx-smoke text-3xl' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub className='text-artiysx-smoke text-3xl' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaInstagram className='text-artiysx-smoke text-3xl' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <SiGmail className='text-artiysx-smoke text-3xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;