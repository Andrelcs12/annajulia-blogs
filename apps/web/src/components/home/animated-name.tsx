"use client";

import { motion, useReducedMotion } from "motion/react";

const NAME = "Julietta";

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.5 + i * 0.055,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function SideLines({ side }: { side: "left" | "right" }) {
  const shouldReduceMotion = useReducedMotion();
  const isLeft = side === "left";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2  -translate-y-1/2   ${
        isLeft ? "left-3 lg:left-0" : "right-3 lg:right-8"
      }`}
    >
      <div className="flex flex-col items-center gap-[3px] sm:gap-1 lg:gap-1.5">
        {Array.from({ length: 7 }).map((_, i) => {
          const distanceFromCenter = Math.abs(i - 3);
          const height = 40 - distanceFromCenter * 6;

          return (
            <motion.span
              key={i}
              className="block w-px origin-center bg-primary"
              style={{ height: `${height}px` }}
              initial={shouldReduceMotion ? false : { scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: [0, 1, 1, 0.35],
                opacity: [
                  0,
                  0.6 - distanceFromCenter * 0.08,
                  0.6 - distanceFromCenter * 0.08,
                  0.15,
                ],
              }}
              transition={{
                duration: 2,
                delay: 0.6 + Math.abs(i - 3) * 0.08,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function AnimatedName() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-none overflow-hidden px-4 py-14 text-center sm:py-20 lg:py-28">
      <SideLines side="left" />
      <SideLines side="right" />

      <motion.p
        className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-primary sm:mb-6 sm:text-sm sm:tracking-[0.45em]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        Poemas · Textos · Reflexões
      </motion.p>

      <h1 className="whitespace-nowrap font-serif text-[clamp(4.5rem,15vw,14rem)] font-normal leading-[1.05] tracking-[-0.06em] text-foreground">
        {shouldReduceMotion ? (
          NAME
        ) : (
          <>
            {NAME.split("").map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </>
        )}
      </h1>

      <motion.div
        className="mx-auto mt-6 h-px w-20 origin-center bg-primary sm:mt-9 sm:w-32"
        initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 1,
          delay: shouldReduceMotion ? 0 : 0.5 + NAME.length * 0.055 + 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}