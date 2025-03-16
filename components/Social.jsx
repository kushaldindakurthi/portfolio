import Link from "next/link";
import {FaGithub,FaLinkedinIn, FaInstagram} from "react-icons/fa";

const socials=[
    {icon:<FaGithub />,path:'https://github.com/kushaldindakurthi'},
    {icon:<FaLinkedinIn />,path:'https://www.linkedin.com/in/kushaldindakurthi/'},
    {icon:<FaInstagram />,path:'https://www.instagram.com/kushal_dindakurthi/'},
];
const Social = ({containerStyles, iconStyles})=>{
    return (
        <div className={containerStyles}>
                {socials.map((item, index)=>{
                    
         {/*error coming check 1:00*/}           
                    return (
                        <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
                    );


                })}
            </div>
        );
};

export default Social;