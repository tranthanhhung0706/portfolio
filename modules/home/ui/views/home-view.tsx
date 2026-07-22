import { HeroSection } from "@/modules/home/ui/component/hero-section";
import { AboutMe } from "@/modules/home/ui/component/about-me";
import { Skill } from "@/modules/home/ui/component/skill";
import { Experience } from "@/modules/home/ui/component/experience";

export const HomeView = () => {

   return (
      <>
         <HeroSection />
         <AboutMe />
         <Skill />
         <Experience />
      </>
   )
}