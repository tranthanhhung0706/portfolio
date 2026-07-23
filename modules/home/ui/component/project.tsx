"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { PROJECTS } from "@/modules/project/constants/data";
import { ProjectCard } from "@/modules/project/ui/component/project-card";

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

const FEATURED_PROJECTS = PROJECTS.slice(0, 3);

export const Project = () => {
   return (
      <section id="projects" className="relative overflow-hidden bg-[#0a0e14] py-24">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-[26rem] w-[26rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
         </div>

         <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.p
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0}
               className="font-mono text-sm text-emerald-400"
            >
               03. projects
            </motion.p>

            <motion.h2
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.1}
               className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            >
               Selected work & demos
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {FEATURED_PROJECTS.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} delay={0.1 + i * 0.1} />
               ))}
            </div>

            <motion.div
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.3}
               className="mt-10 flex justify-center"
            >
               <Link
                  href="/projects"
                  className="group flex items-center gap-2 font-mono text-sm text-emerald-400 transition-colors hover:text-emerald-300"
               >
                  View all projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
               </Link>
            </motion.div>
         </div>
      </section>
   );
};
