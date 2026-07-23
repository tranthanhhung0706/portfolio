"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

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

const HIGHLIGHT_TERMS = [
   "Shopify Admin API",
   "GraphQL API",
   "Next.js Image",
   "Google Analytics",
   "robots.txt",
   "XML sitemaps",
   "Swagger",
   "SignalR",
   "Firebase Cloud Messaging",
   "Service Workers",
   "Notification API",
   "TanStack Query",
   "Zustand",
   "Context API",
   "Tiptap",
   "dnd-kit",
   "OpenAI API",
   "Google Sheets API",
   "Excel",
].sort((a, b) => b.length - a.length);

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

type Project = {
   title: string;
   stack: string[];
   description: string;
   points: string[];
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

const PROJECTS: Project[] = [
   {
      title: "Headless E-Commerce Platform (Shopify & WooCommerce)",
      stack: [
         "Next.js",
         "Shopify GraphQL API",
         "Shopify Admin API",
         "Tailwind CSS",
         "shadcn/ui",
         "TanStack Query",
         "Axios",
         "Firebase Cloud Messaging",
         "SEO",
      ],
      description:
         "Developed modern headless e-commerce platforms for Shopify and WooCommerce with a custom Next.js frontend, integrating GraphQL-based product sync, automated inventory management, SSR/SSG rendering, and full SEO optimization for improved search visibility.",
      points: [
         "Built headless storefronts using Next.js integrated with Shopify backend via GraphQL API for real-time inventory sync.",
         "Implemented Shopify Admin API integration for automated product imports and multi-channel updates.",
         "Customized responsive UI/UX using Tailwind CSS and shadcn/ui to match client branding.",
         "Optimized image handling with Next.js Image, WebP conversion, lazy loading, and responsive sizing.",
         "Integrated Google Analytics, robots.txt, and XML sitemaps to track traffic and manage crawler access.",
      ],
   },
   {
      title: "Visa Document Management System",
      stack: [
         "Angular",
         "PrimeNG",
         "Tailwind CSS",
         "Swagger API",
         "SignalR",
         "Firebase Cloud Messaging",
      ],
      description:
         "Built a comprehensive internal system for managing documents, user accounts, permissions, and notifications, with real-time messaging via SignalR and push notifications through Firebase, backed by Swagger-documented REST APIs.",
      points: [
         "Designed responsive UI for homepage, document list, user management, and comment modules.",
         "Integrated backend REST APIs (documented with Swagger) for full CRUD on documents, users, and comments.",
         "Implemented real-time messaging via SignalR, tracking online/offline status across connected clients.",
         "Configured Firebase Cloud Messaging with Service Workers for foreground/background push notifications.",
         "Implemented custom browser notifications using the Notification API with custom styling and actions.",
      ],
   },
   {
      title: "Customer Relationship Management (CRM) System",
      stack: [
         "Next.js",
         "Tailwind CSS",
         "shadcn/ui",
         "Zustand",
         "React Context API",
         "TanStack Query",
         "Axios",
         "Firebase Cloud Messaging",
         "Swagger API",
      ],
      description:
         "Developed a full CRM covering leads, customers, orders, tickets, tasks, and reports with multi-channel integration, rich-text email templates, and global state management via Zustand and Context API.",
      points: [
         "Designed responsive and intuitive UI/UX for core modules (Lead, Pipeline, Customer, Order, Task, Ticket, Mail Template) using Tailwind CSS and shadcn/ui for consistent design across the platform.",
         "Integrated backend REST APIs (documented with Swagger) for comprehensive CRUD operations on all CRM modules including lead management, customer data, order processing, and ticket handling.",
         "Created custom React hooks for API data fetching and state management, abstracting complex logic and promoting code reusability.",
         "Implemented TanStack Query with Axios for efficient API data fetching, caching, and synchronization to minimize server requests and improve performance.",
         "Established global state management using Zustand for managing user authentication, application settings, and shared data across components.",
         "Implemented Context API for managing multi-language support and application configuration settings throughout the system.",
         "Developed reusable utility functions for common operations (data formatting, validation, date handling) to reduce code duplication and improve maintainability.",
         "Built modular and reusable components for frequently used elements (forms, tables, modals, buttons) to ensure consistency and streamline development.",
         "Implemented email template management with rich text editing capabilities (Tiptap) and integrated mail sending functionality for automated customer communications.",
         "Created dynamic sales pipeline management with configurable dynamic fields, allowing users to customize field structures for different stages and adapt to varying business requirements.",
      ],
   },
   {
      title: "Recruitment & Resume Management System",
      stack: [
         "Next.js",
         "Tailwind CSS",
         "shadcn/ui",
         "Zustand",
         "TanStack Query",
         "dnd-kit",
         "Tiptap",
         "OpenAI API",
         "Google Sheets API",
      ],
      description:
         "Built a recruitment platform for managing job postings, candidates, and workflows with AI-powered resume analysis, drag-and-drop dynamic form templates, and automated email communication.",
      points: [
         "Designed responsive UI/UX for Job Management, Candidate Management, and Resume Management modules.",
         "Created dynamic recruitment form templates configurable per hiring company.",
         "Implemented drag-and-drop form building using dnd-kit for non-technical users.",
         "Integrated TanStack Query with Axios for efficient data fetching and real-time sync.",
         "Built data export functionality to Excel for candidate and recruitment metrics.",
      ],
   },
];

export const Experience = () => {
   return (
      <section id="experience" className="relative overflow-hidden bg-[#0a0e14] py-24">
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
               className="mt-10 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between"
            >
               <h3 className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                  {COMPANY.company}
               </h3>
               <span className="font-mono text-sm text-muted-foreground sm:text-base">
                  {COMPANY.duration}
               </span>
            </motion.div>



            <div className="mt-8 divide-y divide-white/10">
               {PROJECTS.map((project, i) => (
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
                              {project.points.map((point, j) => (
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
