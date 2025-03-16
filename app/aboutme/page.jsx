"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12">
          {/* photo */}
          <div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full xl:w-1/2 order-2 xl:order-none"
          >
            <div className="relative w-full max-w-[470px] h-[470px] mx-auto xl:mx-0">
              <Image 
                src="/assets/about/about.jpg" 
                alt="About Me" 
                fill 
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          
          {/* content */}
          <div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full xl:w-1/2 text-center xl:text-left"
          >
            <h2 className="h2 mb-4">About Me</h2>
            <span className="text-accent text-xl mb-6 block">My journey and passion</span>
            
            <p className="mb-6 text-white/80">
            I'm deeply passionate about creating innovative solutions in web development, database management and python.
            </p>
            
            <p className="mb-6 text-white/80">
            Beyond technical expertise, I value leadership and adaptability, ensuring smooth collaboration and continuous learning. My approach combines problem-solving with user-focused design, allowing me to create functional, intuitive applications while exploring new technologies to stay ahead
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-white/20 rounded-lg p-4">
                <div className="text-accent text-2xl font-bold mb-2">Education</div>
                <div className="text-white/80">B.Tech in AI & ML</div>
                <div className="text-white/60">IARE College, Hyderabad</div>
              </div>
              
              <div className="border border-white/20 rounded-lg p-4">
                <div className="text-accent text-2xl font-bold mb-2">Expertise</div>
                <div className="text-white/80">Web Development</div>
                <div className="text-white/60">Databases, Python</div>
              </div>
            </div>
            
            {/*<Link href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
            </Link>*/}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;