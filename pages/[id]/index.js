import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Skeleton } from 'antd'

export default function Index() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const projectsData = [
      {
          id: 'smart-dash-infra',
          title: 'Smart Dashboard Infra Telkomsel',
          subTitle: 'Project Management',
          img: '/assets/projects/smartdash-infra.png',
          tech: ['Next JS', 'Laravel', 'MySql Server'],
          desc: '',
      },
      {
          id: 'babek',
          title: 'Babek TNI AD',
          subTitle: 'TNI AD Inventory',
          img: '/assets/projects/babek.png',
          tech: ['Laravel (Backend)', 'Vue JS', 'PostgreSql'],
          desc: '',
      },
      {
          id: 'itsd-telkomsel-dashboard-voc',
          title: 'ITSD Telkomsel Dashboard VoC',
          subTitle: 'Monitoring VoC',
          img: '/assets/projects/itsd.png',
          tech: ['Laravel'],
          desc: '',
      },
      {
          id: 'bri-workbench',
          title: 'BRI WorkBench',
          subTitle: 'RM Performance Monitor',
          img: '/assets/projects/wbench.jpeg',
          tech: ['CodeIgniter', 'SQL Server'],
          desc: '',
      },
      {
          id: 'cariparkir-cms',
          title: 'CariParkir CMS (Admin and Portal)',
          subTitle: 'Content Management System (CMS)',
          img: '/assets/projects/cariparkir.png',
          tech: ['Vue JS', 'React JS', 'Java', 'Nest JS'],
          desc: '',
      },
      {
          id: 'ajari-edutech',
          title: 'Ajari Edutech',
          subTitle: 'Edutech with Live Quiz on Online Video Conference',
          img: '/assets/projects/ajari.png',
          tech: ['Next JS', 'Nest JS', 'PostgreSql'],
          desc: '',
      },
      {
          id: 'sipd-dashboard',
          title: 'Dashboard SIPD Kemendagri',
          subTitle: 'APBD Monitoring',
          img: '/assets/projects/sipd.png',
          tech: ['Next JS', 'Nest JS', 'PostgreSql'],
          desc: '',
      },
  ];
  useEffect(()=>{
    projectsData.map((it, idx)=>{
      if (it.id === router.query.id) {
        setData(it)
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    })
  },[router.query.id])

  return (
    loading ? <div className='w-full'>
        <div className='w-screen h-[30vh] relative shadow-md'>
            <div className='absolute w-full h-[30vh] bg-black/90 z-10'/>
            {/* <Image className='absolute z-[1] blur-sm' src={data.img} objectFit='cover' layout='fill' alt='/' /> */}
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] text-white z-10 px-6 xl:p-0'>
                <h2 className='py-2 '>
                  {/* <Skeleton active title/> */}
                </h2>
                <h3 className='font-normal' >
                  {/* <Skeleton active title/> */}
                </h3>
                <div className='h-4 w-56 mt-4 rounded-full cursor-pointer group'>
                  <Link className='group-hover:text-artiysx-coksu' href={'../#projects'} passHref>
                    {/* <Skeleton active title/> */}
                  </Link>
                </div>
            </div>
        </div>
        <div className='max-w-[1240px] w-full mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <Skeleton active/>
          </div>
        </div>
    </div>
    : <div className='w-full'>
        <div className='w-screen h-[30vh] relative shadow-md'>
            <div className='absolute w-full h-[30vh] bg-black/60 z-10'/>
            <Image className='absolute z-[1] blur-sm' src={data.img} objectFit='cover' layout='fill' alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] text-white z-10 px-6 xl:p-0'>
                <h2 className='py-2 '>{data.title}</h2>
                <h3 className='font-normal' >{data.subTitle}</h3>
                <div className='h-4 w-56 mt-4 rounded-full cursor-pointer group'>
                  <Link className='group-hover:text-artiysx-coksu' href={'../#projects'} passHref>
                    <span className='font-bold text-lg'>&#8636;</span> Back
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
