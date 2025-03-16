"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "about me", path: "#aboutme" },
  { name: "skills", path: "#skills" },
  { name: "profile", path: "#profile" },
  { name: "certifications", path: "#certificates" },
  { name: "projects", path: "#projects" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState("/"); 

  const closeMenu = () => setOpen(false);

  const handleClick = (path) => {
    setActiveSection(path);
    closeMenu();
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col h-screen p-4">
        <div className="mt-32 mb-8 text-center text-2xl">
          <Link href="/" onClick={() => handleClick("/")}>
            <h1 className="text-4xl font-semibold">
              D<span className="text-accent">K</span>
            </h1>
          </Link>
        </div>
        {/* Flexbox for navigation links */}
        <nav className="flex flex-col justify-between items-center flex-grow gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => handleClick(link.path)}
                className={`${
                  link.path === activeSection ? "text-accent border-b-2 border-accent" : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;