"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timeline, TimelineItem } from "./timeline"

export default function About() {
  const { dictionary } = useLanguage()

  const techStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Express",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
  ]

  const timelineItems = [
    
    {
      year: "2021 - 2025",
      title: "Bachelor of Information Communication Technology (Hons) ",
      company: "University of Vavuniya, Sri Lanka  "
    },
    {
      year: "2021",
      title: "Diploma in Comprehensive Master Java Developer Institute of  Java and Software Engineering",
      company: "IJSE"
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.about.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{dictionary.about.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-md opacity-75"></div>
              <Card className="relative rounded-2xl overflow-hidden border-0">
                <CardContent className="p-0">
                  <Image
                    src="/me.jpg?height=600&width=600"
                    alt="Chamod Kavinda"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">{dictionary.about.greeting}</h3>
            <p className="text-muted-foreground">{dictionary.about.bio1}</p>
            <p className="text-muted-foreground">{dictionary.about.bio2}</p>

            <div>
              <h4 className="text-lg font-semibold mb-3">{dictionary.about.techStack}</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">{dictionary.about.experience}</h3>
          <Timeline>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                company={item.company}
              />
            ))}
          </Timeline>
        </motion.div>
      </div>
    </section>
  )
}
