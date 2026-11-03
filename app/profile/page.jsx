"use client";

const education={
    icon:'/assests/resume/cap.svg',
    title:'Education',
    description:
    "Focused on building problem-solving skills and gaining practical knowledge through academic learning",
    items:[
        {
            institution:"Institute of Aeronautical Engineering",
            position:'UG in B.Tech, CSE(AI & ML)',
            duration:"2022-2026",
            gpa:"GPA: 8.44",
            logo:'/assets/logo/iare.svg', 
        },
        {
            institution:"Narayana Junior College",
            position:'Intermediate, MPC',
            duration:"2020-2022",
            gpa:"Percentage: 95.8%",
            logo:'/assets/logo/narayana.svg', 
        },
        {
            institution:"Montessori E.M. School",
            position:'High School, SSC',
            duration:"2015-2020",
            gpa:"GPA: 9.8",
            logo:'/assets/logo/montessori.svg', 
        },
    ],
};

const work = {
    icon: '/assets/resume/briefcase.svg',
    title: 'Work Experience',
    description:
        "Professional experience in software development, enterprise search systems, and team leadership.",
    items: [
        {
            company: "Lumen Technologies",
            position: "AI Intern",
            duration: "Feb 2026 - Aug 2026",
            description:
                "Architected and developed an end-to-end enterprise search assistant using Python, FastAPI, and Qdrant. Indexed approximately 60,000 documents and 700 support tickets using hybrid BM25 and vector search, reducing mean time to answer by approximately 40%. Integrated Confluence, SharePoint, and Teams data sources with incremental synchronization, and delivered the search experience through a Streamlit UI and Microsoft Teams bot.",
            logo: '/assets/logo/lumen.svg',
        },
        {
            company: "e-DAM",
            position: "Chief Video Editor",
            duration: "Apr 2024 - Mar 2025",
            description:
                "Led the video team and coordinated the delivery of 50+ videos over 12 months. Assigned tasks, managed priorities and deadlines, reviewed every video, and provided feedback to maintain consistent quality. Coordinated with team members and event organizers while taking ownership of end-to-end delivery.",
            logo: '/assets/logo/edam.svg',
        },
    ],
};


import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {ScrollArea} from "@/components/ui/scroll-area";
import Image from "next/image";

const Profile = () => {
    return <div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:"easeIn"},
}}
className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
>
    
    <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-white mb-16">Profile</h2>
        <Tabs defaultValue="work" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 justify-center">

                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="work">Work Experience</TabsTrigger>
                              
            </TabsList>

            {/*Content*/}
            <div className="min-h-[70vh] w-full">
                {/*education*/}
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-2xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        
                        <ul className="grid grid-cols-1 gap-[30px]">
                            {education.items.map((item,index)=>{
                                return <li key={index} className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center gap-2">
                                {/* Institution and Duration in a single row */}
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-accent text-lg font-semibold flex-1">{item.institution}</span>
                                    <span className="text-white/70 text-lg font-medium ml-4 whitespace-nowrap">{item.duration}</span>
                                </div>
                            
                                {/* Position/Degree */}
                                <h3 className="text-l text-center lg:text-left">{item.position}</h3>
                            
                                {/* GPA with logo */}
                                <div className="flex items-center gap-3">
                                    {item.logo ? (
                                        <div className="w-12 h-12 relative flex-shrink-0">
                                            <Image 
                                                src={item.logo} 
                                                alt={`${item.institution} logo`}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    )}
                                    <p className="text-white/60">{item.gpa}</p>
                                </div>
                            </li>                                
                            })}
                        </ul>
                        
                    </div>
                </TabsContent>
                <TabsContent value="work" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-2xl font-bold">{work.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{work.description}</p>
                        
                        <ul className="grid grid-cols-1 gap-[30px]">
                            {work.items.map((item,index)=>{
                                return <li key={index} className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center gap-2">
                                {/* Job Title and Duration in a single row */}
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-xl font-semibold text-accent flex-1">{item.position}</span>
                                    <span className="text-white/70 text-lg font-medium ml-4 whitespace-nowrap">{item.duration}</span>
                                </div>
                            
                                {/* Company Name with Logo */}
                                <div className="flex items-center gap-3">
                                    {item.logo ? (
                                        <div className="w-12 h-12 relative flex-shrink-0">
                                            <Image 
                                                src={item.logo} 
                                                alt={`${item.company} logo`}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                    )}
                                    <p className="text-white/60">{item.company}</p>
                                </div>
                            
                                {/* Description */}
                                <p className="text-white/50 text-sm mt-2 leading-relaxed">{item.description}</p>
                            </li>
                            
                            })}
                        </ul>
                        
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    </div>
</div>
};

export default Profile;