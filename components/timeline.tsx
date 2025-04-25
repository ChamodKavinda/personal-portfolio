"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TimelineProps {
  children: ReactNode
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
      <div className="space-y-12">{children}</div>
    </div>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  company: string
}

export function TimelineItem({ year, title, company }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-between"
    >
      <div className="hidden md:block w-5/12 pr-8 text-right">
        <h4 className="font-semibold text-primary">{year}</h4>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>

      <div className="md:w-5/12 md:pl-8 w-full pl-10">
        <div className="md:hidden font-semibold text-primary mb-1">{year}</div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-muted-foreground font-medium">{company}</p>
      </div>
    </motion.div>
  )
}
