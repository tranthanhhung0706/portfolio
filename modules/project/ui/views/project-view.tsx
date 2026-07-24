"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

import { PROJECT_TYPE_LABELS, PROJECTS, type ProjectType } from "@/modules/project/constants/data";
import { ProjectCard } from "@/modules/project/ui/component/project-card";

const FILTERS: { label: string; value: ProjectType | "all" }[] = [
   { label: "All", value: "all" },
   ...(Object.keys(PROJECT_TYPE_LABELS) as ProjectType[]).map((value) => ({
      label: PROJECT_TYPE_LABELS[value],
      value,
   })),
];

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

export const ProjectView = () => {
   const [filter, setFilter] = useState<ProjectType | "all">("all");

   const filteredProjects = useMemo(
      () =>
         filter === "all"
            ? PROJECTS
            : PROJECTS.filter((project) => project.type.includes(filter)),
      [filter],
   );

   return (
      <section className="relative overflow-hidden bg-[#0a0e14] py-24">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
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
               projects
            </motion.p>

            <motion.h1
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.1}
               className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            >
               All <span className="text-emerald-400">projects</span>
            </motion.h1>

            <motion.p
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.2}
               className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
               A closer look at the systems I&apos;ve designed and built — click into any
               project for the full breakdown.
            </motion.p>

            <motion.div
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.25}
               className="mt-10 flex flex-wrap gap-2"
            >
               {FILTERS.map((item) => (
                  <button
                     key={item.value}
                     type="button"
                     onClick={() => setFilter(item.value)}
                     className={
                        filter === item.value
                           ? "rounded-full border border-emerald-400 bg-emerald-400/10 px-4 py-1.5 font-mono text-xs text-emerald-300 transition-colors"
                           : "rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-white/25 hover:text-white"
                     }
                  >
                     {item.label}
                  </button>
               ))}
            </motion.div>

            <div className="mt-8 grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} delay={0.1 + i * 0.08} />
               ))}
            </div>
         </div>
      </section>
   );
};
