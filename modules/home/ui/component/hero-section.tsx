"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

/**
 * Lets multiple TypewriterText instances run in a fixed order: order=1
 * starts immediately, order=2 only starts once order=1 finishes typing, etc.
 */
const TypewriterSequenceContext = createContext<{
  activeOrder: number;
  advance: (order: number) => void;
} | null>(null);

const TypewriterSequence = ({ children }: { children: React.ReactNode }) => {
  const [activeOrder, setActiveOrder] = useState(1);

  return (
    <TypewriterSequenceContext.Provider
      value={{
        activeOrder,
        advance: (order) =>
          setActiveOrder((current) => Math.max(current, order + 1)),
      }}
    >
      {children}
    </TypewriterSequenceContext.Provider>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ORBIT_TEXT = "MORE • LET'S EXPLORE • MORE • LET'S EXPLORE • ";

const DECK_CARDS = [
  { rotate: -14, className: "bg-emerald-400/20 blur-md" },
  { rotate: 10, className: "bg-emerald-400/30 blur-sm" },
  { rotate: -6, className: "bg-emerald-500/40" },
];
const DECK_STAGGER = 0.15;
const IMAGE_DELAY = DECK_CARDS.length * DECK_STAGGER + 0.15;

type TypewriterSegment = { text: string; className?: string };

const TypewriterText = ({
  segments,
  order = 1,
  startDelayMs = 0,
  speedMs = 60,
  cursorClassName,
}: {
  segments: TypewriterSegment[];
  /** Position in the enclosing TypewriterSequence — order=1 runs first,
   *  order=2 waits for order=1 to finish typing, and so on. */
  order?: number;
  startDelayMs?: number;
  speedMs?: number;
  cursorClassName: string;
}) => {
  const sequence = useContext(TypewriterSequenceContext);
  const active = sequence ? sequence.activeOrder === order : true;

  const fullText = segments.map((s) => s.text).join("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= fullText.length) {
          clearInterval(interval);
          sequence?.advance(order);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [active, fullText, startDelayMs, speedMs, order, sequence]);

  const shownSegments = segments.reduce<
    { shown: string; className?: string }[]
  >((acc, segment) => {
    const used = acc.reduce((sum, s) => sum + s.shown.length, 0);
    const shown = segment.text.slice(0, Math.max(0, count - used));
    return [...acc, { shown, className: segment.className }];
  }, []);

  const isDone = count >= fullText.length;

  return (
    <span>
      {shownSegments.map((segment, i) => (
        <span key={i} className={segment.className}>
          {segment.shown}
        </span>
      ))}
      {!isDone && (
        <motion.span
          aria-hidden
          className={`ml-0.5 inline-block h-[0.85em] w-0.5 align-middle ${cursorClassName}`}
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
          }}
        />
      )}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0e14]">
      {/* ambient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] translate-x-1/4 translate-y-1/4 rounded-full bg-emerald-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* text column */}
        <TypewriterSequence>
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="font-mono text-sm"
            >
              <span className="text-emerald-400">$</span>{" "}
              <TypewriterText
                segments={[
                  { text: "Hi! I'm ", className: "text-muted-foreground" },
                  { text: "Hung Tran", className: "text-emerald-400" },
                  {
                    text: " — Based in Vietnam",
                    className: "text-muted-foreground",
                  },
                ]}
                order={1}
                startDelayMs={200}
                speedMs={40}
                cursorClassName="bg-muted-foreground"
              />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Full Stack Developer &{" "}
              <TypewriterText
                segments={[
                  { text: "Freelancer", className: "text-emerald-400" },
                ]}
                order={2}
                startDelayMs={300}
                speedMs={110}
                cursorClassName="bg-emerald-400"
              />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg"
            >
              I&apos;m a software developer who designs and builds reliable and efficient systems and the APIs that power them. I focus on correctness and clear, well-designed interfaces
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.45}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                nativeButton={false}
                className="rounded-md bg-emerald-400 px-7 py-6 text-base font-medium text-[#0a0e14] hover:bg-emerald-300"
                render={<a href="#experience" />}
              >
                View experience
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                className="rounded-md border-emerald-400/40 bg-transparent px-7 py-6 text-base font-mono text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
                render={<a href="#contact" />}
              >
                Contact me
              </Button>
            </motion.div>
          </div>
        </TypewriterSequence>

        {/* portrait column */}
        <div className="relative mx-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center lg:mx-0 lg:ml-auto">
          {DECK_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7, rotate: card.rotate * 2.2 }}
              animate={{ opacity: 1, scale: 1, rotate: card.rotate }}
              transition={{
                duration: 0.55,
                delay: i * DECK_STAGGER,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute inset-0 rounded-3xl ${card.className}`}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: IMAGE_DELAY,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-full w-full overflow-hidden rounded-3xl bg-[#0a0e14] shadow-2xl shadow-emerald-500/20"
          >
            <Image
              src="/home/home-img.png"
              alt="Portrait"
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
      </div>

      {/* scroll / explore indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 right-8 hidden h-24 w-24 items-center justify-center sm:flex"
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <path
              id="orbit-path"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="fill-emerald-400 text-[9px] font-mono uppercase tracking-widest">
            <textPath href="#orbit-path">{ORBIT_TEXT}</textPath>
          </text>
        </motion.svg>

        <motion.span
          className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-[#0a0e14] text-emerald-400"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
};
