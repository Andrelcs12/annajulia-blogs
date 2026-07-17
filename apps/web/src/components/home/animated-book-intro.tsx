"use client";

import { motion } from "motion/react";

const editorialEase = [0.22, 1, 0.36, 1] as const;

type AnimatedBookIntroProps = {
  reduceMotion: boolean | null;
};

const pageTurns = [
  { delay: 2.1, rotateY: -14 },
  { delay: 2.18, rotateY: -10 },
  { delay: 2.26, rotateY: -6 },
];

/** Decorative book used only as the opening gesture for the hero title. */
export function AnimatedBookIntro({ reduceMotion }: AnimatedBookIntroProps) {
  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid place-items-center"
      initial={{ opacity: 0, y: 28, scale: 0.76, rotateX: 10 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [28, 0, -4, -18],
        scale: [0.76, 1, 1.12, 1.2],
        rotateX: [10, 0, 0, 0],
      }}
      transition={{
        duration: 2.8,
        times: [0, 0.2, 0.7, 1],
        ease: editorialEase,
      }}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <div
        className="relative aspect-[1.48/1] w-[clamp(17rem,34vw,34rem)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute inset-0 rounded-[0.35rem_0.75rem_0.75rem_0.35rem] bg-[#4f142b] shadow-[0_1.4rem_2.8rem_rgba(62,18,35,0.2)]"
          animate={{ boxShadow: "0 2.2rem 4.5rem rgba(62,18,35,0.28)" }}
          transition={{ delay: 1.35, duration: 1.1, ease: editorialEase }}
          style={{ transform: "translateZ(-12px)" }}
        />

        <div
          className="absolute inset-[4%_3%] overflow-hidden rounded-[0.2rem_0.6rem_0.6rem_0.2rem] bg-[#f7eedc] shadow-[inset_0_0_0_1px_rgba(130,73,76,0.15)]"
          style={{ transform: "translateZ(2px)" }}
        >
          <div className="absolute inset-y-0 left-1/2 w-px bg-[#c58c91]/35" />
          <div className="absolute inset-y-[10%] left-[8%] w-[34%] border-y border-[#c58c91]/25" />
          <div className="absolute inset-y-[10%] right-[8%] w-[34%] border-y border-[#c58c91]/25" />
          <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/0 to-white/25" />
        </div>

        {pageTurns.map((page) => (
          <motion.div
            key={page.delay}
            className="absolute bottom-[4%] left-1/2 top-[4%] w-[47%] origin-left rounded-r-[0.55rem] border border-[#c58c91]/20 bg-[#fbf5e9] shadow-[0.25rem_0.2rem_0.45rem_rgba(91,45,48,0.08)]"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: [0, page.rotateY, 0] }}
            transition={{
              delay: page.delay,
              duration: 0.54,
              ease: editorialEase,
            }}
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              z: 8 + pageTurns.indexOf(page) * 3,
            }}
          />
        ))}

        <motion.div
          className="absolute inset-[4%_3%] grid place-items-center rounded-[0.2rem_0.6rem_0.6rem_0.2rem] text-[#54162e]"
          initial={{ opacity: 0, scale: 0.92, filter: "blur(7px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 2.5, duration: 0.78, ease: editorialEase }}
          style={{ z: 24 }}
        >
          <span className="font-serif text-[clamp(3.1rem,8vw,8.25rem)] leading-none tracking-[-0.07em]">
            Julietta
          </span>
        </motion.div>

        <motion.div
          className="absolute inset-0 origin-left rounded-r-[0.75rem] border border-[#9d5362] bg-gradient-to-br from-[#7e2941] via-[#651d36] to-[#481026] shadow-[inset_-0.1rem_0_0_rgba(255,255,255,0.16)]"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -158 }}
          transition={{ delay: 0.72, duration: 1.02, ease: editorialEase }}
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            z: 30,
          }}
        >
          <div className="absolute inset-[7%] grid place-items-center rounded-r-[0.55rem] border border-[#d69a9d]/40">
            <span className="font-serif text-4xl italic text-[#f8e9d7]/90 sm:text-5xl">
              Julietta
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
