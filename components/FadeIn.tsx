"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Tag = "div" | "section" | "article" | "li";

const tagMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
} satisfies Record<Tag, unknown>;

export default function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
}) {
  const Component = tagMap[as];

  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
