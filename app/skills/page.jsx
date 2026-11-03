
"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaPython,
    FaDatabase,
    FaJava,
    FaGitAlt,
    FaServer,
    FaFlask,
    FaCloud,
} from "react-icons/fa";

const skills = {
    title: "Skills",
    description:
        "Technologies and tools I have worked with across software development, AI, and application development:",

    skilllist: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaServer />, name: "FastAPI" },
        { icon: <FaFlask />, name: "Flask" },
        { icon: <FaServer />, name: "Streamlit" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaCloud />, name: "Microsoft Azure" },
    ],
};

const Skills = () => {
    return (
        <div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.4,
                    duration: 0.6,
                    ease: "easeIn",
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-[30px] text-center">
                    <h2 className="text-4xl font-bold text-white mb-2">
                        {skills.title}
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto mb-8">
                        {skills.description}
                    </p>

                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skilllist.map((skill, index) => (
                            <li
                                key={index}
                                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group relative"
                            >
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                </div>

                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm px-2 py-1 rounded text-center whitespace-nowrap">
                                    {skill.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
