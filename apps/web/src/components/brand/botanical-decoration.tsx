"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type BotanicalDecorationProps = {
  className?: string;
  delay?: number;
  parallax?: boolean;
  variant?: "rose" | "sprig" | "corner";
};

export function BotanicalDecoration({
  className,
  delay = 0,
  parallax = false,
  variant = "rose",
}: BotanicalDecorationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none select-none", className)}
      style={parallax && !shouldReduceMotion ? { y } : undefined}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut", delay }}
      >
        {variant === "sprig" ? (
          <SprigIllustration />
        ) : variant === "corner" ? (
          <CornerIllustration />
        ) : (
          <RoseIllustration />
        )}
      </motion.div>
    </motion.div>
  );
}

function RoseIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 190 420"
      className="h-full w-full"
      fill="none"
    >
      <path
        d="M96 394C70 318 96 253 74 180C62 139 64 97 91 37"
        className="stroke-secondary/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M76 216C43 205 25 179 22 143C57 151 77 174 76 216Z"
        className="fill-secondary/10 stroke-secondary/35"
        strokeWidth="1.5"
      />
      <path
        d="M91 284C126 263 146 231 145 192C111 207 90 236 91 284Z"
        className="fill-secondary/10 stroke-secondary/35"
        strokeWidth="1.5"
      />
      <path
        d="M74 171C40 153 27 121 37 82C70 101 83 128 74 171Z"
        className="fill-accent/10 stroke-accent/35"
        strokeWidth="1.5"
      />
      <g className="fill-primary/15 stroke-primary/50" strokeWidth="1.6">
        <path d="M92 31C77 31 66 43 66 58C66 74 80 86 96 83C110 80 121 67 118 52C115 39 105 31 92 31Z" />
        <path d="M89 45C74 39 58 45 53 59C48 74 58 88 73 91C86 94 100 85 103 72C106 60 100 49 89 45Z" />
        <path d="M100 45C113 36 130 38 138 50C146 63 140 80 126 86C113 91 98 86 92 74C86 63 90 52 100 45Z" />
        <path d="M92 58C83 59 77 67 78 76C80 87 91 94 101 89C110 85 114 74 109 65C106 59 100 57 92 58Z" />
      </g>
      <path
        d="M118 121C133 112 151 114 163 127C149 139 130 139 118 121Z"
        className="fill-primary/10 stroke-primary/35"
        strokeWidth="1.5"
      />
      <path
        d="M46 318C31 312 21 299 18 281C37 283 50 295 46 318Z"
        className="fill-accent/10 stroke-accent/30"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SprigIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 150 330"
      className="h-full w-full"
      fill="none"
    >
      <path
        d="M82 305C74 241 94 193 83 139C76 105 62 74 75 24"
        className="stroke-secondary/35"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M77 88C48 76 34 53 36 24C64 34 80 56 77 88Z"
        className="fill-secondary/10 stroke-secondary/30"
        strokeWidth="1.4"
      />
      <path
        d="M86 150C111 135 125 112 124 82C98 94 84 117 86 150Z"
        className="fill-secondary/10 stroke-secondary/30"
        strokeWidth="1.4"
      />
      <path
        d="M80 221C54 210 38 188 38 159C65 168 82 189 80 221Z"
        className="fill-accent/10 stroke-accent/30"
        strokeWidth="1.4"
      />
      <g className="fill-primary/15 stroke-primary/45" strokeWidth="1.3">
        <path d="M72 22C62 20 54 27 53 37C52 48 61 56 72 54C81 52 87 43 84 34C82 27 78 23 72 22Z" />
        <path d="M96 189C86 188 79 195 78 205C78 215 87 222 97 219C106 216 111 207 108 199C106 193 102 190 96 189Z" />
      </g>
    </svg>
  );
}

function CornerIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 150 150"
      className="h-full w-full"
      fill="none"
    >
      <path
        d="M140 19C101 31 71 54 49 89C39 104 28 116 11 125"
        className="stroke-secondary/35"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M91 45C94 24 108 11 129 8C126 31 113 44 91 45Z"
        className="fill-secondary/10 stroke-secondary/30"
        strokeWidth="1.3"
      />
      <path
        d="M55 85C33 82 19 69 14 48C37 50 52 62 55 85Z"
        className="fill-accent/10 stroke-accent/30"
        strokeWidth="1.3"
      />
      <path
        d="M72 70C61 67 52 74 51 85C50 96 60 104 71 101C80 99 86 89 83 80C81 74 78 71 72 70Z"
        className="fill-primary/15 stroke-primary/45"
        strokeWidth="1.3"
      />
    </svg>
  );
}
