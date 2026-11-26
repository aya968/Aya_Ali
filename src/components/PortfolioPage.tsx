"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Check,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  faDocker,
  faGithub,
  faGitAlt,
  faLinkedin,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useReducedMotion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ParticleNetwork from "@/components/ParticleNetwork";
import SectionHeading from "@/components/SectionHeading";
import VideoDemo from "@/components/VideoDemo";
import { publicAssetPath } from "@/lib/public-asset-path";
import {
  capabilities,
  certifications,
  domains,
  experience,
  faqs,
  pipeline,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const skillFilters = [
  "All",
  "AI Engineering",
  "Generative AI, LLMs & RAG",
  "Natural Language Processing (NLP)",
  "Machine Learning",
  "Data Science",
  "Deep Learning",
];

const skillCategoryIcons = {
  code: Code2,
  cpu: Cpu,
  brain: Brain,
  sparkles: Sparkles,
  chart: BarChart3,
  server: Server,
  workflow: Workflow,
  database: Database,
};

const skillBrandIcons = {
  Python: faPython,
  Docker: faDocker,
  "Git & GitHub": faGitAlt,
};

function Reveal({
  children,
  className,
  id,
  delay = 0,
  lift = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  lift?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={
        lift && !reduceMotion ? { y: -5, scale: 1.008 } : undefined
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`page-section ${className}`} id={id}>
      <div className="content-width">{children}</div>
    </section>
  );
}

export default function PortfolioPage() {
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");
  const visibleSkillGroups = skillGroups.filter(
    (group) =>
      activeSkillFilter === "All" || group.category === activeSkillFilter,
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Could not copy the contact email.", error);
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />

      <main id="main-content">
        <section className="hero-section" id="home">
          <ParticleNetwork />
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="content-width hero-content">
            <motion.div
              className="hero-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.72,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="hero-intro"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45, delay: 0.12 }}
              >
                <span className="status-indicator" />
                CAIRO, EGYPT <span className="intro-divider">·</span> OPEN TO
                OPPORTUNITIES
              </motion.div>
              <div className="specialty-badge">
                <Sparkles size={13} aria-hidden="true" />
                Generative AI <span>·</span> LLMs <span>·</span> RAG
              </div>
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.62,
                  delay: reduceMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
              >
                {profile.fullName}
                <span className="hero-title-line text-gradient">
                  {profile.title}
                </span>
              </motion.h1>
              <motion.p
                className="hero-headline"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.33,
                  ease: "easeOut",
                }}
              >
                {profile.headline}
              </motion.p>
              <p className="hero-lead">
                AI Engineer and 2026 Cairo University graduate, focused on
                Generative AI, LLMs, RAG, and NLP. I turn thoughtful model
                workflows into practical, reliable applications.
              </p>
              <div className="hero-education">
                <GraduationCap size={17} aria-hidden="true" />
                <span>
                  Faculty of Computers and Artificial Intelligence
                  <span className="education-separator"> / </span>
                  Cairo University, Department of AI · Graduated 2026
                </span>
              </div>
              <motion.div
                className="hero-actions"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.46,
                }}
              >
                <a className="button button-primary" href="#projects">
                  View my projects <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
                <a className="button button-contact" href="#contact">
                  Contact me <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </motion.div>
              <motion.div
                className="hero-socials"
                aria-label="Social profiles"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.58 }}
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Aya Ali on GitHub"
                >
                  <FontAwesomeIcon
                    className="brand-icon"
                    icon={faGithub}
                    aria-hidden="true"
                  />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Aya Ali on LinkedIn"
                >
                  <FontAwesomeIcon
                    className="brand-icon"
                    icon={faLinkedin}
                    aria-hidden="true"
                  />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.12,
                ease: "easeOut",
              }}
            >
              <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
              <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
              <div className="portrait-frame">
                <div className="portrait-image-clip">
                  <Image
                    alt="Aya Ali"
                    className="portrait-image"
                    fill
                    sizes="(max-width: 760px) 300px, 380px"
                    src={publicAssetPath(profile.photo)}
                    unoptimized
                  />
                </div>
              </div>
              <span className="portrait-chip portrait-chip-top">AI / ML</span>
              <span className="portrait-chip portrait-chip-bottom">BUILDING WITH INTENT</span>
            </motion.div>
            <a className="scroll-cue" href="#about">
              <span>Scroll to explore</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <Section id="about" className="about-section">
          <div className="about-layout">
            <Reveal className="about-intro">
              <SectionHeading
                eyebrow="A little about me"
                title="Engineering with curiosity. Building with intent."
                description="I enjoy connecting thoughtful model development with reliable engineering, so intelligent systems can be useful beyond a notebook."
              />
            </Reveal>
            <Reveal className="about-copy" delay={0.1}>
              <p>
                I&apos;m an AI Engineer and a 2026 graduate of the Faculty of
                Computers and Artificial Intelligence at Cairo University,
                Department of Artificial Intelligence. My primary interests
                are AI Engineering, Generative AI, LLMs, RAG, and NLP.
              </p>
              <p>
                With a foundation in Machine Learning, Data Science, and Deep
                Learning, I enjoy combining AI techniques with software
                engineering to create useful, reliable, and well-structured
                applications.
              </p>
              <div className="about-facts">
                <div>
                  <span className="fact-value">2026</span>
                  <span className="fact-label">Graduation year</span>
                </div>
                <div>
                  <span className="fact-value">Artificial Intelligence</span>
                  <span className="fact-label">Department</span>
                </div>
                <div>
                  <span className="fact-value">Cairo University</span>
                  <span className="fact-label">
                    Faculty of Computers and Artificial Intelligence
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="projects" className="projects-section">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built around real problems."
              description="A selection of AI engineering, generative AI, NLP, machine learning, and deep learning projects. Demo videos can be added to the local demos folder at any time."
            />
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal
                id={`project-${project.id}`}
                className={`project-card${index === 0 ? " project-featured" : ""}`}
                key={project.id}
                delay={index % 2 === 0 ? 0 : 0.07}
                lift
              >
                <div className="project-media">
                  <VideoDemo
                    title={project.title}
                    src={
                      project.video
                        ? publicAssetPath(project.video)
                        : undefined
                    }
                    embedUrl={project.videoEmbed}
                  />
                </div>
                <div className="project-content">
                  <div className="project-topline">
                    <span className="project-category">{project.category}</span>
                    {project.status && (
                      <span className="project-status">
                        <span className="status-indicator" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technology-list" aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <span className="technology-tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.repositories?.map((repository) => (
                      <a
                        className="project-link project-link-primary"
                        href={repository.url}
                        key={repository.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          className="brand-icon brand-icon-small"
                          icon={faGithub}
                          aria-hidden="true"
                        />
                        {repository.label}
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ))}
                    {!project.repositories?.length && (
                      <a
                        className="project-link"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          className="brand-icon brand-icon-small"
                          icon={faGithub}
                          aria-hidden="true"
                        />
                        GitHub profile
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="project-note">
            Repository buttons link to the project repository when verified;
            otherwise they clearly open Aya&apos;s public GitHub profile.
          </p>
        </Section>

        <Section id="skills" className="skills-section">
          <Reveal>
            <SectionHeading
              eyebrow="Technical toolkit"
              title="A practical stack for the full AI lifecycle."
              description="From data exploration and model training to language systems, APIs, and deployment."
            />
          </Reveal>
          <div
            className="skill-filters"
            role="group"
            aria-label="Filter skills by category"
          >
            {skillFilters.map((filter) => (
              <button
                className={`skill-filter${activeSkillFilter === filter ? " is-active" : ""}`}
                key={filter}
                type="button"
                aria-pressed={activeSkillFilter === filter}
                onClick={() => setActiveSkillFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="skills-grid"
              key={activeSkillFilter}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
            >
              {visibleSkillGroups.map((group, index) => {
                const CategoryIcon =
                  skillCategoryIcons[
                    group.icon as keyof typeof skillCategoryIcons
                  ];
                return (
                  <Reveal
                    className={`skill-card${index === 0 && activeSkillFilter === "All" ? " skill-card-primary" : ""}${index === 1 && activeSkillFilter === "All" ? " skill-card-secondary" : ""}`}
                    key={group.id}
                    delay={index * 0.06}
                  >
                    <div className="skill-card-heading">
                      <span className="skill-category-icon">
                        <CategoryIcon size={18} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div className="skill-card-heading-copy">
                        <span className="skill-category-label">
                          {index === 0 && activeSkillFilter === "All"
                            ? "Primary focus"
                            : "Area of expertise"}
                        </span>
                        <h3>{group.title}</h3>
                      </div>
                      <span className="skill-card-line" />
                    </div>
                    <p className="skill-card-description">{group.description}</p>
                    <div className="skill-subgroups">
                      {group.subgroups.map((subgroup) => (
                        <div className="skill-subgroup" key={subgroup.title}>
                          <h4>{subgroup.title}</h4>
                          <div className="skill-list">
                            {subgroup.items.map((skill) => {
                              const brandIcon =
                                skillBrandIcons[
                                  skill as keyof typeof skillBrandIcons
                                ];
                              return (
                                <span className="skill-pill" key={skill}>
                                  <span
                                    className="skill-pill-icon"
                                    aria-hidden="true"
                                  >
                                    {brandIcon ? (
                                      <FontAwesomeIcon icon={brandIcon} />
                                    ) : (
                                      skill.slice(0, 2).toUpperCase()
                                    )}
                                  </span>
                                  {skill}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </Section>

        <Section id="domains" className="domains-section">
          <Reveal>
            <SectionHeading
              eyebrow="Areas of focus"
              title="Specialized domains. Connected thinking."
              description="Technical depth across applied AI disciplines and the systems that bring them together."
            />
          </Reveal>
          <div className="domains-grid">
            {domains.map((domain, index) => (
              <Reveal className="domain-card" key={domain.number} delay={index * 0.07}>
                <span className="domain-number">{domain.number}</span>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <span className="domain-tools">{domain.tools}</span>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="capabilities" className="capabilities-section">
          <Reveal>
            <SectionHeading
              eyebrow="What I bring"
              title="Engineering that meets the use case."
              description="A mix of modeling, systems thinking, and practical delivery."
            />
          </Reveal>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <Reveal
                className="capability-card"
                key={capability.title}
                delay={index * 0.05}
              >
                <span className="capability-icon" aria-hidden="true">
                  {capability.icon}
                </span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <ArrowUpRight
                  className="capability-arrow"
                  size={17}
                  aria-hidden="true"
                />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="pipeline" className="pipeline-section">
          <Reveal>
            <SectionHeading
              eyebrow="How I work"
              title="An intentional path from data to delivery."
              description="A repeatable engineering workflow, adapted to the constraints and needs of each project."
            />
          </Reveal>
          <div className="pipeline-grid">
            {pipeline.map((step, index) => (
              <Reveal
                className="pipeline-step"
                key={step.number}
                delay={index * 0.08}
              >
                <div className="pipeline-step-top">
                  <span>{step.number}</span>
                  <span className="pipeline-step-label">{step.tools}</span>
                </div>
                <div className="pipeline-line">
                  <span />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experience" className="experience-section">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="Learning through applied work."
              description="Internship and training experiences in AI and data science."
            />
          </Reveal>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal className="experience-item" key={`${item.role}-${item.organization}`} delay={index * 0.06}>
                <div className="timeline-marker">
                  <span />
                </div>
                <div className="experience-period">{item.dates}</div>
                <article className="experience-card">
                  <div className="experience-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="experience-company">
                        {item.organization}
                        <span> · </span>
                        {item.arrangement}
                      </p>
                    </div>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="technology-list">
                    {item.technologies.map((technology) => (
                      <span className="technology-tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="certifications" className="certifications-section">
          <Reveal>
            <SectionHeading
              eyebrow="Certifications & training"
              title="A growing foundation in AI and software."
              description="Credentials and training, with links to their provided verification or certificate pages."
            />
          </Reveal>
          <div className="certification-grid">
            {certifications.map((certification, index) => (
              <Reveal
                className="certification-card"
                key={certification.name}
                delay={index % 2 === 0 ? 0 : 0.06}
              >
                <div className="certification-top">
                  <span>{certification.category}</span>
                  <ExternalLink size={15} aria-hidden="true" />
                </div>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                <div className="certification-bottom">
                  <span>{certification.date}</span>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certification.name} credential`}
                  >
                    View credential <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="faq" className="faq-section">
          <div className="faq-layout">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently asked"
                title="A few helpful details."
                description="A quick overview of my technical focus and how I approach collaboration."
              />
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <details className="faq-item">
                    <summary>
                      <span className="faq-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{faq.question}</span>
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" className="contact-section">
          <Reveal className="contact-panel">
            <div className="contact-glow" aria-hidden="true" />
            <div className="contact-copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Open to meaningful conversations
              </span>
              <h2>
                Let&apos;s make something
                <br />
                <span className="text-gradient">intelligent together.</span>
              </h2>
              <p>
                Interested in AI engineering roles, collaboration, or a
                thoughtful conversation about a project? I&apos;d love to hear
                from you.
              </p>
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden="true" />
                Get in touch <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-label">Email</span>
                <div className="contact-detail-value">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button
                    className="copy-button"
                    type="button"
                    onClick={() => void copyEmail()}
                    aria-label={copied ? "Email address copied" : "Copy email address"}
                  >
                    {copied ? <Check size={15} /> : <span>Copy</span>}
                  </button>
                </div>
              </div>
              <a
                className="contact-detail"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-label">LinkedIn</span>
                <span className="contact-detail-value">
                  aya-ali-924932373 <ArrowUpRight size={15} />
                </span>
              </a>
              <a
                className="contact-detail"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-label">GitHub</span>
                <span className="contact-detail-value">
                  aya968 <ArrowUpRight size={15} />
                </span>
              </a>
              <a
                className="contact-detail"
                href={profile.kaggle}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-detail-label">Kaggle</span>
                <span className="contact-detail-value">
                  ayaali66 <ArrowUpRight size={15} />
                </span>
              </a>
              <div className="contact-location">
                <MapPin size={15} aria-hidden="true" /> Cairo, Egypt
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-mark">A</span>
            <span>
              Aya<span className="text-gradient">.AI</span>
            </span>
          </a>
          <p>
            Designed & built with care <span>·</span> Aya Ali, AI Engineer
          </p>
          <a className="back-to-top" href="#home">
            Back to top <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
