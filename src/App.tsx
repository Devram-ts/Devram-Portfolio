import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Briefcase,
  BarChart3,
  ChevronDown,
  ExternalLink,
  Sparkles,
  Database,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const neonText = "drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]";
const neonBorder =
  "border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.15)]";
const glass = "backdrop-blur-xl bg-slate-950/55";
const profileImage = "/profile.jpeg";
const projectImage = "/dashboard-preview.jpg";

const skills = {
  "Business Analysis": [
    "Requirement Gathering",
    "User Stories",
    "BRD / SRS",
    "Process Mapping",
    "Stakeholder Communication",
    "UAT Support",
  ],
  "Analytics & Reporting": [
    "Power BI",
    "Excel",
    "Dashboard Design",
    "KPI Reporting",
    "Data Validation",
    "Data Analysis",
  ],
  Tools: ["Word", "PowerPoint", "Figma", "Draw.io", "Jira", "Postman"],
  "Technical Exposure": [
    "SQL",
    "Java",
    "JavaScript",
    "MySQL",
    "MongoDB",
    "React",
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

const experienceBullets = [
  "Participated in client requirement-gathering sessions to understand business needs and document functional requirements.",
  "Assisted in preparing user stories, BRDs, workflow diagrams, meeting notes, and structured project documentation.",
  "Supported UAT activities by preparing test scenarios, validating fixes, and coordinating issue follow-ups.",
  "Collaborated with developers, QA teams, and stakeholders to clarify requirements and improve delivery alignment.",
];

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 17) % 100}%`,
        duration: 6 + (i % 5),
        delay: (i % 7) * 0.35,
        size: 2 + (i % 4),
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
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.6, 1],
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
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>
      ) : null}
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
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        >
          <BarChart3 className="h-10 w-10 text-cyan-300" />
        </motion.div>
        <motion.h1
          className={`text-3xl font-bold tracking-[0.25em] text-cyan-200 md:text-4xl ${neonText}`}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          LOADING PORTFOLIO
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
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {label}
        </p>
        <p className="text-sm text-slate-200">{value}</p>
      </div>
    </div>
  );
}

function HeroPhotoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto max-w-md"
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_65%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/35 bg-slate-950/70 p-3 shadow-[0_0_35px_rgba(34,211,238,0.22)]">
        <div className="rounded-[1.65rem] border border-cyan-400/25 bg-slate-900/80 p-3">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[1.35rem]"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="h-[430px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.55),transparent_45%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/55 p-4 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Professional Profile
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Business analysis, reporting, and dashboard-focused portfolio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectPreviewCard() {
  return (
    <Card className={`overflow-hidden rounded-[2rem] ${glass} ${neonBorder}`}>
      <CardContent className="relative p-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_38%)]" />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
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

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
            <motion.img
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 0.72, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              src={projectImage}
              alt="Dashboard preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(2,6,23,0.22),rgba(2,6,23,0.88)_72%)] lg:bg-[linear-gradient(to_left,rgba(2,6,23,0.22),rgba(2,6,23,0.85)_68%)]" />
            <div className="absolute inset-0 bg-cyan-400/5" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cyan-300/20 bg-slate-950/55 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Preview
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Add a screenshot export from Power BI here for a polished visual teaser.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BlueNeonPortfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_22%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,0.96))]" />
        <ParticleField />

        <header className="relative z-10 border-b border-cyan-400/10 bg-slate-950/55 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                Portfolio
              </p>
              <h1 className={`text-xl font-bold text-white ${neonText}`}>
                Devram
              </h1>
            </div>
            <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-cyan-300">
                About
              </a>
              <a href="#experience" className="transition hover:text-cyan-300">
                Experience
              </a>
              <a href="#projects" className="transition hover:text-cyan-300">
                Projects
              </a>
              <a href="#skills" className="transition hover:text-cyan-300">
                Skills
              </a>
              <a href="#contact" className="transition hover:text-cyan-300">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section className="relative z-10 mx-auto grid min-h-[90vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
            >
              <Sparkles className="h-4 w-4" />
              Business Analyst Intern • Aspiring SAP Analytics Professional
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl ${neonText}`}
            >
              Blue Neon <span className="text-cyan-300">Analytics</span>{" "}
              Portfolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              I translate business needs into structured requirements,
              reporting ideas, and clear analytical outputs. This portfolio
              highlights business analysis, dashboards, data storytelling, and
              my growing focus on SAP Analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button className="rounded-2xl border border-cyan-300/40 bg-cyan-300/15 px-6 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:bg-cyan-300/20">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl border-cyan-400/30 bg-slate-950/20 text-cyan-200 hover:bg-slate-900/80"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              <ContactItem icon={Mail} label="Email" value="yourname@email.com" />
              <ContactItem
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/yourname"
              />
              <ContactItem
                icon={Github}
                label="Portfolio / GitHub"
                value="github.com/yourname"
              />
            </motion.div>
          </div>

          <HeroPhotoCard />
        </section>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <section id="about" className="py-16">
          <SectionTitle
            eyebrow="About"
            title="Profile"
            subtitle="A polished portfolio layout for internship applications, analytics showcases, and recruiter-friendly storytelling."
          />

          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <Card className={`${glass} ${neonBorder} rounded-[2rem]`}>
              <CardContent className="p-8">
                <p className="text-lg leading-8 text-slate-300">
                  I am an IT undergraduate with hands-on exposure to business
                  analysis activities such as requirement gathering, process
                  documentation, workflow analysis, and testing support. I enjoy
                  converting raw information into clear structures, visual
                  insights, and practical deliverables that support project
                  teams and business decision-making.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  My current direction is centered on analytics, dashboarding,
                  and enterprise reporting, with a growing interest in SAP
                  Analytics and data-driven solutions that create measurable
                  business value.
                </p>
              </CardContent>
            </Card>

            <Card className={`${glass} ${neonBorder} rounded-[2rem]`}>
              <CardContent className="grid gap-4 p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Business-Focused</p>
                    <p className="text-sm leading-7 text-slate-300">
                      Requirements, documentation, stakeholder coordination, and
                      process clarity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Analytics-Oriented</p>
                    <p className="text-sm leading-7 text-slate-300">
                      Dashboards, KPI reporting, insights, and portfolio-ready
                      case studies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Future Direction</p>
                    <p className="text-sm leading-7 text-slate-300">
                      SAP Analytics, data modelling, reporting workflows, and
                      enterprise solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="experience" className="py-16">
          <SectionTitle
            eyebrow="Experience"
            title="Internship & Practical Exposure"
            subtitle="Replace the placeholders below with your actual company name, dates, and responsibilities."
          />

          <Card className={`${glass} ${neonBorder} rounded-[2rem]`}>
            <CardContent className="p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Business Analyst Intern
                  </h3>
                  <p className="mt-2 text-cyan-300">[Current Company Name]</p>
                </div>
                <Badge className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/10">
                  [Month Year - Present]
                </Badge>
              </div>
              <div className="mt-8 grid gap-4">
                {experienceBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-cyan-400/15 bg-slate-900/45 p-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="py-16">
          <SectionTitle
            eyebrow="Projects"
            title="Portfolio Highlight"
            subtitle="A clean preview card with a short summary, bullet points, and a fading visual teaser."
          />

          <ProjectPreviewCard />
        </section>

        <section id="skills" className="py-16">
          <SectionTitle
            eyebrow="Skills"
            title="Core Capabilities"
            subtitle="A recruiter-friendly split between business analysis, reporting, and technical exposure."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {Object.entries(skills).map(([group, items], idx) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Card className={`h-full rounded-[2rem] ${glass} ${neonBorder}`}>
                  <CardContent className="p-6">
                    <h3 className="mb-5 text-xl font-semibold text-white">
                      {group}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Badge
                          key={item}
                          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-100 hover:bg-cyan-400/10"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionTitle
            eyebrow="Education"
            title="Education"
            subtitle="Academic background relevant to IT, analytics, and business systems."
          />

          <Card className={`${glass} ${neonBorder} rounded-[2rem]`}>
            <CardContent className="p-8">
              <div className="space-y-5">
                <div className="rounded-2xl border border-cyan-400/15 bg-slate-900/45 p-4">
                  <p className="font-semibold text-white">
                    BSc (Hons) in Information Technology
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Sri Lanka Institute of Information Technology (SLIIT) • Year 4
                  </p>
                </div>
                <div className="rounded-2xl border border-cyan-400/15 bg-slate-900/45 p-4">
                  <p className="font-semibold text-white">G.C.E. Advanced Level</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Royal College, Colombo 07 • Results: 2C, 1S
                  </p>
                </div>
                <div className="rounded-2xl border border-cyan-400/15 bg-slate-900/45 p-4">
                  <p className="font-semibold text-white">G.C.E. Ordinary Level</p>
                  <p className="mt-1 text-sm text-slate-300">
                    St. Benedict's College, Colombo 13 • Results: 9A
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

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
                    Let’s build something insightful.
                  </h2>
                  <p className="mt-4 max-w-xl leading-8 text-slate-300">
                    This portfolio is ready to be customized with your real links,
                    project screenshots, resume download, and live dashboard case
                    studies.
                  </p>
                </div>
                <div className="grid gap-4">
                  <ContactItem icon={Mail} label="Email" value="yourname@email.com" />
                  <ContactItem icon={Phone} label="Phone" value="+94 XX XXX XXXX" />
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
