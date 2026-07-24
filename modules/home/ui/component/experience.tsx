"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

import { HIGHLIGHT_TERMS, PROJECTS } from "@/modules/project/constants/data";

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

const listGroup = {
   hidden: {},
   show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
   },
};

const listItem = {
   hidden: { opacity: 0, x: -12 },
   show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
   },
};



const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const HIGHLIGHT_PATTERN = new RegExp(
   `(${HIGHLIGHT_TERMS.map(escapeRegex).join("|")})`,
   "g"
);

const renderHighlighted = (text: string) => {
   const parts = text.split(HIGHLIGHT_PATTERN);
   return parts.map((part, i) =>
      HIGHLIGHT_TERMS.includes(part) ? (
         <span key={i} className="text-sky-400">
            {part}
         </span>
      ) : (
         part
      )
   );
};

type CompanyInfo = {
   company: string;
   duration: string;
   position: string;
};

const COMPANY: CompanyInfo = {
   company: "BEETECH SOLUTIONS TECHNOLOGY CO,LTD",
   duration: "9/2024 - Present",
   position: "Frontend Developer",
};

const COMPANY_PROJECTS = PROJECTS.filter((project) => project.type.includes("company"));

export const Experience = () => {
   return (
      <section id="experience" className="relative overflow-hidden bg-[#0a0e14] py-12 md:py-16">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-1/3 h-[26rem] w-[26rem] translate-x-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
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
               04. experience
            </motion.p>

            <motion.h2
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.1}
               className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            >
               Projects I&apos;ve <span className="text-emerald-400">built</span>
            </motion.h2>

            <motion.div
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.15}
               className="mt-4 md:mt-10 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between"
            >
               <h3 className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                  {COMPANY.company}
               </h3>
               <span className="font-mono text-sm text-muted-foreground sm:text-base">
                  {COMPANY.duration}
               </span>
            </motion.div>

            <div className="mt-8 divide-y divide-white/10">
               {COMPANY_PROJECTS.map((project, i) => (
                  <motion.div
                     key={project.title}
                     variants={fadeUp}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     custom={0.1 + i * 0.1}
                     className="py-8 first:pt-0 last:pb-0"
                  >
                     <div className="flex items-start gap-3">
                        <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                        <div className="min-w-0">
                           <h3 className="text-xl font-bold text-white sm:text-2xl">
                              {project.title}
                           </h3>

                           <p className="mt-2 font-mono text-sm text-emerald-400">
                              {project.stack.join(", ")}
                           </p>

                           <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                              {project.description}
                           </p>

                           <motion.ul
                              variants={listGroup}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true }}
                              className="mt-5 space-y-2.5"
                           >
                              {project.highlights.map((point, j) => (
                                 <motion.li
                                    key={j}
                                    variants={listItem}
                                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
                                 >
                                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                                    <span>{renderHighlighted(point)}</span>
                                 </motion.li>
                              ))}
                           </motion.ul>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};
