"use client";

import { motion } from "motion/react";

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

const STATS = [
   { label: "Phone Number", value: "0356549262" },
   { label: "Email", value: "hungtranthanh0706@gmail.com" },
   { label: "Git", value: "https://github.com/tranthanhhung0706" },
   { label: "Experience", value: "3 years" },
   { label: "Focus", value: "Frontend / Backend" },
   { label: "Status", value: "Open to work" },
];

export const AboutMe = () => {
   return (
      <section id="about" className="relative overflow-hidden bg-[#0a0e14] py-24">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
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
               01. about
            </motion.p>

            <motion.h2
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.1}
               className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            >
               About me
            </motion.h2>

            <div className="mt-4 grid grid-cols-1 gap-16 lg:grid-cols-2">
               <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.2}
                  className="space-y-6 mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
               >
                  <p>
                     I&apos;m a software developer with a focus on building reliable
                     and efficient software systems, scalable applications, and
                     practical developer tools.
                  </p>
                  <p>
                     I enjoy finding better ways to solve problems by improving
                     performance, automating repetitive tasks, managing data more
                     effectively, enhancing products, and leveraging AI to deliver
                     faster and smarter solutions.
                  </p>
                  <p>
                     Outside of production code, I enjoy building internal tools,
                     exploring new technologies, and continuously learning to
                     improve both my technical skills and the products I work on.
                  </p>
               </motion.div>

               <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.3}
                  className="divide-y divide-white/10"
               >
                  {STATS.map((stat) => (
                     <div
                        key={stat.label}
                        className="flex items-center justify-between py-5"
                     >
                        <span className="font-mono text-sm text-muted-foreground">
                           {stat.label}
                        </span>
                        {stat.value.startsWith("http") ? (
                           <a
                              href={stat.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-sm font-bold text-white transition-colors hover:text-emerald-400"
                           >
                              {stat.value}
                           </a>
                        ) : (
                           <span className="font-mono text-sm font-bold text-white">
                              {stat.value}
                           </span>
                        )}
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>
   );
};
