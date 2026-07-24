"use client";

import { motion } from "motion/react";
import {
   Code2,
   Database,
   HeartHandshake,
   LayoutPanelLeft,
   PenTool,
   Server,
   ShoppingBag,
   Smartphone,
   Sparkles,
   Webhook,
   Wrench,
   type LucideIcon,
} from "lucide-react";
import {
   SiAngular,
   SiFigma,
   SiGit,
   SiGithub,
   SiGitlab,
   SiGraphql,
   SiJavascript,
   SiJira,
   SiMongodb,
   SiN8N,
   SiNestjs,
   SiNextdotjs,
   SiNodedotjs,
   SiOpenjdk,
   SiPostgresql,
   SiPostman,
   SiPrimeng,
   SiReact,
   SiShadcnui,
   SiSharp,
   SiShopify,
   SiSpringboot,
   SiSwagger,
   SiTailwindcss,
   SiTypescript,
   SiWebflow,
   SiWix,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { type IconType } from "react-icons";

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

const badgeGroup = {
   hidden: {},
   show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
   },
};

const badgeItem = {
   hidden: { opacity: 0, scale: 0.8, y: 8 },
   show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
   },
};

type SkillBadge = { label: string; icon: IconType | LucideIcon; color: string };

type SkillGroup = {
   title: string;
   icon: LucideIcon;
   items: SkillBadge[];
};

const SKILLS: SkillGroup[] = [
   {
      title: "Languages",
      icon: Code2,
      items: [
         { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
         { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
         { label: "Java", icon: FaJava, color: "#F89820" },
         { label: "C#", icon: SiSharp, color: "#9B4F96" },
      ],
   },
   {
      title: "Frontend",
      icon: LayoutPanelLeft,
      items: [
         { label: "Angular", icon: SiAngular, color: "#DD0031" },
         { label: "React", icon: SiReact, color: "#61DAFB" },
         { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
         { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
         { label: "PrimeNG", icon: SiPrimeng, color: "#0EA5E9" },
         { label: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
      ],
   },
   {
      title: "Backend",
      icon: Server,
      items: [
         { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
         { label: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
         { label: "Nest.js", icon: SiNestjs, color: "#E0234E" },
      ],
   },
   {
      title: "Database",
      icon: Database,
      items: [
         { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
         { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
   },
   {
      title: "Tools & Workflow",
      icon: Wrench,
      items: [
         { label: "Git", icon: SiGit, color: "#F05032" },
         { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
         { label: "GitLab", icon: SiGitlab, color: "#FC6D26" },
         { label: "Jira", icon: SiJira, color: "#0052CC" },
         { label: "Figma", icon: SiFigma, color: "#F24E1E" },
         { label: "Postman", icon: SiPostman, color: "#FF6C37" },
         { label: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      ],
   },
   {
      title: "E-commerce & Platforms",
      icon: ShoppingBag,
      items: [
         { label: "Shopify", icon: SiShopify, color: "#7AB55C" },
         { label: "WIX", icon: SiWix, color: "#FFFFFF" },
         { label: "Webflow", icon: SiWebflow, color: "#4353FF" },
      ],
   },
   {
      title: "Other Knowledge",
      icon: Sparkles,
      items: [
         { label: "Responsive Design", icon: Smartphone, color: "#34D399" },
         { label: "REST API", icon: Webhook, color: "#2DD4BF" },
         { label: "GraphQL", icon: SiGraphql, color: "#E10098" },
         { label: "UI/UX Design", icon: PenTool, color: "#A78BFA" },
         { label: "N8N Automation", icon: SiN8N, color: "#EA4B71" },
         { label: "Self-motivated", icon: HeartHandshake, color: "#A3E635" },
      ],
   },
];

export const Skill = () => {
   return (
      <section id="skills" className="relative overflow-hidden bg-[#0a0e14] py-12 md:py-16">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
         </div>

         <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start">
               <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0}
                  className="text-center font-mono text-sm text-emerald-400"
               >
                  02. skills
               </motion.p>

               <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.1}
                  className="mt-4 text-center text-4xl font-bold text-white sm:text-5xl"
               >
                  My <span className="text-emerald-400">Skills</span>
               </motion.h2>

               <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.2}
                  className=" mt-4 max-w-xl text-left text-base text-muted-foreground sm:text-lg"
               >
                  My skills are those I&apos;ve learned and refined over years of shipping
                  production systems, studying, and staying consistent in what I love most.
               </motion.p>
            </div>

            <div className="mt-6 md:mt-12 space-y-4 md:space-y-6">
               {SKILLS.map((group, i) => {
                  const Icon = group.icon;
                  return (
                     <motion.div
                        key={group.title}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={0.1 + i * 0.08}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
                     >
                        <div className="pointer-events-none absolute inset-0">
                           <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[80px]" />
                        </div>

                        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                           <div className="flex shrink-0 items-center gap-4 sm:w-56">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10">
                                 <Icon className="h-5 w-5 text-emerald-400" />
                              </div>
                              <h3 className="text-xl font-bold text-white sm:text-2xl">
                                 {group.title}
                              </h3>
                           </div>

                           <motion.div
                              variants={badgeGroup}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: true }}
                              className="flex flex-wrap gap-3"
                           >
                              {group.items.map((item) => {
                                 const ItemIcon = item.icon;
                                 return (
                                    <motion.div
                                       key={item.label}
                                       variants={badgeItem}
                                       whileHover={{ scale: 1.05 }}
                                       className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-emerald-400/40"
                                    >
                                       <ItemIcon
                                          className="h-5 w-5 shrink-0"
                                          style={{ color: item.color }}
                                       />
                                       <span className="font-mono text-sm text-white/90">
                                          {item.label}
                                       </span>
                                    </motion.div>
                                 );
                              })}
                           </motion.div>
                        </div>
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};
