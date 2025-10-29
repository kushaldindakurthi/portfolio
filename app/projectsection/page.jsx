"use client";

import React,{useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';

import { Tooltip,TooltipContent, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects=[
    {
        num: '01',
        category: 'ML & Web Development',
        title: 'CardioInsight',
        description: 'Developed a cardiovascular disease prediction application using Flask and ML. Implemented an intuitive interface for health metrics input and created a PDF report generator that provides personalized assessments and recommendations based on prediction results.',
        stack: [
            { name: "ML" }, 
            { name: "React" }, 
            { name: "Flask" },
        ],
        image: '/assets/projectsection/cardio.png',
        live: 'https://cardioinsight.vercel.app/',
        github: 'https://github.com/kushaldindakurthi/CardioInsight'
    },
    {
        num: '02',
        category: 'Computer Vision & Web Development',
        title: 'Gesture Music System',
        description: 'Engineered a gesture-based music system using Flask and OpenCV, implementing real-time gesture recognition. Designed and deployed a user-friendly web interface with Flask, enhancing overall user experience.',
        stack: [
            { name: "HTML5" }, 
            { name: "CSS3" }, 
            { name: "JS" }, 
            { name: "Flask" }, 
            { name: "OpenCV" },
        ],
        image: '/assets/projectsection/gms.png',
        live: '',
        github: 'https://github.com/kushaldindakurthi/Gesture-Music-System'
    },    
    {
        num: '03',
        category: 'Web Development',
        title: 'Restaurant Management System',
        description: 'Developed a comprehensive Restaurant Management System with a user-friendly interface to enhance reservation and ordering processes. Designed a dynamic and responsive platform using HTML, CSS, and JavaScript, improving overall customer engagement and operational efficiency.',
        stack: [
            { name: "HTML5" }, 
            { name: "CSS3" }, 
            { name: "JavaScript" }
        ],
        image: '/assets/projectsection/rms.png',
        live: 'https://kushaldindakurthi.github.io/RMS/',
        github: 'https://github.com/kushaldindakurthi/RMS'
    },
    {
        num: '04',
        category: 'Web Development',
        title: 'Portfolio Website',
        description: 'Designed and developed a modern portfolio website using React and Next.js. Integrated smooth animations and an interactive user interface to showcase projects and skills. Ensured a fully responsive design with optimized performance and SEO best practices.',
        stack: [
            { name: "React" }, 
            { name: "Next.js" }, 
            { name: "Tailwind CSS" },
        ],
        image: '/assets/projectsection/portfolio.png',
        live: 'https://kushal29d-portfolio.vercel.app/',
        github: 'https://github.com/kushaldindakurthi/portfolio'
    },
    
];

const Projectsection =()=>{
    const [project,setProject]=useState(projects[0]);

    const handleSlideChange=(swiper)=>{
        const currentIndex=swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
    <section intial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:'easeIn'},
    }}
     className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto"> 
            {/* Section Title */}
            <h2 className="text-center text-4xl font-bold text-white mb-16">Projects</h2>
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/*outline*/}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}

                        </div>
                        <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                        {/*project category*/}
                        <h3 className="text-[22px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h3>
                        {/*project description*/}
                        <p className="text-white/60">{project.description}</p>
                        {/*stack*/}
                        <ul className="flex flex-wrap gap-4">
                            {project.stack.map((item, index) => (
                                <li 
                                    key={index} 
                                    className="px-4 py-2  border border-white text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-[#00ff99] hover:text-[#27272c] shadow-md shadow-[#00ff99]/50"
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                        {/*border*/}
                        <div className="border border-white/20"></div>
                        {/*buttons*/}
                        <div className="flex items-center gap-4">
                                {project.live && (
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            {/*github project button*/}
                            <Link href={project
                            .github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                    </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30}slidesPerView={1} className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}>
                        {projects.map((project,index)=>{
                            return(
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center"style={{ backgroundColor: '#1c1c22' }}>
                                    {/*overlay */}
                                    <div className="absolute inset-0 bg-black/30 z-10"></div>

                                    {/*image */}
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill className="object-fill" alt='' />
                                    </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        {/*slider buttons*/}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Projectsection;