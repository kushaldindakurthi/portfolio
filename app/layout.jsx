import {JetBrains_Mono} from "next/font/google";
import "./globals.css";


import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const jetbrainsMono=JetBrains_Mono({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
});

export const metadata = {
  title: "Dindakurthi Kushal's Portfolio",
  description: "B.Tech Computer Science student specializing in AI & ML, with expertise in Python, SQL, and web development. Developed projects in machine learning and full-stack development.Passionate about innovation, problem-solving, and continuous learning.",
};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />

        
        <PageTransition>{children}</PageTransition>

        <Footer />
        </body>
    </html>
  );
}