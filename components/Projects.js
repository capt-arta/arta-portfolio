import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
    const ProjectItem = ({title, img, tech, full_tech, desc, slug}) => {
        return (
            // <ScrollAnimation animateIn='slideInUp' animateOnce>
            //     <div className='relative bg-gray-800 flex items-center justify-center overflow-hidden h-full w-full shadow-xl  shadow-gray-400 hover:scale-105 rounded-xl transition-all group hover:bg-gradient-to-b from-[#147efb25] to-[#147efb] '>
            //         <Link href={slug}>
            //             <Image className=' opacity-40 blur-[2px] group-hover:opacity-10 group-hover:blur-sm h-[400px] object-cover' width={700} height={400} objectFit='cover' layout='fixed' src={img} alt={`/${title}`} /> 
            //             <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            //                 <h3 className='md:text-2xl text-white tracking-wider text-center'>{title}</h3>
            //                 <p className='pt-2 text-white text-center'>{tech}</p>
            //             </div>
            //         </Link>
            //     </div>
            // </ScrollAnimation>
            // <ScrollAnimation animateIn='slideInUp' animateOnce>
                <div className='relative bg-gray-800 flex items-center justify-center overflow-hidden h-full w-full shadow-xl shadow-[#00000060] rounded-xl transition-all group'>
                    <div>
                    {/* <Link href={slug}> */}
                        <Image className=' opacity-40 blur-[2px] group-hover:opacity-10 group-hover:blur-sm h-[400px] object-cover' width={700} height={400} objectFit='cover' layout='fixed' src={img} alt={`/${title}`} /> 
                        <div className='absolute text-white transition-all duration-500 group-hover:-top-1/2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='md:text-2xl tracking-wider text-center'>{title}</h3>
                            <p className='pt-2 text-center'>{tech}</p>
                        </div>
                    {/* </Link> */}
                    </div>
                    <div className='absolute text-white flex flex-col justify-between transition-all duration-500 p-4 md:p-8 lg:10 xl:p-12 rounded-xl top-full group-hover:top-0 left-0 w-full h-[400px] bg-transparent'>
                        <div className='h-full'>
                            <p className='md:text-xl mb-4 font-bold text-lg'>{title}</p>
                            <p className='text-justify text-sm md:text-base'>{desc}</p>
                        </div>
                        <div className='flex gap-2 overflow-auto'>
                            {full_tech?.map((it, idx)=>{
                                return <div key={idx} className='p-2 py-1 w-fit whitespace-nowrap rounded-md bg-white text-black text-sm font-semibold'>{it}</div>
                            })}
                        </div>
                    </div>  
                </div>
            // </ScrollAnimation>
        )
    };

    const projectsData = [
        {
            title: 'Komet',
            img: '/assets/projects/cpp-komet.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/cpp-komet',
        },
        {
            title: 'Smart Dashboard Infra Telkomsel',
            img: '/assets/projects/smartdash-infra.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Laravel', 'MySql Server'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/smart-dash-infra',
        },
        {
            title: 'Babek TNI AD',
            img: '/assets/projects/babek.png',
            tech: 'Laravel (Backend)',
            full_tech: ['Laravel (Backend)', 'Vue JS', 'PostgreSql'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/babek',
        },
        {
            title: 'ITSD Telkomsel Dashboard VoC',
            img: '/assets/projects/itsd.png',
            tech: 'Laravel',
            full_tech: ['Laravel'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/itsd-telkomsel-dashboard-voc',
        },
        {
            title: 'BRI WorkBench',
            img: '/assets/projects/wbench.jpeg',
            tech: 'CodeIgniter',
            full_tech: ['CodeIgniter', 'SQL Server'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/bri-workbench',
        },
        {
            title: 'CariParkir CMS (Admin and Portal)',
            img: '/assets/projects/cariparkir.png',
            tech: 'Vue JS and React JS',
            full_tech: ['Vue JS', 'React JS', 'Java', 'Nest JS'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/cariparkir-cms',
        },
        {
            title: 'Ajari Edutech',
            img: '/assets/projects/ajari.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
            slug: '/ajari-edutech',
        },
        {
            title: 'Dashboard SIPD Kemendagri',
            img: '/assets/projects/sipd.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet lectus ut tristique ultricies. Duis pulvinar enim id gravida lacinia. Phasellus blandit lacus nunc, sit amet semper lacus viverra ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. (ini deskripsi)',
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
                        return <ProjectItem key={idx} title={it.title} img={it.img} tech={it.tech} slug={it.slug} full_tech={it.full_tech} desc={it.desc}  />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects