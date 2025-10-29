"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Salesforce: AI Specialist",
    description:
      "Completed the Salesforce AI Specialist certification. Learned to improve service using Salesforce tools.",
    company: "Salesforce",
    technologies: ["Service Cloud", "Automation", "Customer Service"],
    logo: "/assets/logo/salesforce.svg",
    href: "https://drive.google.com/file/d/1RRYS4OM3RV5ypQg4_qQtHQ20rKvYTnGo/view?usp=sharing",
  },
  {
    num: "02",
    title: "Salesforce: AI Associate",
    description:
      "Completed the Salesforce AI Associate certification. Learned the basics of AI, how it's used in Salesforce.",
    company: "Salesforce",
    technologies: ["AI Basics", "Salesforce", "Responsible AI"],
    logo: "/assets/logo/salesforce.svg",
    href: "https://drive.google.com/file/d/1PUrAvHwTXibZOS6WhN10fkSKNdtE5a5s/view?usp=drive_link",
  },
  {
    num: "03",
    title: "Cisco: Programming Essentials in Python",
    description: "Certification in Python programming fundamentals from Cisco.",
    company: "Cisco Networking Academy",
    technologies: ["Python"],
    logo: "/assets/logo/cisco.svg",
    href: "https://drive.google.com/file/d/1LZ3sKg1013GHaE-N_yUyY2G7qS-g0mXX/view?usp=drive_link",
  },
  {
    num: "04",
    title: "NPTEL: The Joy of Computing Using Python",
    description:
      "Completed NPTEL course covering computational thinking and problem-solving with Python.",
    company: "NPTEL (IIT Madras)",
    technologies: ["Python","Problem Solving"],
    logo: "/assets/logo/nptel.svg",
    href: "https://drive.google.com/file/d/1uXnFj7d9MkSIatSTZ5Ef8Uq31T_Pyofn/view?usp=drive_link",
  },
  
];

const Certifications = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Certifications
        </h2>
        <div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-3">
                  {service.logo && (
                      <img
                        src={service.logo}
                        alt={`${service.company} Logo`}
                        className="h-20 w-20 object-contain"
                      />
                    )
                    }
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* company */}
                <p className="text-white/80 font-semibold">Issued by: {service.company}</p>
                {/* technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 font-semibold text-accent border border-white rounded-lg transition-all duration-300 hover:bg-[#00ff99] hover:text-[#27272c] shadow-md shadow-[#00ff99]/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;











{/*"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';

const services=[
    {
        num:'01',
        title:'Cisco: Programming Essentials in Python',
        description:'Certification in Python programming fundamentals from Cisco.',
        company: 'Cisco Networking Academy',
        technologies: ['Python', 'Programming Basics', 'Networking'],
        href:""
    },
    {
        num:'02',
        title:'NPTEL: The Joy of Computing Using Python',
        description:'Completed NPTEL course covering computational thinking and problem-solving with Python.',
        company: 'NPTEL (IIT Madras)',
        technologies: ['Python', 'Computational Thinking', 'Algorithms'],
        href:""
    },
    {
        num:'03',
        title:'NPTEL: The Joy of Computing Using Python',
        description:'Completed NPTEL course covering computational thinking and problem-solving with Python.',
        company: 'NPTEL (IIT Madras)',
        technologies: ['Python', 'Computational Thinking', 'Algorithms'],
        href:""
    },
    {
        num:'04',
        title:'NPTEL: The Joy of Computing Using Python',
        description:'Completed NPTEL course covering computational thinking and problem-solving with Python.',
        company: 'NPTEL (IIT Madras)',
        technologies: ['Python', 'Computational Thinking', 'Algorithms'],
        href:""
    },
];

import {motion} from "framer-motion";

const Services =()=>{
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            
            <h2 className="text-center text-4xl font-bold text-white mb-16">Certifications</h2>
            <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition:{delay: 2.4, duration: 0.4, ease:'easeIn'},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service,index)=>{
                return(
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                    
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                        <BsArrowDownRight className=" text-primary text-3xl"/>
                        </Link>
                    </div>
                    
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    
                    <p className="text-white/60">{service.description}</p>
                
                    <p className="text-white/80 font-semibold">Issued by: {service.company}</p>
                    
                    <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                            <span key={idx} className="px-4 py-2 font-semibold  text-accent border border-white rounded-lg transition-all duration-300 hover:bg-[#00ff99] hover:text-[#27272c] shadow-md shadow-[#00ff99]/50">
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    <div className="border-b border-white/20 w-full"></div>
                </div>
                );
            })}
            </motion.div>
        </div>
        </section>
    )
}

export default Services;
*/}