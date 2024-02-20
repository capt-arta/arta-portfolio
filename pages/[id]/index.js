import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, Skeleton, Tag } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

export default function Index() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // const inter = Inter({ subsets: ['latin'] })

  const projectsData = [
      {
          id: 'cpp-komet',
          title: 'CPP Komet',
          subTitle: 'Monitoring Project',
          img: '/assets/projects/cpp-komet.png',
          tech: ['Next JS', 'Nest JS', 'PostgreSql'],
          desc: '',
          url: {
            demo : '',
            code: '',
          }
      },
      {
        id: 'smart-dash-infra',
        title: 'Smart Dashboard Infra Telkomsel',
        subTitle: 'Project Management',
        img: '/assets/projects/smartdash-infra.png',
        tech: ['Next JS', 'Laravel', 'MySql Server'],
        desc: '',
        url: {
          demo : '',
          code: '',
        }
    },
      {
          id: 'babek',
          title: 'Babek TNI AD',
          subTitle: 'TNI AD Inventory',
          img: '/assets/projects/babek.png',
          tech: ['Laravel (Backend)', 'Vue JS', 'PostgreSql'],
          desc: '',
          url: {
            demo : '',
            code: '',
          }
      },
      {
          id: 'itsd-telkomsel-dashboard-voc',
          title: 'ITSD Telkomsel Dashboard VoC',
          subTitle: 'Monitoring VoC',
          img: '/assets/projects/itsd.png',
          tech: ['Laravel'],
          desc: '',
          url: {
            demo : '',
            code: '',
          }
      },
      {
          id: 'bri-workbench',
          title: 'BRI WorkBench',
          subTitle: 'RM Performance Monitor',
          img: '/assets/projects/wbench.jpeg',
          tech: ['CodeIgniter', 'SQL Server'],
          desc: '',
          url: {
            demo : '',
            code: '',
          }
      },
      {
          id: 'cariparkir-cms',
          title: 'CariParkir CMS (Admin and Portal)',
          subTitle: 'Content Management System (CMS)',
          img: '/assets/projects/cariparkir.png',
          tech: ['Vue JS', 'React JS', 'Java', 'Nest JS'],
          desc: '',
          url: {
            demo : '',
            code: '',
          }
      },
      {
          id: 'ajari-edutech',
          title: 'Ajari Edutech',
          subTitle: 'Edutech with Live Quiz on Online Video Conference',
          img: '/assets/projects/ajari.png',
          tech: ['Next JS', 'Nest JS', 'PostgreSql'],
          desc: '',
          url: {
            demo : 'https://ajari-web.k3s.bangun-kreatif.com/login',
            code: '',
          }
      },
      {
          id: 'sipd-dashboard',
          title: 'Dashboard SIPD Kemendagri',
          subTitle: 'APBD Monitoring',
          img: '/assets/projects/sipd.png',
          tech: ['Next JS', 'Nest JS', 'PostgreSql'],
          desc: '',
          url: {
            demo : 'https://dashboard-sipd.kemendagri.go.id/',
            code: '',
          }
      },
  ];

  const TechList = ({text}) =>{
    return <p className='text-gray-600 py-2 flex gap-2 items-center'>
      <CheckCircleFilled color='black'/>{`  ${text}`}
    </p>
  }

  const LoadingComponent = () => {
    return (
      <div className='w-full'>
        <div className='w-screen h-[30vh] relative shadow-md'>
          <div className='absolute w-full h-[30vh] bg-black/80 z-10'/>
            {/* <Image className='absolute z-[1] blur-sm' src={data.img} objectFit='cover' layout='fill' alt='/' /> */}
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] text-white z-10 px-6 xl:p-0'>
                <h2 className='py-2 '>
                  {/* <Skeleton active title/> */}
                </h2>
                <h3 className='font-normal' >
                  {/* <Skeleton active title/> */}
                </h3>
                <div className='h-4 w-56 mt-4 rounded-full cursor-pointer group'>
                  <Link className='group-hover:text-artiysx-blu' href={'../#projects'} passHref>
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
    )
  }

  useEffect(()=>{
    projectsData.map((it, idx)=>{
      if (it.id === router.query.id) {
        setData(it)
        setTimeout(() => {
          setLoading(false);
        }, 750);
      }
    })
  },[router.query.id])

  return (
    loading ? <div className='w-full'>
      <div className='w-screen h-[30vh] relative shadow-md'>
        <div className='absolute w-full h-[30vh] bg-black/80 z-10'/>
          {/* <Image className='absolute z-[1] blur-sm' src={data.img} objectFit='cover' layout='fill' alt='/' /> */}
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] text-white z-10 px-6 xl:p-0'>
              <h2 className='py-2 '>
                {/* <Skeleton active title/> */}
              </h2>
              <h3 className='font-normal' >
                {/* <Skeleton active title/> */}
              </h3>
              <div className='h-4 w-56 mt-4 rounded-full cursor-pointer group'>
                <Link className='group-hover:text-artiysx-blu' href={'../#projects'} passHref>
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
    : <div className={`w-full scroll-smooth overflow-x-hidden`}>
        <div className='w-screen h-[30vh] relative shadow-md'>
            <div className='absolute w-full h-[30vh] bg-black/60 z-10'/>
            <Image className='absolute z-[1] blur-sm' src={data.img} objectFit='cover' layout='fill' alt='/' />
            <div className='absolute top-[19vh] sm:top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%] text-white z-10 px-6 xl:p-0'>
                <h2 className='py-2'>{data.title}</h2>
                <h3 className='font-normal' >{data.subTitle}</h3>
            </div>
        </div>
        <div className='min-h-[60vh] w-full h-full flex flex-col gap-8 justify-between'>

          <div className='max-w-[1240px] w-full mx-auto grid md:grid-cols-5 gap-8 pt-8 px-6 xl:px-0'>
            <div className='col-span-4'>
              <p className='tracking-widest text-lg font-medium '>
                <span className='bg-artiysx-blu/20 text-artiysx-blu'>
                  PROJECT
                </span>
              </p>
              <p className='py-4 text-xl font-bold'>OVERVIEW</p>
              <p>
                {data?.desc ? data.desc : 'No overview yet.'}
              </p>
              <div className='flex pt-8 gap-4'>
                {data?.url.demo &&
                  <Link href={data?.url.demo} legacyBehavior aria-disabled>
                    <a target="_blank" rel="noopener noreferrer">
                      <div className='px-4 py-2 rounded-lg bg-slate-700 text-white text-sm hover:scale-95 hover:bg-slate-500 uppercase'>
                        url
                      </div>
                    </a>
                  </Link>
                }
                {data?.url.code &&
                  <Link href={data?.url.code} legacyBehavior aria-disabled>
                    <a target="_blank" rel="noopener noreferrer">
                      <div className='px-4 py-2 rounded-lg bg-slate-700 text-white text-sm hover:scale-95 hover:bg-slate-500 uppercase'>
                        code
                      </div>
                    </a>
                  </Link>
                }
                {!data?.url.code && !data?.url.demo ? <Tag color="error">{`I'm sorry, url and code cannot be displayed.`}</Tag> : ''}
              </div>
            </div>

            <div className='col-span-4 md:col-span-1 rounded-xl shadow-xl shadow-gray-400 p-4 h-fit'>
              <div className='px-2 pt-2'>
                <p className='text-center text-base font-bold pb-2'>Technologies</p>
                {data?.tech.map(it => (<TechList key={it} text={it} />))}
              </div>
            </div>
          </div>

          <div className='max-w-[1240px] w-full mx-auto h-fit mt-4 pb-10 px-6 xl:px-0'>
            <div className='w-fit rounded-full cursor-pointer hover:text-artiysx-blu'>
              <Link className='pr-3' href={'../#projects'} passHref>
                <span className='font-bold text-lg pr-2'>&#8636;</span> Back
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
