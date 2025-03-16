"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  { 
    name: "about me", 
    path: "#aboutme" 
  },
  { 
    name: "skills",
    path: "#skills" 
  },
  {
    name: "profile",
    path: "#profile",
  },
  {
    name: "certifications",
    path: "#certificates",
  },
  {
    name: "projects",
    path: "#projects",
  },
];

const Nav = () => {
  const pathName = usePathname();
  const [activeSection, setActiveSection] = useState("/");
  
  const handleClick = (path) => {
    setActiveSection(path);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .filter(link => link.path.startsWith('#'))
        .map(link => {
          const id = link.path.substring(1); 
          return document.getElementById(id);
        })
        .filter(Boolean);
      
      const homeSection = { getBoundingClientRect: () => ({ top: 0, bottom: window.innerHeight }) };
      
      let currentSection = "/"; 
      
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 150) {
          currentSection = `#${section.id}`;
          break;
        }
      }
      
      if (window.scrollY < 100) {
        currentSection = "/";
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          onClick={() => handleClick(link.path)}
          className={`${
            link.path === activeSection
              ? "text-accent border-b-2 border-accent"
              : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;