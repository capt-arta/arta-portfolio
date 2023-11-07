import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    const ProjectItem = ({title, img, tech, slug}) => {
        return (
            <div className='relative bg-gray-500 flex items-center justify-center overflow-hidden h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#72452e] to-[#cb8664] '>
                <Image className=' group-hover:opacity-10 group-hover:blur-sm aspect-auto' width={700} height={400} objectFit='contain' src={img} alt='/' /> 
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                    <Link href={slug} className='flex justify-center'>
                        <p className='text-center py-3 w-52 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
        )
    };

    const projectsData = [
        {
            title: 'Smart Dashboard Infra Telkomsel',
            img: '/assets/projects/smartdash-infra.png',
            tech: 'Next JS',
            slug: 'smart-dash-infra',
        },
        {
            title: 'Babek TNI AD',
            img: '/assets/projects/babek.png',
            tech: 'Laravel (Backend)',
            slug: 'babek',
        },
        {
            title: 'ITSD Telkomsel Dashboard VoC',
            img: '/assets/projects/itsd.png',
            tech: 'Laravel',
            slug: 'itsd-telkomsel-dashboard-voc',
        },
        {
            title: 'BRI WorkBench',
            img: '/assets/projects/itsd.png',
            tech: 'CodeIgniter',
            slug: 'bri-workbench',
        },
        {
            title: 'CariParkir CMS (Admin and Portal)',
            img: '/assets/projects/cariparkir.png',
            tech: 'Vue JS and React JS',
            slug: 'cariparkir-cms',
        },
        {
            title: 'Ajari Edutech',
            img: '/assets/projects/ajari.png',
            tech: 'Next JS',
            slug: 'ajari-edutech',
        },
        {
            title: 'Dashboard SIPD Kemendagri',
            img: '/assets/projects/sipd.png',
            tech: 'Next JS',
            slug: 'sipd-dashboard',
        },
    ];

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-8 py-12 mt-16'>
                <p className='tracking-widest text-xl font-medium '>
                    <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
                        PROJECTS
                    </span>
                </p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                {projectsData?.map((it, idx)=>{
                    return <ProjectItem key={idx} title={it.title} img={it.img} tech={it.tech} slug={it.slug}  />
                })}
                </div>
            </div>
        </div>
    );
}

export default Projects