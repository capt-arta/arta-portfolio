import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
    const ProjectItem = ({title, img, tech, slug}) => {
        return (
            <ScrollAnimation animateIn='slideInUp' animateOnce>
                {/* // <div className='relative bg-gray-800 flex items-center justify-center overflow-hidden h-auto w-full shadow-xl  shadow-gray-400 hover:scale-105 rounded-xl group hover:bg-gradient-to-b from-[#72452e75] to-[#cb8664] '> */}
                <div className='relative bg-gray-800 flex items-center justify-center overflow-hidden h-auto w-full shadow-xl  shadow-gray-400 hover:scale-105 rounded-xl transition-all group hover:bg-gradient-to-b from-[#147efb25] to-[#147efb] '>
                    <Link href={slug}>
                        <Image className=' opacity-40 blur-[2px] group-hover:opacity-10 group-hover:blur-sm ' width={700} height={400} objectFit='contain' layout='fixed' src={img} alt={`/${title}`} /> 
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='md:text-2xl text-white tracking-wider text-center'>{title}</h3>
                            <p className='pt-2 text-white text-center'>{tech}</p>
                            {/* <p className='pb-4 pt-2 text-white text-center'>{tech}</p> */}
                            {/* <Link href={slug} className='flex justify-center'>
                                <p className='hidden group-hover:block text-center py-3 md:w-52 w-36 rounded-lg bg-white text-gray-700 font-bold md:text-lg cursor-pointer'>More Info</p>
                            </Link> */}
                        </div>
                    </Link>
                </div>
            </ScrollAnimation>
        )
    };

    const projectsData = [
        {
            title: 'Smart Dashboard Infra Telkomsel',
            img: '/assets/projects/smartdash-infra.png',
            tech: 'Next JS',
            slug: '/smart-dash-infra',
        },
        {
            title: 'Babek TNI AD',
            img: '/assets/projects/babek.png',
            tech: 'Laravel (Backend)',
            slug: '/babek',
        },
        {
            title: 'ITSD Telkomsel Dashboard VoC',
            img: '/assets/projects/itsd.png',
            tech: 'Laravel',
            slug: '/itsd-telkomsel-dashboard-voc',
        },
        {
            title: 'BRI WorkBench',
            img: '/assets/projects/wbench.jpeg',
            tech: 'CodeIgniter',
            slug: '/bri-workbench',
        },
        {
            title: 'CariParkir CMS (Admin and Portal)',
            img: '/assets/projects/cariparkir.png',
            tech: 'Vue JS and React JS',
            slug: '/cariparkir-cms',
        },
        {
            title: 'Ajari Edutech',
            img: '/assets/projects/ajari.png',
            tech: 'Next JS',
            slug: '/ajari-edutech',
        },
        {
            title: 'Dashboard SIPD Kemendagri',
            img: '/assets/projects/sipd.png',
            tech: 'Next JS',
            slug: '/sipd-dashboard',
        },
    ];

    return (
        <div id='projects' className='w-full bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto px-8 py-12 mt-16'>
                <ScrollAnimation animateIn="slideInUp" animateOnce>
                    <p className='tracking-widest text-xl font-medium '>
                        <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
                            PROJECTS
                        </span>
                    </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInUp" animateOnce>
                    <h2 className='py-4'>What I&apos;ve Built</h2>
                </ScrollAnimation>
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