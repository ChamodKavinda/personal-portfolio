"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "si"

type Dictionary = {
  nav: {
    home: string
    about: string
    projects: string
    skills: string
    resume: string
    contact: string
  }
  hero: {
    greeting: string
    description: string
    cta: string
    resume: string
  }
  about: {
    title: string
    subtitle: string
    greeting: string
    bio1: string
    bio2: string
    techStack: string
    experience: string
  }
  projects: {
    title: string
    subtitle: string
    filters: {
      all: string
      frontend: string
      backend: string
      fullstack: string
    }
    github: string
    demo: string
  }
  skills: {
    title: string
    subtitle: string
    frontend: string
    backend: string
    database: string
    other: string
  }
  resume: {
    title: string
    subtitle: string
    download: string
    experience: string
    education: string
    certifications: string
  }
  contact: {
    title: string
    subtitle: string
    getInTouch: string
    contactText: string
    sendMessage: string
    name: string
    email: string
    subject: string
    message: string
    send: string
    sending: string
    successTitle: string
    successMessage: string
    errorTitle: string
    errorMessage: string
    linkedin: string
    github: string
    location: string
  }
  footer: {
    copyright: string
  }
}

const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      description:
        "Passionate about creating elegant solutions to complex problems. I specialize in building modern web applications with cutting-edge technologies.",
      cta: "View My Work",
      resume: "Download Resume",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      greeting: "Hi there! I'm Chamod Kavinda",
      bio1: "I'm a passionate Full Stack Software Engineer with over 1 years of experience in building web applications. I specialize in JavaScript, TypeScript, React, and Node.js.",
      bio2: "I enjoy solving complex problems and turning ideas into reality through elegant code. My goal is to create software that not only works flawlessly but also provides an exceptional user experience.",
      techStack: "Tech Stack",
      experience: "My Academic  Journey",
    },
    projects: {
      title: "My Projects",
      subtitle: "Check out some of my recent work",
      filters: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        fullstack: "Full Stack",
      },
      github: "GitHub",
      demo: "Live Demo",
    },
    skills: {
      title: "My Skills",
      subtitle: "Technologies I work with",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      other: "Other",
    },
    resume: {
      title: "My Resume",
      subtitle: "My professional journey and qualifications",
      download: "Download CV",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's get in touch",
      getInTouch: "Get In Touch",
      contactText:
        "Feel free to reach out to me for any questions, opportunities, or just to say hello. I'll get back to you as soon as possible.",
      sendMessage: "Send Me a Message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage: "Thank you for your message. I'll get back to you soon!",
      errorTitle: "Error",
      errorMessage: "There was an error sending your message. Please try again.",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
    },
    footer: {
      copyright: "All rights reserved.",
    },
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      about: "මා ගැන",
      projects: "ව්‍යාපෘති",
      skills: "කුසලතා",
      resume: "ජීවදත්ත",
      contact: "සම්බන්ධ වන්න",
    },
    hero: {
      greeting: "ආයුබෝවන්, මම",
      description:
        "සංකීර්ණ ගැටලුවලට සුන්දර විසඳුම් නිර්මාණය කිරීම ගැන උනන්දුවක් දක්වමි. මම නවීනතම තාක්ෂණයන් සමඟ නවීන වෙබ් යෙදුම් නිර්මාණය කිරීම සඳහා විශේෂඥයෙක් වෙමි.",
      cta: "මගේ වැඩ බලන්න",
      resume: "ජීවදත්ත බාගන්න",
    },
    about: {
      title: "මා ගැන",
      subtitle: "මා ගැන වැඩිපුර දැනගන්න",
      greeting: "ආයුබෝවන්! මම චමෝද් කාවින්ද",
      bio1: "මම වෙබ් යෙදුම් නිර්මාණය කිරීමේ වසර 1කට වැඩි පළපුරුද්දක් සහිත උනන්දුවක් දක්වන පූර්ණ ස්ටැක් මෘදුකාංග ඉංජිනේරුවෙක්. මම Java,Spring boot,Angular,React,JavaScript,TypeScript සහ Node.js හි විශේෂඥයෙක් වෙමි.",
      bio2: "මම සංකීර්ණ ගැටලු විසඳීමට සහ අදහස් සුන්දර කේත හරහා යථාර්ථයක් බවට පත් කිරීමට කැමතියි. මගේ අරමුණ වන්නේ නිරවද්‍යව ක්‍රියා කරන පමණක් නොව විශිෂ්ට පරිශීලක අත්දැකීමක් ද ලබා දෙන මෘදුකාංග නිර්මාණය කිරීමයි.",
      techStack: "තාක්ෂණික ස්ටැක්",
      experience: "මගේ ගමන",
    },
    projects: {
      title: "මගේ ව්‍යාපෘති",
      subtitle: "මගේ මෑත කාලීන වැඩ කිහිපයක් පරීක්ෂා කරන්න",
      filters: {
        all: "සියල්ල",
        frontend: "ෆ්‍රන්ට්එන්ඩ්",
        backend: "බැක්එන්ඩ්",
        fullstack: "පූර්ණ ස්ටැක්",
      },
      github: "GitHub",
      demo: "සජීවී ආදර්ශනය",
    },
    skills: {
      title: "මගේ කුසලතා",
      subtitle: "මම වැඩ කරන තාක්ෂණයන්",
      frontend: "ෆ්‍රන්ට්එන්ඩ්",
      backend: "බැක්එන්ඩ්",
      database: "දත්ත සමුදාය",
      other: "වෙනත්",
    },
    resume: {
      title: "මගේ ජීවදත්ත",
      subtitle: "මගේ වෘත්තීය ගමන සහ සුදුසුකම්",
      download: "ජීවදත්ත බාගන්න",
      experience: "අත්දැකීම්",
      education: "අධ්‍යාපනය",
      certifications: "සහතික",
    },
    contact: {
      title: "මා අමතන්න",
      subtitle: "අපි සම්බන්ධ වෙමු",
      getInTouch: "සම්බන්ධ වන්න",
      contactText: "ඕනෑම ප්‍රශ්නයක්, අවස්ථාවක් හෝ හුදෙක් ආයුබෝවන් කීමට මා වෙත ළඟා වීමට නිදහස් වන්න. මම හැකි ඉක්මනින් ඔබට පිළිතුරු දෙන්නම්.",
      sendMessage: "මට පණිවිඩයක් යවන්න",
      name: "නම",
      email: "ඊමේල්",
      subject: "මාතෘකාව",
      message: "පණිවිඩය",
      send: "පණිවිඩය යවන්න",
      sending: "යවමින්...",
      successTitle: "පණිවිඩය යවා ඇත!",
      successMessage: "ඔබේ පණිවිඩයට ස්තූතියි. මම ඉක්මනින් ඔබට පිළිතුරු දෙන්නම්!",
      errorTitle: "දෝෂයකි",
      errorMessage: "ඔබේ පණිවිඩය යැවීමේදී දෝෂයක් ඇති විය. කරුණාකර නැවත උත්සාහ කරන්න.",
      linkedin: "ලින්ක්ඩ්ඉන්",
      github: "ගිට්හබ්",
      location: "ස්ථානය",
    },
    footer: {
      copyright: "සියලුම හිමිකම් ඇවිරිණි.",
    },
  },
}
  

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  dictionary: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const dictionary = dictionaries[language]

  return <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
