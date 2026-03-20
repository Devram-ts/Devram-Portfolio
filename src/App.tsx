import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ChevronDown,
  ExternalLink,
  Sparkles,
  Instagram,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpeg";
import projectImage from "@/assets/dashboard-preview.jpg";

const neonText = "drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]";
const neonBorder =
  "border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.15)]";
const glass = "backdrop-blur-xl bg-slate-950/55";

const skillGroups = {
  "Business Analysis": [
    "Requirement Gathering",
    "User Stories",
    "BRD / SRS",
    "Process Mapping",
    "Stakeholder Communication",
    "UAT Support",
  ],
  Technical: ["SQL", "Java", "JavaScript", "MySQL", "MongoDB", "React"],
  Tools: [
    "Power BI",
    "Excel",
    "Word",
    "PowerPoint",
    "Figma",
    "Draw.io",
    "Jira",
    "Postman",
  ],
};

const project = {
  title: "Sales Performance Dashboard",
  stack: "Power BI • Excel • Data Visualization",
  status: "Coming Soon",
  summary:
    "I am currently building a sales performance dashboard in Power BI to analyze revenue trends, regional performance, and key business indicators through a clean and decision-friendly reporting experience.",
  bullets: [
    "Preparing and cleaning the dataset in Excel before visualization.",
    "Designing KPI cards, trend analysis views, and interactive filters.",
    "Structuring the case study to highlight insights, business impact, and recommendations.",
  ],
};

const experienceSummary =
  "During my internship as a Business Analyst Intern, I participated in requirement-gathering discussions to better understand business needs and translate them into clear functional expectations. I contributed to preparing user stories, BRDs, workflow diagrams, meeting notes, and other structured documentation that supported project communication and delivery. I was also involved in UAT-related activities, including preparing test scenarios, validating fixes, and following up on reported issues to support smoother implementation. Throughout the internship, I collaborated with developers, QA teams, and stakeholders, which strengthened my ability to communicate requirements clearly, support cross-functional coordination, and contribute to more aligned project outcomes.";

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 19) % 100}%`,
        duration: 7 + (i % 5),
        delay: (i % 6) * 0.35,
        size: 2 + (i % 3),
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-300/70"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.12, 0.65, 0.12],
            scale: [1, 1.45, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MagicCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setEnabled(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => setEnabled(event.matches);
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };
    const handleLeave = () => setIsVisible(false);
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest("a, button")));
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mouseover", handleOver);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl md:block"
        animate={{
          x: position.x - 48,
          y: position.y - 48,
          scale: isHovering ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.7 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[81] hidden h-9 w-9 rounded-full border border-cyan-300/70 shadow-[0_0_28px_rgba(34,211,238,0.35)] md:block"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isHovering ? 1.45 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.45 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[82] hidden h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.95)] md:block"
        animate={{ x: position.x - 5, y: position.y - 5, opacity: isVisible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 520, damping: 28, mass: 0.15 }}
      />
    </>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold text-white md:text-4xl ${neonText}`}>
        {title}
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <ParticleField />

      <div className="relative z-10 text-center">
        <motion.div
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0 0 14px rgba(103,232,249,0.95))",
            }}
          >
            <Sparkles className="h-11 w-11 text-cyan-200" />
          </motion.div>
        </motion.div>

        <motion.h1
          className={`text-3xl font-bold tracking-[0.25em] text-cyan-200 md:text-4xl ${neonText}`}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          LOADING...
        </motion.h1>

        <div className="mx-auto mt-6 h-1.5 w-64 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-4">
      <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
        <p className="text-sm text-slate-200">{value}</p>
      </div>
    </div>
  );
}

function LeftSidebar({
  activeSection,
}: {
  activeSection: "home" | "works" | "contact";
}) {
  const navItems = [
    { label: "HOME", href: "#top", key: "home" as const },
    { label: "WORKS", href: "#projects", key: "works" as const },
    { label: "CONTACT", href: "#contact", key: "contact" as const },
  ];

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[220px] border-r border-cyan-400/10 bg-slate-950/35 px-10 py-8 backdrop-blur-xl xl:flex xl:flex-col xl:justify-between">
      <div>
        <div className="mb-12 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_22px_rgba(34,211,238,0.22)]" />
        </div>

        <nav className="space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative block w-fit text-[1.05rem] tracking-[0.22em] transition ${
                  isActive ? "text-white" : "text-slate-500 hover:text-cyan-300"
                }`}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-2 left-0 h-px w-[118px] bg-white/85"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </a>
            );
          })}
        </nav>

        <div className="mt-14 space-y-5 text-slate-200">
          <a href="https://linkedin.com" className="block transition hover:text-cyan-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" className="block transition hover:text-cyan-300">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://github.com" className="block transition hover:text-cyan-300">
            <Github className="h-6 w-6" />
          </a>
          <a
            href="mailto:devramsaparamadu@gmail.com"
            className="block transition hover:text-cyan-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <p className="text-sm text-slate-400">© Devram Saparamadu</p>
    </aside>
  );
}

function HeroProfileFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto mb-8 h-[220px] w-[220px] md:h-[280px] md:w-[280px]"
    >
      <motion.div
        className="absolute inset-[-10px] rounded-full bg-[conic-gradient(from_180deg,rgba(34,211,238,0.06),rgba(56,189,248,0.32),rgba(34,211,238,0.06))] blur-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[-18px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_65%)] blur-2xl" />
      <div className="relative flex h-full w-full items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/75 p-3 shadow-[0_0_45px_rgba(34,211,238,0.2)]">
        <div className="h-full w-full overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900/70 shadow-[inset_0_0_24px_rgba(34,211,238,0.12)]">
          <img
            src={profileImage}
            alt="Profile"
            className="h-full w-full object-cover object-[center_14%] scale-[1.03]"
          />
        </div>
      </div>
      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-200/20"
        animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.035, 1] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function ProjectPreviewCard() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      className={`overflow-hidden rounded-[2rem] ${glass} ${neonBorder}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardContent className="relative p-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_38%)]" />

        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10 p-8 md:p-10">
            <div className="mb-5 flex items-center justify-between gap-4">
              <Badge className="rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/10">
                {project.status}
              </Badge>
              <ExternalLink className="h-4 w-4 text-cyan-300" />
            </div>

            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-cyan-300">{project.stack}</p>
            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              {project.summary}
            </p>

            <ul className="mt-7 space-y-3 text-sm leading-7 text-slate-200">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-xl border border-cyan-400/10 bg-slate-900/40 p-4"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 p-5 md:p-6">
            <div className="group relative h-[320px] overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/70 shadow-[0_0_25px_rgba(34,211,238,0.12)] lg:h-full lg:min-h-[420px]">
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isHovering ? 1.03 : 1,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.img
  src={projectImage}
  alt="Dashboard preview"
  className="absolute inset-0 h-full w-full object-cover"
  animate={{
    scale: [1.0, 1.05, 1.02, 1.06, 1.0],
    x: ["0%", "-6%", "5%", "-4%", "0%"],
    y: ["0%", "-5%", "4%", "-3%", "0%"],
    rotate: [0, 0.15, -0.15, 0.1, 0],
  }}
  transition={{
    duration: 26,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_65%)]"
                  animate={{
                    opacity: [0.45, 0.75, 0.55, 0.8, 0.45],
                    scale: [1, 1.08, 1.03, 1.1, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute inset-y-0 -left-1/3 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] blur-xl"
                  animate={{ x: ["0%", "260%"] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1.2,
                  }}
                />
              </motion.div>

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.78),rgba(2,6,23,0.2)_45%,rgba(2,6,23,0.04))]" />
              <div className="absolute inset-0 rounded-[1.75rem] border border-cyan-300/10 shadow-[inset_0_0_30px_rgba(34,211,238,0.08)]" />

              <motion.div
                className="absolute bottom-4 left-4 right-4 rounded-2xl border border-cyan-300/20 bg-slate-950/55 p-4 backdrop-blur-md"
                animate={{
                  y: isHovering ? -4 : 0,
                  boxShadow: isHovering
                    ? "0 0 28px rgba(34,211,238,0.16)"
                    : "0 0 0px rgba(34,211,238,0)",
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                
              </motion.div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SkillsShowcase() {
  return (
    <section id="skills" className="py-20">
      <SectionTitle
        eyebrow="Skills"
        title="Core Capabilities"
        
      />

      <div className="grid gap-12 xl:grid-cols-3">
        {Object.entries(skillGroups).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-8 text-xl font-semibold text-white md:text-2xl">
              {group}
            </h3>
            <div className="flex flex-wrap gap-4">
              {items.map((item) => (
                <Badge
                  key={item}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-base text-cyan-100 hover:bg-cyan-400/10"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BlueNeonPortfolio() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<"home" | "works" | "contact">(
    "home"
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projectsTop = (document.getElementById("projects")?.offsetTop ?? 0) - 160;
      const contactTop = (document.getElementById("contact")?.offsetTop ?? 0) - 220;
      const scrollPosition = window.scrollY + window.innerHeight * 0.32;

      if (scrollPosition >= contactTop) {
        setActiveSection("contact");
      } else if (scrollPosition >= projectsTop) {
        setActiveSection("works");
      } else {
        setActiveSection("home");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <MagicCursor />
      <LeftSidebar activeSection={activeSection} />

      <div className="relative min-h-screen overflow-hidden xl:pl-[220px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_26%),radial-gradient(circle_at_82%_20%,rgba(59,130,246,0.14),transparent_20%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,0.97))]" />
        <ParticleField />

        <header className="relative z-20 px-6 py-5 md:px-10 xl:hidden">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Saparamadu</p>
            <h1 className={`text-lg font-bold text-white ${neonText}`}>Devram</h1>
          </div>
        </header>

        <section className="relative z-10 grid min-h-screen gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.22fr_0.78fr] lg:items-center lg:gap-12 xl:px-14 xl:py-0">
          <div className="flex flex-col justify-center lg:min-h-screen">

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`max-w-[820px] font-extralight uppercase leading-[0.9] tracking-[0.08em] text-white text-[2.7rem] md:text-[4.2rem] xl:text-[5.2rem] ${neonText}`}
            >
              Devram
              <br />
              Saparamadu
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.16)]"
            >
              <Sparkles className="h-4 w-4" />
              Business Analyst | IT Undergraduate 
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-16 max-w-[25rem] text-[1.2rem] leading-[1.85] tracking-[0.02em] text-slate-300 md:text-[1.65rem]"
            >
              Driven by clarity, creativity, and meaningful user-focused work,
              <br />
              with eagerness to contribute, learn, and grow in the dynamic world of IT.
              
            </motion.p>
          </div>

          <div className="flex flex-col justify-center lg:min-h-screen lg:pt-12 xl:pr-10">
            <HeroProfileFrame />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mx-auto w-full max-w-[22rem]"
            >
              <div className="mb-4">
                <h3 className="text-[1.8rem] font-light uppercase tracking-[0.05em] text-white md:text-[2.6rem]">
                  About Me
                </h3>
                <div className="mt-3 h-px w-full bg-white/25" />
              </div>

              <div className="max-w-[20rem] space-y-3 text-base leading-[1.9] text-slate-300 md:text-[1.1rem] md:leading-[2]">
                <p>
                  I am currently in my final year of BSc (Hons) in Information Technology at SLIIT University with hands-on exposure to business analysis activities such as requirement gathering, process documentation, workflow analysis, and testing support.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-8 xl:ml-[220px] xl:px-14">
        <section id="experience" className="py-16">
          <SectionTitle
            eyebrow="Experience"
            title="Internship & Practical Exposure"
          />

          <Card className={`${glass} ${neonBorder} rounded-[2rem]`}>
            <CardContent className="p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Business Analyst Intern</h3>
                  <p className="mt-2 text-cyan-300">Soft Gallery (Pvt) Ltd</p>
                </div>
                <Badge className="w-fit text-xl rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-4 text-cyan-200 hover:bg-cyan-400/10">
                  September 2025 - Present
                </Badge>
              </div>
              <div className="mt-8 rounded-2xl border border-cyan-400/15 bg-slate-900/45 p-6 md:p-7">
  <p className="leading-8 text-slate-200 md:text-[1.02rem]">
    {experienceSummary}
  </p>
</div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="py-16">
          <SectionTitle
            eyebrow="Projects"
            title="Portfolio Highlight"
            
          />

          <ProjectPreviewCard />
        </section>

        <SkillsShowcase />

        <section id="contact" className="py-16">
          <Card className={`overflow-hidden rounded-[2rem] ${glass} ${neonBorder}`}>
            <CardContent className="relative p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%)]" />
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
                    Contact
                  </p>
                  <h2 className={`text-3xl font-bold text-white md:text-4xl ${neonText}`}>
                    Let’s Connect.
                  </h2>
                </div>
                <div className="grid gap-4">
                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value="devramsaparamadu@gmail.com"
                  />
                  <ContactItem icon={Phone} label="Phone" value="+94 71 9244 492" />
                  <ContactItem icon={MapPin} label="Location" value="Sri Lanka" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <a
        href="#top"
        className="fixed bottom-6 right-6 rounded-full border border-cyan-400/30 bg-slate-950/80 p-3 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.3)] backdrop-blur-xl transition hover:scale-105"
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </a>
    </div>
  );
}
