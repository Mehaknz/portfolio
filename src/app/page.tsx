import Image from "next/image";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Contact from "./components/Contact";



export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>

   

      

   </div>
  );
}
