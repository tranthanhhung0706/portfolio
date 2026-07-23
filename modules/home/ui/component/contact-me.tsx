"use client";

import { useState, type SubmitEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, type LucideIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { type IconType } from "react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
   hidden: { opacity: 0, y: 24 },
   show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
   }),
};

type ContactLink = {
   icon: LucideIcon | IconType;
   label: string;
   href: string;
};

const CONTACT_LINKS: ContactLink[] = [
   {
      icon: Mail,
      label: "hungtranthanh0706@gmail.com",
      href: "mailto:hungtranthanh0706@gmail.com",
   },
   {
      icon: SiGithub,
      label: "github.com/tranthanhhung0706",
      href: "https://github.com/tranthanhhung0706",
   },
   {
      icon: Phone,
      label: "0356549262",
      href: "tel:0356549262",
   },
];

export const ContactMe = () => {
   const [form, setForm] = useState({ name: "", email: "", message: "" });

   const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:hungtranthanh0706@gmail.com?subject=${subject}&body=${body}`;
   };

   return (
      <section id="contact" className="relative overflow-hidden bg-[#0a0e14] py-24">
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 bottom-0 h-[26rem] w-[26rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
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
               05. contact
            </motion.p>

            <motion.h2
               variants={fadeUp}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               custom={0.1}
               className="mt-4 text-4xl font-bold text-white sm:text-5xl"
            >
               Let&apos;s build something
            </motion.h2>

            <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-2">
               <div>
                  <motion.p
                     variants={fadeUp}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     custom={0.2}
                     className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
                  >
                     Have a role, a project, or just want to talk shop about
                     software systems? My inbox is open.
                  </motion.p>

                  <motion.div
                     variants={fadeUp}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: true }}
                     custom={0.3}
                     className="mt-8 space-y-4"
                  >
                     {CONTACT_LINKS.map((link) => (
                        <a
                           key={link.label}
                           href={link.href}
                           target={link.href.startsWith("http") ? "_blank" : undefined}
                           rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                           className="flex items-center gap-3 font-mono text-sm text-muted-foreground transition-colors hover:text-emerald-400"
                        >
                           <link.icon className="h-4 w-4 shrink-0 text-emerald-400" />
                           {link.label}
                        </a>
                     ))}
                  </motion.div>
               </div>

               <motion.form
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={0.2}
                  onSubmit={handleSubmit}
                  className="space-y-4"
               >
                  <Input
                     required
                     placeholder="Name"
                     value={form.name}
                     onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                     className="h-14 rounded-xl border-white/10 bg-white/[0.03] px-4 text-base text-white"
                  />
                  <Input
                     required
                     type="email"
                     placeholder="Email"
                     value={form.email}
                     onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                     className="h-14 rounded-xl border-white/10 bg-white/[0.03] px-4 text-base text-white"
                  />
                  <Textarea
                     required
                     placeholder="Message"
                     value={form.message}
                     onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                     className="min-h-36 rounded-xl border-white/10 bg-white/[0.03] px-4 py-3 text-base text-white"
                  />
                  <Button
                     type="submit"
                     nativeButton
                     className="h-14 w-full rounded-xl bg-emerald-400 text-base font-medium text-[#0a0e14] hover:bg-emerald-300"
                  >
                     Send message
                  </Button>
               </motion.form>
            </div>
         </div>
      </section>
   );
};
