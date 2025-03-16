import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kushaldindakurthi" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kushaldindakurthi/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/kushal_dindakurthi/" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] bg-opacity-50 text-white py-6 text-center">
      <p className="text-sm">© 2025 Dindakurthi Kushal | All Rights Reserved</p>
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-all duration-300 hover:text-accent"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
