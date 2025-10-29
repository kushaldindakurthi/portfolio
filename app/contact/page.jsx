"use client";

import {Button} from "@/components/ui/button";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';


const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+91-7794981546",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "kushal29d@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Hyderabad, India",
    },
];

const Contact =()=>{
    return(
        <section intial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:'easeIn'},
    }} className="py-6"
    >
        <div className="container mx-auto">
            {/* Section Title */}
            <h2 className="text-center text-4xl font-bold text-white mb-16">Contact</h2>
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/*form*/}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's Connect</h3>
                        <p className="text-white/60">Have a question, opportunity, or want to connect? Feel free to reach out via email or phone. Click the button below to send me a message or give me a call, and I'll get back to you as soon as possible.</p>
                        
                        {/*contact buttons*/}
                        <div className="flex items-center gap-4">
                            <Button size="md" className="max-w-40" asChild>
                                <a href="mailto:kushal29d@gmail.com">Send Message</a>
                            </Button>
                            <span className="text-white/60 text-lg font-medium leading-[1.0]">or</span>
                            <Button size="md" className="max-w-40" asChild>
                                <a href="tel:7794981546">Call</a>
                            </Button>
                        </div>


                    </form>
                </div>
                {/*info*/}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                       {info.map((item,index)=>{
                        return <li key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.description}</h3>
                            </div>
                        </li>
                       })} 
                    </ul>
                </div>
            </div>
        </div>

        </section>
    );
};

export default Contact;