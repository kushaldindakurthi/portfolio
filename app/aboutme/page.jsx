
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiBookOpen,
  FiSun,
} from "react-icons/fi";

const accordionItems = [
  {
    id: "expertise",
    icon: FiBriefcase,
    heading: "Expertise",
    summary: "AI-driven solutions, and Software Development",
    items: [
      <>
        <strong className="text-white">Programming & Core Tech:</strong>{" "}
        Python, Java, SQL, JavaScript, Data Structures & Algorithms (DSA), and Object-Oriented Programming (OOP) fundamentals.
      </>,
      <>
        <strong className="text-white">Agentic AI:</strong>{" "}
        RAG, Azure AI Foundry, Azure OpenAI, LangGraph, Ollama, and LLM-based applications.
      </>,
      <>
        <strong className="text-white">Application Development:</strong>{" "}
        FastAPI, Flask, React, Streamlit, HTML, and CSS.
      </>,
      
    ],
  },
  {
    id: "education",
    icon: FiBookOpen,
    heading: "Education",
    summary: "Academic background and qualifications",
    items: [
  <>
    <strong className="text-white">Undergraduate:</strong>{" "}
    B.Tech in CSE (AI & ML), Institute of Aeronautical Engineering, Hyderabad (2022–2026).
    <br />
    <strong className="text">GPA:</strong> 8.44/10
  </>,
  <>
    <strong className="text-white">Intermediate:</strong>{" "}
    MPC, Narayana Junior College (2020–2022).
    <br />
    <strong className="text">Percentage:</strong> 95.8%
  </>,
  <>
    <strong className="text-white">Secondary Education:</strong>{" "}
    Montessori E.M. School (2015–2020).
    <br />
    <strong className="text">GPA:</strong> 9.8/10
  </>,
],
  },
  {
    id: "philosophy",
    icon: FiSun,
    heading: "Work Philosophy",
    summary: "Ownership, collaboration, and growth",
    items: [
      <>
        <strong className="text-white">Ownership & Accountability:</strong>{" "}
        Take responsibility for assigned tasks and focus on completing them with attention to detail.
      </>,
      <>
        <strong className="text-white">Team Collaboration:</strong>{" "}
        Experienced in coordinating team members, assigning priorities, managing deadlines, and providing constructive feedback.
      </>,
      <>
        <strong className="text-white">Continuous Improvement:</strong>{" "}
        Value learning new technologies, adapting to changing requirements, and improving the quality of work.
      </>,
    ],
  },
];

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (id) => {
    setActiveSection((current) => (current === id ? null : id));
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12">

          {/* Photo */}
          <motion.div
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
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full xl:w-1/2 text-center xl:text-left"
          >
            <h2 className="h2 mb-4">About Me</h2>

            <span className="text-accent text-xl mb-6 block">
              Defining My Approach
            </span>

            <p className="mb-6 text-white/80 leading-relaxed">
              A technology-driven professional with experience in AI-driven solutions, application development, and technologies such as RAG and hybrid search techniques. Also brings leadership experience in team coordination, task management, and delivering creative projects.
            </p>

            {/* Accordion */}
            <div className="flex flex-col gap-3 text-left">
              {accordionItems.map((item) => {
                const isOpen = activeSection === item.id;
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-xl border transition-all duration-300
                      ${
                        isOpen
                          ? "border-[#00ff99]/60 bg-[#232329] shadow-[0_0_10px_rgba(0,255,153,0.10)]"
                          : "border-white/20 bg-[#232329] hover:border-[#00ff99]/40"
                      }`}
                  >
                    {/* Accordion Header */}
                    <button
                      type="button"
                      onClick={() => toggleSection(item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors duration-300 hover:bg-white/5"
                    >
                      <div className="flex items-center gap-4 min-w-0">

                        {/* Section Icon */}
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300
                            ${
                              isOpen
                                ? "border-[#00ff99] bg-[#00ff99]/10 text-[#00ff99]"
                                : "border-white/20 bg-black/20 text-white/60"
                            }`}
                        >
                          <Icon className="text-xl" />
                        </span>

                        <div className="min-w-0">
                          <h3
                            className={`text-lg font-semibold transition-colors duration-300
                              ${isOpen ? "text-[#00ff99]" : "text-white"}`}
                          >
                            {item.heading}
                          </h3>

                          <p className="text-sm text-white/50">
                            {item.summary}
                          </p>
                        </div>
                      </div>

                      {/* Plus / Close Indicator */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300
                          ${
                            isOpen
                              ? "rotate-45 border-[#00ff99] bg-[#00ff99] text-black shadow-[0_0_8px_rgba(0,255,153,0.45)]"
                              : "rotate-0 border-white/30 text-[#00ff99] hover:border-[#00ff99] hover:bg-[#00ff99]/10"
                          }`}
                      >
                        <span className="text-2xl leading-none">+</span>
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          <ul className="space-y-3 border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/60">
                            {item.items.map((detail, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff99]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
