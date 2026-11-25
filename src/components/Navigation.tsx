"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.1, 0.35, 0.6] },
    );

    navigation.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <span className="wordmark-mark">A</span>
          <span>
            Aya<span className="text-gradient">.AI</span>
          </span>
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            const active = activeSection === sectionId;
            return (
              <a
                className={`nav-link${active ? " is-active" : ""}`}
                href={item.href}
                key={item.href}
                aria-current={active ? "location" : undefined}
              >
                {item.label}
                {active && (
                  <motion.span
                    className="nav-active-line"
                    layoutId="active-nav"
                    transition={{
                      duration: reduceMotion ? 0 : 0.28,
                      ease: "easeOut",
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <a
          className="nav-cta"
          href={`mailto:${profile.email}`}
          aria-label="Email Aya Ali"
        >
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            {navigation.map((item) => (
              <a
                className={
                  activeSection === item.href.slice(1) ? "is-active" : ""
                }
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-contact" href={`mailto:${profile.email}`}>
              Get in touch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
