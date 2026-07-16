"use client";

import { RotateCcwIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AnimatedName() {
  const [animationRun, setAnimationRun] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-5xl px-3 py-10 sm:px-10 sm:py-14">
      <motion.svg
        key={`frame-${animationRun}`}
        aria-hidden="true"
        viewBox="0 0 1000 360"
        className="pointer-events-none absolute inset-0 size-full overflow-visible"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.rect
          x="22"
          y="22"
          width="956"
          height="316"
          rx="158"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.4"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {!shouldReduceMotion && (
          <motion.rect
            x="38"
            y="38"
            width="924"
            height="284"
            rx="142"
            fill="none"
            stroke="var(--secondary-foreground)"
            strokeWidth="1"
            strokeDasharray="4 18"
            animate={{ strokeDashoffset: [0, -176] }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            opacity="0.28"
          />
        )}
      </motion.svg>

      <motion.div
        key={`name-${animationRun}`}
        className="relative z-10 text-center"
        initial={
          shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-muted-foreground sm:text-xs">
          poemas · textos · reflexões
        </p>
        <h1 className="font-serif text-[clamp(6rem,19vw,13rem)] font-normal leading-[0.82] tracking-[-0.075em] text-foreground">
          Anna
        </h1>
        <motion.div
          className="mx-auto mt-7 h-px w-24 bg-primary"
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
        />
      </motion.div>

      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        onClick={() => setAnimationRun((current) => current + 1)}
        className="absolute bottom-0 right-3 z-20 text-muted-foreground sm:right-10"
        aria-label="Repetir animação do nome"
        title="Repetir animação"
      >
        <RotateCcwIcon className="size-4" />
      </Button>
    </div>
  );
}
