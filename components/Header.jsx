"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`py-4 xl:py-6 text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-40' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">D<span className="text-accent">K</span></h1>
        </Link>

        {/*desktop nav and hire me*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="#contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;