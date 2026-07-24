"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { HIGHLIGHT_TERMS, type ProjectItem } from "@/modules/project/constants/data";
import { ProjectTypeBadges } from "@/modules/project/ui/component/project-type-badges";

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

type Props = {
   project: ProjectItem;
};

export const ProjectDetailView = ({ project }: Props) => {
   return (
      <section className="relative overflow-hidden bg-[#0a0e14] py-24">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-1/3 h-[26rem] w-[26rem] translate-x-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
         </div>

         <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0}
            >
               <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-emerald-400"
               >
                  <ArrowLeft className="h-4 w-4" />
                  All projects
               </Link>
            </motion.div>

            <motion.div
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0.08}
               className="mt-6"
            >
               <ProjectTypeBadges type={project.type} />
            </motion.div>

            <motion.h1
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0.1}
               className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            >
               {project.title}
            </motion.h1>

            <motion.div
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0.15}
               className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted-foreground"
            >
               {project.company && (
                  <>
                     <span>{project.company}</span>
                     <span className="text-white/20">/</span>
                  </>
               )}
               <span>{project.duration}</span>
            </motion.div>



            <motion.p
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0.25}
               className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
               {renderHighlighted(project.description)}
            </motion.p>

            <motion.div
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0.3}
               className="mt-8 flex flex-wrap gap-2"
            >
               {project.stack.map((tag) => (
                  <span
                     key={tag}
                     className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80"
                  >
                     {tag}
                  </span>
               ))}
            </motion.div>
            {(project.demoUrl || project.githubUrl) && (
               <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0.2}
                  className="mt-6 flex flex-wrap gap-4"
               >
                  {project.demoUrl && (
                     <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-5 py-2.5 text-sm font-medium text-[#0a0e14] transition-colors hover:bg-emerald-300"
                     >
                        <ArrowUpRight className="h-4 w-4" />
                        {project.type.includes("demo") ? "Live demo" : "Visit website"}
                     </a>
                  )}
                  {project.githubUrl && (
                     <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-transparent px-5 py-2.5 font-mono text-sm text-emerald-400 transition-colors hover:bg-emerald-400/10"
                     >
                        <SiGithub className="h-4 w-4" />
                        Source
                     </a>
                  )}
               </motion.div>
            )}
            <motion.h2
               variants={fadeUp}
               initial="hidden"
               animate="show"
               custom={0.35}
               className="mt-8 text-xl font-bold text-white sm:text-2xl"
            >
               Highlights
            </motion.h2>

            <motion.ul
               variants={listGroup}
               initial="hidden"
               animate="show"
               className="mt-5 space-y-2.5 border-t border-white/10 pt-6"
            >
               {project.highlights.map((point, i) => (
                  <motion.li
                     key={i}
                     variants={listItem}
                     className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                     <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                     <span>{renderHighlighted(point)}</span>
                  </motion.li>
               ))}
            </motion.ul>
         </div>
      </section>
   );
};
