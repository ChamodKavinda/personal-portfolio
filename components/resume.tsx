"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Resume() {
  const { dictionary } = useLanguage()

  const experience = [
    {
      title: "Associate Image Processor",
      company: "Orel IT",
      period: "2019-2020",
      description:
        "Ensure the accuracy and consistency of the annotated data, which is crucial for training machine learning models.Responsible for tagging, labeling, and categorizing image or video data according to project specifications.",
    },
  ]

  const education = [
    {
      degree: "Diploma in Comprehensive Master Java Developer",
      institution: "Institute of Java and Software Engineering",
      period: "2021 - 2022",
      description:
       "Intensive 32-week program focused on modern web technologies and best practices."
    },
    {
      degree: "Bachelor of Information Communication Technology (Hons)",
      institution: "University of Vavuniya,Sri Lanka ",
      period: "2021-2025",
      description: "Graduated with honors, specialized in software engineering. Completed thesis on scalable web architectures."
    },
  ]

  const certifications = [
    {
      name: "Java Programming",
      issuer: "Great Learning",
      year: "2024",
    },
    {
      name: "Java(Basic)",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      name: "Angular(Basic)",
      issuer: "Sololearn",
      year: "2024",
    },
  ]

  return (
    <section id="resume" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.resume.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">{dictionary.resume.subtitle}</p>
          <Button size="lg" className="mt-6" asChild>
          <a 
              href="/L.K.C Kavinda-intern-software_engineer.pdf"  
              download="L.K.C Kavinda-intern-software_engineer.pdf"  
              target="_blank"  
              rel="noopener noreferrer"
            >
              {dictionary.resume.download} <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{dictionary.resume.experience}</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">{dictionary.resume.education}</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between flex-wrap gap-2 mb-2">
                        <h4 className="text-lg font-bold">{item.degree}</h4>
                        <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-3">{item.institution}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">{dictionary.resume.certifications}</h3>
              </div>

              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {certifications.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <h4 className="font-bold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.issuer}</p>
                        </div>
                        <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded-full">
                          {item.year}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
