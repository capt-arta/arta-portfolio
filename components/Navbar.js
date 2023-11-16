import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(()=>{
        const handleShadow = () => {
            if (window.scrollY >= 60) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, []);

    const dataMenu = [
        {
            id: "/#home",
            text: "Home",
        },
        {
            id: "/#about",
            text: "About",
        },
        {
            id: "/#skills",
            text: "Skills",
        },
        {
            id: "/#projects",
            text: "Projects",
        },
        {
            id: "/#contact",
            text: "Contact",
        },
    ]

    const ListMenu = ({href, text}) => {
        return (
            <Link href={href} className="" onClick={()=>setNav(false)}>
                <li className="px-3">
                    <span className='uppercase text-md link link-underline link-underline-black transition-all py-2'>
                        {text}
                    </span>
                </li>
            </Link>
        )
    }

    const handleNav = () => {
        setNav(!nav)
    };

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
    <div className={`${shadow ? 'shadow-xl bg-white' : ''} duration-300 fixed top-0 z-[9999] w-full flex items-center justify-center px-8 py-5 lg:px-24`}>
        {/* <div className="h-full flex items-center">
            <span className='text-2xl font-extrabold h-full text-artiysx-coksu bg-artiysx-coksu/20 items-end'>{"Arta"}</span>
        </div> */}
        <div className='flex items-center'>
            <div className="hidden md:flex items-center">
            <ul className="flex gap-6 items-center list-none">
                {dataMenu.map((it, idx)=>{
                    return <ListMenu key={idx} href={it.id} text={it.text} />
                })}
            </ul>
            </div>
            <div onClick={handleNav} className='md:hidden cursor-pointer p-2'>
                <MenuOutlined className="text-xl font-black" />
            </div>
            {/* mobile nav */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/30' : ''}>
                <div className={nav ? 'flex flex-col justify-between fixed left-0 top-0 w-[100%] sm:w-[60%] h-screen bg-white ease-in duration-300 shadow-xl': 'flex flex-col justify-between fixed top-0 left-[-100%] w-[90%] sm:w-[50%] h-screen bg-white ease-in duration-300 shadow-xl'}>
                    <div>
                        <div className='flex w-full items-center justify-between pl-10 pr-8 py-7 bg-white'>
                            {/* <Image src={'./assets/logo-whitesmoke.svg'} alt='/' height={40} width={40} /> */}
                            {/* <span className='text-2xl font-extrabold text-artiysx-smoke -ml-2 h-full items-end'>rtiysx</span> */}
                            <span className='text-2xl font-extrabold h-full text-artiysx-coksu bg-artiysx-coksu/20 items-end'>{"Arta"}</span>
                            <div onClick={handleNav} className='cursor-pointer p-2'>
                                <CloseOutlined className="text-xl font-black" />
                            </div>
                        </div>
                        <div className="flex  px-10 py-4">
                            <ul className="flex flex-col gap-6 list-none">
                                {dataMenu.map((it, idx)=>{
                                    return <ListMenu key={idx} href={it.id} text={it.text} />
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='p-10 border-t-2 border-t-artiysx-coksu/50'>
                        <div className='flex items-center justify-center gap-4 md:gap-8 my-auto pb-8'>
                            {contactData?.map((it, idx)=>{
                                return <ContactList key={idx} icon={it.icon} url={it.url} />
                            })}
                        </div>
                        <div className='flex items-center justify-center'>
                            &copy; 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;