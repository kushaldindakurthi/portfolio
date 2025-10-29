"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiExternalLink, FiX } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import AboutMe from "./aboutme/page";
import Skills from "./skills/page";
import Profile from "./profile/page";
import Certifications from "./certifications/page";
import Contact from "./contact/page";
import Projectsection from "./projectsection/page";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  const [showResume, setShowResume] = useState(false);
  useEffect(() => {
  const html = document.documentElement; // in case <html> is scrollable
  const body = document.body;

  if (showResume) {
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  } else {
    html.style.overflow = "auto";
    body.style.overflow = "auto";
  }

  return () => {
    html.style.overflow = "auto";
    body.style.overflow = "auto";
  };
}, [showResume]);


  return (
    <section className="h-full pt-20 xl:pt-24 relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Student</span>
            <h1 className="h1">
              Hi I'm
              <br />
              <span className="text-accent">Dindakurthi Kushal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A B.Tech student specializing in AI & ML at IARE College, Hyderabad, with a sharp
              attention to detail, curiosity, and a commitment to creating
              meaningful and efficient technological solutions.
            </p>

            {/* Button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => setShowResume(true)}
              >
                <span>View Resume</span>
                <FiExternalLink className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
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

      {/* Profile Section */}
      <div id="profile" className="pt-20 xl:pt-24">
        <Profile />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/* Certifications Section */}
      <div id="certificates" className="pt-20 xl:pt-24">
        <Certifications />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/* Projects Section */}
      <div id="projects" className="pt-20 xl:pt-24">
        <Projectsection />
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 my-12" />

      {/* Contact Section */}
      <div id="contact" className="pt-20 xl:pt-24">
        <Contact />
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[90vh] bg-black rounded-2xl shadow-2xl border border-gray-700">

            {/* Close Button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute -top-5 -right-5 
                        bg-black text-[#00ff99] 
                        w-10 h-10 rounded-full flex items-center justify-center 
                        border border-white 
                        shadow-[0_0_6px_#00ff99]
                        transition-all duration-300 ease-in-out
                        hover:bg-[#00ff99] hover:text-black hover:scale-110 hover:shadow-none"
            >
              <FiX className="text-2xl" />
            </button>

            {/* Embedded Resume */}
            <iframe
              src="/assets/D Kushal Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              title="D Kushal Resume"
              className="w-full h-full rounded-2xl border-none bg-black"
              style={{
                backgroundColor: "#1c1c22",
              }}
            ></iframe>
          </div>
        </div>
      )}
      <Analytics />
    </section>
  );
};

export default Home;
