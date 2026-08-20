"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerContainer({
  children,
  className = "",
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}