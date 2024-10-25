import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { FaJava, FaLaravel, FaVuejs } from 'react-icons/fa';
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiCodeigniter, SiMicrosoftsqlserver, SiNestjs } from 'react-icons/si';
import { RiReactjsFill } from "react-icons/ri";

const Projects = () => {
    const ProjectItem = ({ title, img, tech, full_tech, desc, slug }) => {
        return (
          <ScrollAnimation animateIn='fadeIn' animateOnce>
            <div className='relative bg-gray-800 flex items-center justify-center overflow-hidden h-full w-full shadow-xl shadow-[#00000060] rounded-xl transition-all group'>
              <div>
                {/* You can uncomment this once you're ready to use Next.js routing */}
                {/* <Link href={slug}> */}
                <Image
                  className='opacity-40 blur-[2px] group-hover:opacity-10 group-hover:blur-sm h-[400px] object-cover'
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover' }} // Replacing deprecated objectFit
                  src={img}
                  alt={title}
                />
                <div className='absolute text-white transition-all duration-500 group-hover:-top-1/2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h3 className='md:text-2xl tracking-wider text-center'>{title}</h3>
                  <p className='pt-2 text-center'>{tech}</p>
                </div>
                {/* </Link> */}
              </div>
              <div className='absolute text-white flex flex-col justify-between transition-all duration-500 p-4 md:p-8 lg:10 xl:p-12 rounded-xl top-full group-hover:top-0 left-0 w-full h-[400px] bg-transparent'>
                <div className='h-full'>
                  <p className='md:text-xl mb-4 font-bold text-lg'>{title}</p>
                  <p
                    className='text-justify text-sm md:text-base'
                    dangerouslySetInnerHTML={{ __html: desc }} // Correct way to use dangerouslySetInnerHTML
                  ></p>
                </div>
                <div className='flex gap-2 overflow-auto'>
                  {full_tech?.map((it, idx) => (
                    <div
                      key={idx}
                      className='p-2 py-3 w-fit whitespace-nowrap rounded-md bg-white flex items-center text-black text-sm font-semibold'
                    >
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        );
      };

    const projectsDataWithLogo = [
        {
            title: 'Komet',
            img: '/assets/projects/cpp-komet.png',
            tech: 'Next JS',
            full_tech: [<TbBrandNextjs key={1} fontSize={32} />, <SiNestjs key={2} fontSize={32} />, <BiLogoPostgresql key={3} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/cpp-komet',
        },
        {
            title: 'Smart Dashboard Infra Telkomsel',
            img: '/assets/projects/smartdash-infra.png',
            tech: 'Next JS',
            full_tech: [<TbBrandNextjs key={1} fontSize={32} />, <FaLaravel key={2} fontSize={32} />, <SiMicrosoftsqlserver key={3} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/smart-dash-infra',
        },
        {
            title: 'Babek TNI AD',
            img: '/assets/projects/babek.png',
            tech: 'Laravel (Backend)',
            full_tech: [<FaLaravel key={1} fontSize={32} />, <FaVuejs key={2} fontSize={32} />, <BiLogoPostgresql key={3} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/babek',
        },
        {
            title: 'ITSD Telkomsel Dashboard VoC',
            img: '/assets/projects/itsd.png',
            tech: 'Laravel',
            full_tech: [<FaLaravel key={1} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/itsd-telkomsel-dashboard-voc',
        },
        {
            title: 'BRI WorkBench',
            img: '/assets/projects/wbench.jpeg',
            tech: 'CodeIgniter',
            full_tech: [<SiCodeigniter key={1} fontSize={32 }/>, <SiMicrosoftsqlserver key={2} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/bri-workbench',
        },
        {
            title: 'CariParkir CMS (Admin and Portal)',
            img: '/assets/projects/cariparkir.png',
            tech: 'Vue JS and React JS',
            full_tech: [<FaVuejs key={1} fontSize={32} />, <RiReactjsFill key={2} fontSize={32} />, <FaJava key={3} fontSize={32} />, <SiNestjs key={4} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/cariparkir-cms',
        },
        {
            title: 'Ajari Edutech',
            img: '/assets/projects/ajari.png',
            tech: 'Next JS',
            full_tech: [<TbBrandNextjs key={1} fontSize={32} />, <SiNestjs key={2} fontSize={32} />, <BiLogoPostgresql key={3} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/ajari-edutech',
        },
        {
            title: 'Dashboard SIPD Kemendagri',
            img: '/assets/projects/sipd.png',
            tech: 'Next JS',
            full_tech: [<TbBrandNextjs key={1} fontSize={32} />, <SiNestjs key={2} fontSize={32} />, <BiLogoPostgresql key={3} fontSize={32} />],
            desc: 'No description yet.',
            slug: '/sipd-dashboard',
        },
    ];

    const projectsData = [
        {
            title: 'Customer Portal - PT Sucofindo',
            img: '/assets/projects/customer-portal-sucofindo.jpg',
            tech: 'Laravel (fullstack)',
            full_tech: ['Laravel (fullstack)', 'MySql'],
            desc: 'No description yet.',
            slug: '/sucofindo-customer-portal',
        },
        {
            title: 'Sriboga Ratu Raya Website and CMS',
            img: '/assets/projects/srr.png',
            tech: 'Laravel (fullstack)',
            full_tech: ['Laravel (fullstack)', 'PostgreSql'],
            desc: `I worked on this freelance project and completed it within a week, including testing and user acceptance testing (UAT). My contribution was adding a new module called "OUR CONTRIBUTION." You can view it at the following link: <a class="font-semibold underline" target="__blank" href="https://www.sriboga.com/our-contribution">https://www.sriboga.com/our-contribution</a>. This module allows the company's contributions to be visible to the public.`,
            slug: '/srr-website',
        },
        {
            title: 'Komet',
            img: '/assets/projects/cpp-komet.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'No description yet.',
            slug: '/cpp-komet',
        },
        {
            title: 'Bank Papua',
            img: '/assets/projects/bank-papua.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'No description yet.',
            slug: '/bank-papua',
        },
        {
            title: 'Smart Dashboard Infra Telkomsel',
            img: '/assets/projects/smartdash-infra.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Laravel', 'MySql Server'],
            desc: 'The Smart Dashboard is a webb-app that can track progress of projects in Telkomsel Infra. it has file archive as tracking project needs. this app has many multiform that corelated with tracking projects. also this app has kanban feature that the user or PM can see how much the progress of the project with file attachment as proof that the task is alreay done. Im working as fronted dev with 1 more partner as backend.',
            slug: '/smart-dash-infra',
        },
        {
            title: 'Babek TNI AD',
            img: '/assets/projects/babek.png',
            tech: 'Laravel (Backend)',
            full_tech: ['Laravel (Backend)', 'Vue JS', 'PostgreSql'],
            desc: 'This is a system for inventory or storage of goods in the Indonesian Army. The items data here include vehicles, weapons, rations and all necessities for the Indonesian Army. With this, it is hoped that data collection from BABEK TNI AD will become easier, simpler and faster. I work as a backend dev with 1 of my partners as a front-end dev. Unfortunately Im only here for 2 weeks because I was assigned to a new project.',
            slug: '/babek',
        },
        {
            title: 'ITSD Telkomsel Dashboard VoC',
            img: '/assets/projects/itsd.png',
            tech: 'Laravel',
            full_tech: ['Laravel'],
            desc: 'No description yet.',
            slug: '/itsd-telkomsel-dashboard-voc',
        },
        {
            title: 'BRI WorkBench',
            img: '/assets/projects/wbench.jpeg',
            tech: 'CodeIgniter',
            full_tech: ['CodeIgniter', 'SQL Server'],
            desc: 'No description yet.',
            slug: '/bri-workbench',
        },
        {
            title: 'CariParkir CMS (Admin and Portal)',
            img: '/assets/projects/cariparkir.png',
            tech: 'Vue JS and React JS',
            full_tech: ['Vue JS', 'React JS', 'Java', 'Nest JS'],
            desc: 'No description yet.',
            slug: '/cariparkir-cms',
        },
        {
            title: 'Ajari Edutech',
            img: '/assets/projects/ajari.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'No description yet.',
            slug: '/ajari-edutech',
        },
        {
            title: 'Dashboard SIPD Kemendagri',
            img: '/assets/projects/sipd.png',
            tech: 'Next JS',
            full_tech: ['Next JS', 'Nest JS', 'PostgreSql'],
            desc: 'The SIPD Dashboard is a website that is used to carry out analysis and also find out data for the APBD, where we can directly monitor how the APBD data has been fixed so that further analysis can be carried out. The general process on the SIPD Dashboard is to describe all APBD data both this year and the previous year.',
            slug: '/sipd-dashboard',
        },
    ];

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-8 py-12 mt-16'>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <p className='tracking-widest text-xl font-medium '>
                        <span className='bg-artiysx-blu/20 text-artiysx-blu'>
                            PROJECTS
                        </span>
                    </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
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