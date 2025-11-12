import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  PlayCircle,
  Smartphone,
  Globe,
  Rocket,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

// ---- Config (edit these) ----------------------------------------------------
const PROFILE = {
  name: 'Bonhomie',
  role: 'Full‑Stack Web & Mobile Developer',
  blurb:
    'I design, build, and ship fast, scalable apps with delightful UX — React, Node, React Native, and AI integrations.',
  location: 'Lagos, Nigeria',
  email: 'adeyemibabatundejoseph@gmail.com',
  resumeUrl: 'https://bonhomie.dev/resume.pdf',
  socials: {
    github: 'https://github.com/bonhomie95',
    linkedin: 'https://www.linkedin.com/in/adeyemi-joseph-770a55244',
    email: 'mailto:adeyemibabatundejoseph@gmail.com',
  },
};

const SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'React Native (Expo)',
  'TailwindCSS',
  'Framer Motion',
  'Socket.IO',
  'Redis',
  'Docker',
  'Nginx',
  'CI/CD',
  'Stripe & AdMob',
  'OpenAI / LangChain / Ollama',
];

const PROJECTS = [
  {
    title: 'QuizMint',
    tag: 'React Native • Node • MongoDB',
    description:
      'Crypto‑reward trivia game with streaks, live leaderboards, PIN‑secured wallet, and animated quiz UX.',
    links: {
      live: '#',
      github: '#',
    },
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Property Wey International',
    tag: 'React • Node • Cloudinary',
    description:
      'Modern real‑estate marketplace with verified listings, quality checks, Cloudinary pipeline, and maps.',
    links: {
      live: '#',
      github: '#',
    },
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Vanta (ResumeGPT)',
    tag: 'React • Node • AI • LangChain',
    description:
      'AI‑powered resume optimizer and job matcher with interview coach and offer negotiation tools.',
    links: {
      live: '#',
      github: '#',
    },
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
];

const EXPERIENCES = [
  {
    role: 'Lead Full‑Stack Developer',
    org: 'Bonhomie Inc.',
    period: '2023 — Present',
    points: [
      'Shipped 30+ web/mobile apps focusing on performance, DX, and monetization.',
      'Scaled Node + MongoDB backends to thousands of daily users with CI/CD and containerization.',
      'Integrated AI for content generation, analytics, and automation (OpenAI, Ollama).',
    ],
  },
  {
    role: 'Senior Frontend Engineer (Contract)',
    org: 'The House of Sounds',
    period: '2002 — 2023',
    points: [
      'Developed and maintained full stack web applications using JavaScript.',
      'Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.',
      'Utilized back-end frameworks such as Nodejs, designed and optimized databases using MongoDB, MySQL,and PostgreSQL.',
    ],
  },
];

// ---- Utilities --------------------------------------------------------------
const useScrollActive = () => {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
};

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
});
const zoom = (d = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: [0.16, 1, 0.3, 1] },
});

// ---- Component --------------------------------------------------------------
export default function Portfolio() {
  const active = useScrollActive();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Glow background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="font-semibold tracking-wide">{PROFILE.name}</span>
          </div>
          <ul className="hidden gap-6 text-sm md:flex">
            {[
              { id: 'home', label: 'Home' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'contact', label: 'Contact' },
            ].map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className={`transition-colors hover:text-cyan-300 ${
                    active === it.id ? 'text-cyan-400' : 'text-neutral-300'
                  }`}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PROFILE.resumeUrl}
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs font-medium text-neutral-200 shadow hover:border-cyan-600 hover:bg-neutral-800 hover:text-cyan-200 transition-colors"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          {...fade(0)}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> Available for
          select projects
        </motion.div>
        <motion.h1
          {...fade(0.05)}
          className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl"
        >
          Building fast, beautiful apps that scale.
        </motion.h1>
        <motion.p {...fade(0.12)} className="mt-5 max-w-2xl text-neutral-300">
          {PROFILE.blurb}
        </motion.p>
        <motion.div
          {...fade(0.2)}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
          >
            See Projects{' '}
            <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </a>
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:border-neutral-600"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-200 hover:border-neutral-600"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        {/* Hero Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Globe className="h-5 w-5" />,
              title: 'Web Apps',
              text: 'React/Next.js frontends with Node/Express APIs, production‑grade.',
            },
            {
              icon: <Smartphone className="h-5 w-5" />,
              title: 'Mobile',
              text: 'React Native (Expo) with smooth animations and secure wallet flows.',
            },
            {
              icon: <PlayCircle className="h-5 w-5" />,
              title: 'AI & Automation',
              text: 'OpenAI/Ollama integrations, background jobs, and content pipelines.',
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              {...zoom(0.05 * i)}
              className="rounded-2xl border border-neutral-800/80 bg-neutral-900/50 p-5 shadow hover:border-cyan-700/40"
            >
              <div className="mb-3 inline-flex rounded-xl bg-neutral-800/80 p-2 text-cyan-300">
                {c.icon}
              </div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 {...fade(0)} className="text-2xl font-semibold">
          Core Skills
        </motion.h2>
        <motion.p {...fade(0.08)} className="mt-2 max-w-2xl text-neutral-300">
          Pragmatic, performance‑first approach with a clean architecture
          mindset and testing discipline.
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-2">
          {SKILLS.map((s, i) => (
            <motion.span
              {...zoom(i * 0.02)}
              key={s}
              className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-200"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 {...fade(0)} className="text-2xl font-semibold">
          Selected Projects
        </motion.h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              {...fade(i * 0.05)}
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-cyan-300">{p.tag}</p>
                <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:underline"
                  >
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:underline"
                  >
                    Code <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 {...fade(0)} className="text-2xl font-semibold">
          Experience
        </motion.h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {EXPERIENCES.map((e, i) => (
            <motion.div
              key={e.role}
              {...zoom(i * 0.05)}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {e.role} • <span className="text-neutral-300">{e.org}</span>
                </h3>
                <span className="text-sm text-neutral-400">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 {...fade(0)} className="text-2xl font-semibold">
          Let’s build something great
        </motion.h2>
        <motion.p {...fade(0.06)} className="mt-2 max-w-2xl text-neutral-300">
          Briefly describe your idea, timeline, and budget. I typically reply
          within 24 hours.
        </motion.p>
        <motion.div {...fade(0.12)} className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none ring-cyan-600/30 focus:border-cyan-700"
            placeholder="Your name"
          />
          <input
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none ring-cyan-600/30 focus:border-cyan-700"
            placeholder="Email or phone"
          />
          <textarea
            rows={4}
            className="sm:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 outline-none ring-cyan-600/30 focus:border-cyan-700"
            placeholder="Project summary"
          />
          <div className="sm:col-span-2 flex items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-500"
            >
              <Mail className="h-4 w-4" /> Send Email
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-neutral-200 hover:border-cyan-700"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-400">
          © {year} {PROFILE.name}. Built with React, Tailwind & Framer Motion.
        </div>
      </footer>
    </div>
  );
}
