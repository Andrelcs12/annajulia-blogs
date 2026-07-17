"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedBookIntro } from "./animated-book-intro";

const NAME = "Julietta";
const editorialEase = [0.22, 1, 0.36, 1] as const;
const ornamentMarks = [
  { id: "upper-cap", top: "7%", width: "0.75rem", delay: 0 },
  { id: "upper", top: "27%", width: "1.25rem", delay: 0.06 },
  { id: "middle", top: "50%", width: "1.8rem", delay: 0.12 },
  { id: "lower", top: "73%", width: "1.1rem", delay: 0.18 },
  { id: "lower-cap", top: "93%", width: "0.6rem", delay: 0.24 },
] as const;

function SideLines({
  side,
  reduceMotion,
}: {
  side: "left" | "right";
  reduceMotion: boolean | null;
}) {
  const isLeft = side === "left";

  const baseDelay = reduceMotion ? 0 : 2.52;
  const horizontalOrigin = isLeft ? "left" : "right";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 h-28 w-12 -translate-y-1/2 sm:h-40 sm:w-16 ${
        isLeft ? "left-2 sm:left-4 lg:left-0" : "right-2 sm:right-4 lg:right-8"
      }`}
    >
      <motion.span
        className="absolute inset-y-[4%] left-1/2 w-px -translate-x-1/2 bg-primary/35"
        initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.72, delay: baseDelay, ease: editorialEase }}
      />

      {ornamentMarks.map((mark) => (
        <motion.span
          key={mark.id}
          className={`absolute h-px bg-primary/55 ${
            isLeft ? "left-1/2" : "right-1/2"
          }`}
          style={{
            top: mark.top,
            width: mark.width,
            transformOrigin: horizontalOrigin,
          }}
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.46,
            delay: baseDelay + 0.12 + mark.delay,
            ease: editorialEase,
          }}
        />
      ))}

      <motion.span
        className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-primary/70 bg-background"
        initial={
          reduceMotion
            ? false
            : { opacity: 0, scale: 0, rotate: -45, x: "-50%", y: "-50%" }
        }
        animate={{ opacity: 1, scale: 1, rotate: 45, x: "-50%", y: "-50%" }}
        transition={{
          duration: 0.46,
          delay: baseDelay + 0.28,
          ease: editorialEase,
        }}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        initial={
          reduceMotion ? false : { opacity: 0, scale: 0, x: "-50%", y: "-50%" }
        }
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        transition={{
          duration: 0.3,
          delay: baseDelay + 0.42,
          ease: editorialEase,
        }}
      />
    </div>
  );
}

export function AnimatedName() {
  const reduceMotion = useReducedMotion();
  const heroDelay = reduceMotion ? 0 : 2.15;

  return (
    <div className="relative mx-auto grid min-h-[clamp(17rem,34vw,34rem)] w-full max-w-none place-items-center overflow-hidden px-4 text-center">
      <AnimatedBookIntro reduceMotion={reduceMotion} />
      <SideLines side="left" reduceMotion={reduceMotion} />
      <SideLines side="right" reduceMotion={reduceMotion} />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="whitespace-nowrap font-serif text-[clamp(4.5rem,15vw,14rem)] font-normal leading-[1.05] tracking-[-0.06em] text-foreground"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.88, filter: "blur(6px)" }
          }
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: heroDelay, duration: 0.78, ease: editorialEase }}
        >
          {NAME}
        </motion.h1>

        <motion.p
          className="order-first mb-4 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary sm:mb-6 sm:text-sm sm:tracking-[0.45em]"
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 2.58,
            duration: 0.6,
            ease: editorialEase,
          }}
        >
          Poemas · Textos · Reflexões
        </motion.p>

        <motion.div
          className="mt-6 h-px w-20 origin-center bg-primary sm:mt-9 sm:w-32"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 2.78,
            duration: 0.7,
            ease: editorialEase,
          }}
        />
      </div>
    </div>
  );
}
