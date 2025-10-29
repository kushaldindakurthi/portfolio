"use client";

const education={
    icon:'/assests/resume/cap.svg',
    title:'Education',
    description:
    "Focused on building problem-solving skills and gaining practical knowledge through academic learning",
    items:[
        {
            institution:"Institute of Aeronautical Engineering",
            position:'UG in B.Tech',
            duration:"2022-Present",
            gpa:"GPA: 8.43",
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

const cocurricular={
    icon:'/assests/resume/badge.svg',
    title:'Co-Curricular',
    description:
    "Engaged in activities that enhance creativity, teamwork, and leadership beyond academics.",
    items:[
        {
            company:"e-DAM",
            position:'Video Editor',
            duration:"Apr'24 - Mar'25",
            description:"Edited podcast episodes utilizing professional video editing software such as Inshot, VN and Audacity, enhancing audio clarity and visual appeal.",
            logo:'/assets/logo/edam.svg', 
        },
        {
            company:"E-Cell",
            position:'Member',
            duration:"Oct'23 - Sep'24",
            description:"Supported team activities and contributed to achieving organizational goals, fostering a collaborative.",
            logo:'/assets/logo/ecell.svg',
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
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="cocurricular">Co-Curricular</TabsTrigger>                
            </TabsList>

            {/*Content*/}
            <div className="min-h-[70vh] w-full">
                {/*co-curricular*/}
                <TabsContent value="cocurricular" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-2xl font-bold">{cocurricular.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{cocurricular.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {cocurricular.items.map((item,index)=>{
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
                        </ScrollArea>
                    </div>
                </TabsContent>

                {/*education*/}
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-2xl font-bold">{education.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
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
                        </ScrollArea>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    </div>
</div>
};

export default Profile;