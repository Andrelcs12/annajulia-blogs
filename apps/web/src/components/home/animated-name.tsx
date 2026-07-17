"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedBookIntro } from "./animated-book-intro";
import { BookOpen } from "lucide-react";

const NAME = "Julietta";
const editorialEase = [0.22, 1, 0.36, 1] as const;

function TitleOrnaments({
  side,
  reduceMotion,
}: {
  side: "left" | "right";
  reduceMotion: boolean | null;
}) {
  const isLeft = side === "left";
  const delay = reduceMotion ? 0 : isLeft ? 2.30 : 2.30 ;

  return (
    <motion.span
      aria-hidden="true"
      className={`hidden h-px w-[clamp(1.5rem,8vw,3.75rem)] min-[390px]:block sm:w-[clamp(5.625rem,12vw,11.25rem)] ${
        isLeft
          ? "origin-right bg-gradient-to-r from-transparent to-primary/40"
          : "origin-left bg-gradient-to-l from-transparent to-primary/40"
      }`}
      initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.62, delay, ease: editorialEase }}
    />
  );
}

export function AnimatedName() {
  const reduceMotion = useReducedMotion();
  const heroDelay = reduceMotion ? 0 : 1.15;
  const detailDelay = reduceMotion ? 0 : 1.52;

  return (
    <div className="relative mx-auto grid min-h-[clamp(17rem,34vw,34rem)] w-full max-w-none place-items-center overflow-hidden px-4 text-center">
      <AnimatedBookIntro reduceMotion={reduceMotion} />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex max-w-full items-center justify-center gap-[clamp(0.75rem,2vw,2.25rem)]">
          <TitleOrnaments side="left" reduceMotion={reduceMotion} />
          <motion.h1
            className="whitespace-nowrap font-serif text-[clamp(4.5rem,15vw,14rem)] font-normal leading-[1.05] tracking-[-0.06em] text-foreground"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.88, filter: "blur(6px)" }
            }
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              delay: heroDelay,
              duration: 0.78,
              ease: editorialEase,
            }}
          >
            {NAME}
          </motion.h1>
          <TitleOrnaments side="right" reduceMotion={reduceMotion} />
        </div>

        
        <motion.span
  aria-hidden="true"
  className="mt-4 inline-flex items-center justify-center text-primary/70 [perspective:400px] sm:mt-5"
  initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 2.45,
    delay: detailDelay,
    ease: editorialEase,
  }}
>
  <motion.span
    className="inline-flex origin-center"
    initial={
      reduceMotion
        ? false
        : {
            rotateX: 24,
            rotateY: -35,
            scaleX: 0.72,
          }
    }
    animate={{
      rotateX: 0,
      rotateY: 0,
      scaleX: 1,
    }}
    transition={{
      duration: 1.9,
      delay: detailDelay,
      ease: editorialEase,
    }}
  >
    <BookOpen
      className="size-8 stroke-[1.2] sm:size-9"
      aria-hidden="true"
    />
  </motion.span>
</motion.span>

        <motion.p
          className="order-first mb-4 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary sm:mb-6 sm:text-sm sm:tracking-[0.45em]"
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 1.95,
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
            delay: reduceMotion ? 0 : 1.78,
            duration: 0.6,
            ease: editorialEase,
          }}
        />
      </div>
    </div>
  );
}
