import React from 'react';
import { TbMapSearch } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";
import Link from 'next/link';

const Contacts = () => {

    const contactData = [
        {
            title : 'Location',
            desc: 'Jakarta, Indonesia',
            url: 'https://maps.app.goo.gl/vAFu8fPKcJELfkxR6',
            icon: <TbMapSearch />
        },
        {
            title : 'Mail',
            desc: 'rizqi.arta13@gmail.com',
            url: 'mailto:rizqi.arta13@gmail.com',
            icon: <MdMailOutline />
        },
        {
            title : 'Instagram',
            desc: '@naefaaa__',
            url: 'https://www.instagram.com/naefaaa__/',
            icon: <FaInstagram />
        },
    ]

    const ContactList = ({title, desc, url, icon}) => {
        return (<>
            <Link href={url} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className='group'>
                    <div className='flex flex-col md:flex-row items-center justify-center mx-auto gap-2 md:gap-4 md:justify-normal rounded-2xl hover:drop-shadow-2xl hover:-translate-y-2 p-4 w-[300px] transition-all' style={{boxShadow: '0 0 10px rgba(0,0,0,.1)'}}>
                        <div className='p-2 flex items-center text-4xl text-artiysx-coksu justify-center rounded-full w-16 h-16' style={{boxShadow: '0 0 10px rgba(0,0,0,.1)'}}>
                            {icon}
                        </div>
                        <div className='md:h-[90%] flex flex-col justify-between'>
                            <h3 className='text-center md:text-left'>{title}</h3>
                            <p className='group-hover:text-artiysx-coksu'>{desc}</p>
                        </div>
                    </div>
                </a>
            </Link>
        </>)
    }

    return (
        <div id='contact' className='w-full pb-12'>
                <div className='max-w-[1240px] mx-auto px-8 py-12 mt-16'>
                    <p className='tracking-widest text-xl font-medium '>
                        <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
                            CONTACT
                        </span>
                    </p>
                    <h2 className='py-4'>Get in Touch with Me</h2>
                    <div className='pt-6 flex flex-col md:flex-row gap-10 justify-center md:justify-normal md:gap-4 flex-wrap'>
                        {contactData.map((it, idx) => <ContactList key={idx} title={it.title} desc={it.desc} url={it.url} icon={it.icon} />)}
                    </div>
                </div>
            </div>
    )
}

export default Contacts;