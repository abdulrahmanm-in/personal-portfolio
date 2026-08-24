"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  ShieldCheck,
  Share2,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";

import { useForm, ValidationError } from "@formspree/react";

import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiLinux,
  SiMongodb,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytest,
  SiSqlalchemy,
} from "react-icons/si";

import type { IconType } from "react-icons";
import { useState } from "react";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    name: "FocusSprint",
    description:
      "Full-stack task management platform with FastAPI backend, Angular frontend, PostgreSQL database, and 27+ automated tests. Implements JWT authentication, role-based access control, and 17+ RESTful API endpoints.",
    tags: [
      "FastAPI",
      "Angular",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    href: "https://focussprint.in",
    github: "https://github.com/abdulrahmanm-in",
    icon: "FS",
    featured: true,
  },
  {
    name: "RoleLens",
    description:
      "Job-market ETL and analytics platform that ingests technology job listings from Adzuna API. Features scheduled ETL pipeline with Pandas and APScheduler, REST APIs for insights, and MongoDB backend.",
    tags: [
      "FastAPI",
      "MongoDB",
      "Pandas",
      "APScheduler",
      "Docker",
    ],
    href: "https://external-lusa-rahmandev-d415ed9a.koyeb.app/docs",
    github: "https://github.com/abdulrahmanm-in",
    icon: "RL",
    featured: true,
  },
];

/* =========================================================
   TECH STACK
========================================================= */

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

const stack: TechItem[] = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    name: "Pytest",
    icon: SiPytest,
    color: "#0A9EDC",
  },
  {
    name: "SQLAlchemy",
    icon: SiSqlalchemy,
    color: "#D71F00",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "Angular",
    icon: SiAngular,
    color: "#DD0031",
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "#FF9900",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050a12]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <a
            href="#home"
            className="flex items-center gap-3 font-semibold"
          >
            <span className="text-2xl font-black text-white">
              &lt;/&gt;
            </span>

            <span className="text-lg">
              Abdul <span className="accent">Rahman</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              "Home",
              "About",
              "Projects",
              "Experience",
              "Certifications",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-sm"
              >
                {item}
              </a>
            ))}

            <a
              href="/Abdul_Rahman_Resume.pdf"
              className="flex items-center gap-2 rounded-lg border border-emerald-400/60 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-400/10"
            >
              Resume
              <Download size={15} />
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/5 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {[
                "Home",
                "About",
                "Projects",
                "Experience",
                "Certifications",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="grid-bg relative overflow-hidden"
      >
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">

          <div>

            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for Opportunities
              </span>
            </div>

            <h1 className="max-w-3xl text-6xl font-black leading-[1.1] tracking-tight md:text-7xl">
              Python Backend
              <br />
              <span className="accent">
                Engineer & Developer
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              2 years building production backend systems.
              Specialized in{" "}
              <span className="font-semibold text-white">
                FastAPI
              </span>
              ,{" "}
              <span className="font-semibold text-white">
                PostgreSQL
              </span>
              ,{" "}
              <span className="font-semibold text-white">
                Docker
              </span>
              , and{" "}
              <span className="font-semibold text-white">
                Pytest
              </span>
              . ETL pipelines, REST APIs, authentication systems,
              and DevOps.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:shadow-emerald-500/40"
              >
                View My Work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-all hover:border-emerald-400/60 hover:bg-white/10"
              >
                Get In Touch
                <Mail size={18} />
              </a>

            </div>

            <div className="mt-10 flex gap-3">

              <Social
                href="https://github.com/abdulrahmanm-in"
                icon={<Code2 size={19} />}
              />

              <Social
                href="https://www.linkedin.com/in/abdul-rahman-m-660158206"
                icon={<Share2 size={19} />}
              />

              <Social
                href="mailto:indmabdulrahman@gmail.com"
                icon={<Mail size={19} />}
              />

              <Social
                href="tel:8124720335"
                icon={<Globe2 size={19} />}
              />

            </div>

          </div>

          {/* CODE WINDOW */}

          <div className="relative hidden lg:block">

            <div className="absolute -inset-8 rounded-full bg-emerald-400/5 blur-3xl" />

            <div className="code-window glow relative mx-auto max-w-xl overflow-hidden rounded-2xl">

              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <span className="dot bg-red-400" />
                <span className="dot bg-yellow-400" />
                <span className="dot bg-green-400" />

                <span className="ml-auto text-xs text-slate-500">
                  main.py
                </span>

              </div>

              <pre className="overflow-x-auto p-7 text-sm leading-7 text-slate-300">
                <code>
{`from fastapi import FastAPI

app = FastAPI(
    title="Abdul Rahman API"
)

@app.get("/")
def root():
    return {
        "message":
        "Building scalable solutions 🚀"
    }`}
                </code>
              </pre>

            </div>

            <div className="absolute -right-5 top-4 rounded-xl border border-white/10 bg-[#0c1420] p-4 text-2xl">
              🐍
            </div>

            <div className="absolute -bottom-5 left-5 rounded-xl border border-white/10 bg-[#0c1420] p-4 text-2xl">
              ⚡
            </div>

            <div className="absolute -bottom-5 right-8 rounded-xl border border-white/10 bg-[#0c1420] p-4 text-2xl">
              🐘
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          ABOUT + TECH STACK
      ===================================================== */}

      <section
        id="about"
        className="border-t border-white/10 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"
      >

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">

          {/* ABOUT */}

          <div>

            <SectionTitle
              icon={<UserRound size={22} />}
              title="About Me"
            />

            <div className="mt-8 space-y-6">

              <p className="text-lg leading-9 text-slate-300">
                Software Engineer with{" "}
                <span className="font-semibold text-white">
                  2 years
                </span>{" "}
                of experience delivering production web applications
                and backend functionality in enterprise environments.
              </p>

              <p className="text-lg leading-9 text-slate-300">
                Currently at{" "}
                <span className="font-semibold text-emerald-300">
                  Tech Mahindra
                </span>{" "}
                developing enterprise Drupal portals.
                Specialized in Python backend systems using{" "}
                <span className="font-semibold text-white">
                  FastAPI
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  PostgreSQL
                </span>
                , and{" "}
                <span className="font-semibold text-white">
                  MongoDB
                </span>
                .
              </p>

              <p className="text-lg leading-9 text-slate-300">
                Experienced with REST APIs, JWT authentication,
                ETL pipelines, Docker, GitHub Actions CI/CD,
                Pytest automated testing, and Linux system administration.
              </p>

            </div>

            <div className="mt-8 space-y-3 text-sm">

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin
                  size={18}
                  className="accent"
                />
                Chennai, India
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Globe2
                  size={18}
                  className="accent"
                />
                Open to Remote & On-site Opportunities
              </div>

            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400/20"
            >
              Get To Know Me
              <ArrowRight size={18} />
            </a>

          </div>

          {/* TECH STACK */}

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {stack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-[#1c2938] bg-gradient-to-br from-[#0f1723] to-[#080e17] px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                  style={{
                    color,
                    backgroundColor: `${color}10`,
                    borderColor: `${color}35`,
                  }}
                >
                  <Icon size={23} />
                </div>

                <span className="min-w-0 text-sm font-semibold text-slate-200">
                  {name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="border-t border-white/10"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="mb-12 max-w-2xl">

            <SectionTitle
              icon={<BriefcaseBusiness size={22} />}
              title="Featured Projects"
            />

            <p className="mt-4 text-lg text-slate-400">
              Production applications built with modern tech stacks.
              Each project demonstrates full-stack development,
              testing, and deployment expertise.
            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {projects.map((project) => (

              <article
                key={project.name}
                className="card project-card group flex flex-col overflow-hidden rounded-2xl"
              >

                <div className="grid-bg relative flex h-56 items-center justify-center border-b border-white/10 bg-gradient-to-br from-emerald-500/10 to-blue-600/10">

                  <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-8 py-6 text-5xl font-black tracking-widest text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                    {project.icon}
                  </div>

                </div>

                <div className="flex flex-grow flex-col p-8">

                  <div className="mb-4">

                    <h3 className="text-2xl font-bold text-white transition group-hover:text-emerald-300">
                      {project.name}
                    </h3>

                    {project.featured && (
                      <span className="mt-3 inline-block rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 px-4 py-1 text-xs font-semibold text-emerald-300">
                        ✓ Featured
                      </span>
                    )}

                  </div>

                  <p className="mb-6 flex-grow text-base leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-emerald-400/20 bg-emerald-500/15 px-3 py-1.5 text-xs font-medium text-emerald-300 transition hover:border-emerald-400/50"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm font-medium">

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-300 transition hover:text-emerald-100"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-400 transition hover:text-emerald-300"
                    >
                      View Code
                      <Code2 size={14} />
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

          <div className="mt-16 text-center">

            <a
              href="https://github.com/abdulrahmanm-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/50 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              View All Projects
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE + CERTIFICATIONS
      ===================================================== */}

      <section
        id="experience"
        className="border-t border-white/10 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"
      >

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* EXPERIENCE */}

          <div>

            <SectionTitle
              icon={<BriefcaseBusiness size={19} />}
              title="Experience"
            />

            <div className="relative mt-8 pl-7">

              <div className="timeline-line absolute left-1 top-1 h-full w-px" />

              <Experience
                active
                title="Associate Software Engineer"
                company="Tech Mahindra"
                date="Sep 2024 — Present"
                description="Enterprise Drupal Solutions — Chennai, India"
                bullets={[
                  "Develop and maintain 3 production web portals using Drupal/PHP with custom modules, hooks, and integrations.",
                  "Implement authentication, authorization, RBAC, MFA, OAuth, and OpenID Connect across workflows.",
                  "Troubleshoot and resolve 15–25 work items per month across development, QA, UAT, and production environments.",
                  "Collaborate on Agile teams using Git workflows, pull requests, code reviews, and 1–2 production deployments monthly.",
                ]}
              />

            </div>

          </div>

          {/* CERTIFICATIONS */}

          <div id="certifications">

            <SectionTitle
              icon={<ShieldCheck size={19} />}
              title="Certifications"
            />

            <div className="mt-8 space-y-4">

              <Certification
                title="AWS Certified Cloud Practitioner"
                issuer="Amazon Web Services"
                date="2024"
                icon="aws"
              />

              <Certification
                title="B.Tech Computer Science"
                issuer="B.S. Abdur Rahman Crescent Institute"
                date="May 2024"
                icon="education"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="border-t border-white/10"
      >

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* CONTACT INFORMATION */}

          <div>

            <SectionTitle
              icon={<Sparkles size={19} />}
              title="Let's Connect"
            />

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              I&apos;m open to discussing backend engineering opportunities,
              collaborations and interesting technical projects.
            </p>

            <div className="mt-8 space-y-4 text-sm">

              <a
                href="mailto:indmabdulrahman@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-emerald-300"
              >
                <Mail
                  size={18}
                  className="accent"
                />
                indmabdulrahman@gmail.com
              </a>

              <a
                href="https://github.com/abdulrahmanm-in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-emerald-300"
              >
                <Code2
                  size={18}
                  className="accent"
                />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-rahman-m-660158206"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-emerald-300"
              >
                <Share2
                  size={18}
                  className="accent"
                />
                LinkedIn
              </a>

            </div>

          </div>

          {/* CONTACT FORM */}

          <ContactForm />

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 bg-gradient-to-t from-emerald-500/5 to-transparent px-6 py-10 text-center">

        <p className="text-sm text-slate-400">
          © 2026 Abdul Rahman. All rights reserved.
        </p>
      </footer>

    </main>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {

  const [state, handleSubmit] = useForm("xzeplpwb");

  if (state.succeeded) {

    return (
      <div className="card flex min-h-[360px] flex-col items-center justify-center rounded-2xl p-8 text-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">

          <CheckCircle2 size={34} />

        </div>

        <h3 className="mt-5 text-2xl font-bold text-white">
          Message Sent
        </h3>

        <p className="mt-3 max-w-sm leading-7 text-slate-400">
          Thanks for reaching out.
          I&apos;ll get back to you as soon as possible.
        </p>

      </div>
    );

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="card rounded-2xl p-7"
    >

      {/* NAME + EMAIL */}

      <div className="grid gap-4 sm:grid-cols-2">

        <div>

          <label
            htmlFor="contact-name"
            className="sr-only"
          >
            Your Name
          </label>

          <input
            id="contact-name"
            className="field"
            name="name"
            placeholder="Your Name"
            required
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="mt-1 text-xs text-red-400"
          />

        </div>

        <div>

          <label
            htmlFor="contact-email"
            className="sr-only"
          >
            Your Email
          </label>

          <input
            id="contact-email"
            className="field"
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-xs text-red-400"
          />

        </div>

      </div>

      {/* SUBJECT */}

      <div>

        <label
          htmlFor="contact-subject"
          className="sr-only"
        >
          Subject
        </label>

        <input
          id="contact-subject"
          className="field mt-4"
          name="subject"
          placeholder="Subject"
          required
        />

        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
          className="mt-1 text-xs text-red-400"
        />

      </div>

      {/* MESSAGE */}

      <div>

        <label
          htmlFor="contact-message"
          className="sr-only"
        >
          Message
        </label>

        <textarea
          id="contact-message"
          className="field mt-4 min-h-[150px] resize-none"
          name="message"
          placeholder="Message"
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-xs text-red-400"
        />

      </div>

      {/* GENERAL ERROR */}

      {state.errors && (
        <ValidationError
          errors={state.errors}
          className="mt-3 text-sm text-red-400"
        />
      )}

      {/* BUTTON */}

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition-all hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20 disabled:cursor-not-allowed disabled:opacity-60"
      >

        {state.submitting
          ? "Sending..."
          : "Send Message"
        }

        {!state.submitting && (
          <Send size={17} />
        )}

      </button>

    </form>

  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function Social({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {

  return (

    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="rounded-lg border border-white/10 bg-white/[.02] p-3 text-slate-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
    >

      {icon}

    </a>

  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {

  return (

    <h2 className="flex items-center gap-3 text-2xl font-bold">

      <span className="accent">
        {icon}
      </span>

      {title}

    </h2>

  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function Experience({
  active,
  title,
  company,
  date,
  description,
  bullets,
}: {
  active?: boolean;
  title: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
}) {

  return (

    <div className="relative pb-10">

      <span
        className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#050a12] ${
          active
            ? "bg-emerald-400"
            : "bg-slate-600"
        }`}
      />

      <div className="flex flex-wrap items-start justify-between gap-3">

        <div>

          <h3 className="font-bold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-emerald-300">
            {company}
          </p>

        </div>

        <span className="text-xs text-slate-500">
          {date}
        </span>

      </div>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>

      {bullets.length > 0 && (

        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">

          {bullets.map((bullet) => (

            <li
              key={bullet}
              className="flex gap-2"
            >

              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />

              {bullet}

            </li>

          ))}

        </ul>

      )}

    </div>

  );
}

/* =========================================================
   CERTIFICATION
========================================================= */

function Certification({
  title,
  issuer,
  date,
  icon,
}: {
  title: string;
  issuer: string;
  date: string;
  icon: string;
}) {

  return (

    <div className="card flex items-center gap-4 rounded-2xl p-5">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[.03] text-xl">

        {icon === "aws"
          ? "☁️"
          : icon === "education"
            ? "🎓"
            : "✦"
        }

      </div>

      <div className="flex-1">

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-emerald-300">
          {issuer}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Issued {date}
        </p>

      </div>

      <CheckCircle2
        className="accent"
        size={22}
      />

    </div>

  );
}