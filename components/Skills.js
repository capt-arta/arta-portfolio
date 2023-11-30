import Image from 'next/image'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = () => {

    const skillsData = [
        {
            image: './assets/skills/git-icon.svg',
            text: 'GIT',
        },
        {
            image: './assets/skills/html5-icon.svg',
            text: 'HTML',
        },
        {
            image: './assets/skills/css-icon.svg',
            text: 'CSS',
        },
        {
            image: './assets/skills/javascript.svg',
            text: 'JavaScript',
        },
        {
            image: './assets/skills/react-2.svg',
            text: 'ReactJS',
        },
        {
            image: './assets/skills/next-js.svg',
            text: 'NextJS',
        },
        {
            image: './assets/skills/react-native.svg',
            text: 'React Native',
        },
        {
            image: './assets/skills/vue-js.svg',
            text: 'VueJS',
        },
        {
            image: './assets/skills/nodejs.svg',
            text: 'NodeJS',
        },
        {
            image: './assets/skills/nestjs-icon.svg',
            text: 'NestJS',
        },
        {
            image: './assets/skills/php.svg',
            text: 'PHP',
        },
        {
            image: './assets/skills/laravel.svg',
            text: 'Laravel',
        },
        {
            image: './assets/skills/mysql-logo.svg',
            text: 'MySQL',
        },
        
    ];

    const SkillsCard = ({text, image}) => {
        return (
            <ScrollAnimation animateIn='slideInRight' animateOnce>
                <div className='p-6  shadow-lg rounded-xl hover:shadow-xl hover:scale-105 ease duration-200'>
                    <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={image} alt='/' className='aspect-square w-[64px] h-[64px] object-contain' width={64} height={64} />
                        </div>
                        <div className='tracking-wide flex flex-col items-center justify-center'>
                            <h3 className='text-center'>{text}</h3>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }

    return (
        <div id='skills' className='w-full lg:h-screen p-8 py-24'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full' >
                <ScrollAnimation animateIn='slideInUp' animateOnce>
                    <p className='tracking-widest text-xl font-medium '>
                        <span className='bg-artiysx-coksu/20 text-artiysx-coksu'>
                            SKILLS
                        </span>
                    </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInUp" animateOnce>
                    <h2 className='py-3'>
                        What I Can Do
                    </h2>
                </ScrollAnimation>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4'>
                    {skillsData?.map((it, idx)=>{
                        return <SkillsCard key={idx} text={it.text} image={it.image} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills