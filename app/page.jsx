import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FiExternalLink} from 'react-icons/fi';
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import AboutMe from "./aboutme/page";
import Skills from "./skills/page";
import Profile from "./profile/page";
import Certifications from "./certifications/page";
import Contact from "./contact/page";
import Projectsection from "./projectsection/page";
import { Analytics } from "@vercel/analytics/react"

const Home =()=>{
  return(
     <section className="h-full pt-20 xl:pt-24">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Student</span>
            <h1 className="h1">
              Hi I'm<br /><span className="text-accent">Dindakurthi Kushal</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">I'm Dindakurthi Kushal, a driven Bachelor of Technology candidate specializing in Artificial Intelligence and Machine Learning at IARE College, Hyderabad. I find myself deeply immersed in the realms of web designing .</p>
              {/*btn and social*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://dkushalresume.tiiny.site" target="_blank" rel="noopener noreferrer" passHref>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>View CV</span>
                  <FiExternalLink className="text-xl" />
                </Button>
              </Link>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                  </div>
              </div>
          </div>
          {/*pic*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/* About Me Section */}
      <div id="aboutme">
        <AboutMe />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/* Skills Section */}
      <div id="skills" className="pt-20 xl:pt-24">
        <Skills />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/*Profile Section*/}
      <div id="profile" className="pt-20 xl:pt-24">
        <Profile />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/*Certifications Section*/}
      <div id="certificates" className="pt-20 xl:pt-24">
        <Certifications />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/*Projects Section*/}
      <div id="projects" className="pt-20 xl:pt-24">
        <Projectsection />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/*Contact Section*/}
      <div id="contact" className="pt-20 xl:pt-24">
        <Contact />
      </div>
      </section>
      
  );
  <Analytics />
};

export default Home;