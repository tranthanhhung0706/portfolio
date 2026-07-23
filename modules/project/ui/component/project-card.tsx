"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/modules/project/constants/data";
import { ProjectTypeBadges } from "@/modules/project/ui/component/project-type-badges";

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

type Props = {
   project: ProjectItem;
   delay?: number;
   tagCount?: number;
};

export const ProjectCard = ({ project, delay = 0, tagCount = 3 }: Props) => {
   return (
      <motion.div
         variants={fadeUp}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         custom={delay}
      >
         <Link
            href={`/projects/${project.slug}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/40"
         >
            <div className="flex items-start justify-between gap-3">
               <ProjectTypeBadges type={project.type} />

               {project.demoUrl && (
                  <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-emerald-400">
                     <ArrowUpRight className="h-3.5 w-3.5" />
                     demo
                  </span>
               )}
            </div>

            <h3 className="mt-3 line-clamp-2 min-h-14 text-lg leading-7 font-bold text-white">
               {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground/70">
               {project.duration}
            </p>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
               {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
               {project.stack.slice(0, tagCount).map((tag) => (
                  <span
                     key={tag}
                     className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/80"
                  >
                     {tag}
                  </span>
               ))}
            </div>
         </Link>
      </motion.div>
   );
};
