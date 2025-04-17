"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Header.module.scss";

import { routes, style } from "@/app/resources";
import { person, social, about, projects } from "@/app/resources/content";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [theme, setTheme] = useState(style.theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    // Update HTML element's data attribute
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.dataset.neutral = style.neutral;
      htmlElement.dataset.brand = style.brand;
      htmlElement.dataset.accent = style.accent;
      htmlElement.dataset.solid = style.solid;
      htmlElement.dataset.solidStyle = style.solidStyle;
      htmlElement.dataset.border = style.border;
      htmlElement.dataset.surface = style.surface;
      htmlElement.dataset.transition = style.transition;
      htmlElement.dataset.theme = newTheme;
    }
  };

  // Set initial theme on component mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Close menu when clicking outside or changing route
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Add overflow hidden to body when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen && 
        headerRef.current && 
        !headerRef.current.contains(event.target as Node) &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle keyboard navigation and accessibility
  useEffect(() => {
    // When menu opens, focus first menu item; when closed, move focus back
    if (menuOpen && mobileMenuRef.current) {
      const firstLink = mobileMenuRef.current.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }

    // Handle escape key to close menu
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <Image 
              src={theme === "dark" ? "/images/logo-white-darkmode.png" : "/images/logo-black-lightmode.png"} 
              alt={`${person.firstName} ${person.lastName}`} 
              className={styles.logoImage}
              width={200}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {routes["/about"] && (
                <li key="about" className={pathname === "/about" ? styles.active : ""}>
                  <Link href="/about">{about.label}</Link>
                </li>
              )}
              {routes["/projects"] && (
                <li key="projects" className={pathname.startsWith("/projects") ? styles.active : ""}>
                  <Link href="/projects">Projects</Link>
                </li>
              )}
              <li key="contact" className={pathname === "/contact" ? styles.active : ""}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Actions area - Social Links + Theme Toggle */}
          <div className={styles.actions}>
            {/* Social Links - Desktop */}
            <div className={styles.socialLinks}>
              {social.map((item) => 
                item.link && (
                  <a 
                    key={item.name}
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={item.name}
                    className={styles.socialLink}
                  >
                    {item.icon === "github" && (
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    )}
                    {item.icon === "linkedin" && (
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {item.icon === "email" && (
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    )}
                  </a>
                )
              )}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className={styles.themeToggle}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className={styles.menuToggle} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
              <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
              <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Moved outside header to avoid containment issues */}
      {menuOpen && (
        <div 
          id="mobile-menu"
          className={`${styles.mobileNav} ${styles.open}`}
          ref={mobileMenuRef}
          role="navigation"
          style={{ 
            position: 'fixed', 
            top: '64px', 
            left: 0, 
            right: 0, 
            zIndex: 999,
            pointerEvents: 'auto' 
          }}
          onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling up
        >
          <nav>
            <ul className={styles.mobileNavList}>
              {routes["/about"] && (
                <li key="mobile-about" className={pathname === "/about" ? styles.active : ""}>
                  <Link href="/about" onClick={() => setMenuOpen(false)}>{about.label}</Link>
                </li>
              )}
              {routes["/projects"] && (
                <li key="mobile-projects" className={pathname.startsWith("/projects") ? styles.active : ""}>
                  <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                </li>
              )}
              <li key="mobile-contact" className={pathname === "/contact" ? styles.active : ""}>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Social Links - Mobile */}
          <div className={styles.mobileSocialLinks}>
            {social.map((item) => 
              item.link && (
                <a 
                  key={`mobile-${item.name}`}
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={item.name}
                  className={styles.socialLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon === "github" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.489.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  )}
                  {item.icon === "linkedin" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {item.icon === "email" && (
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  )}
                  <span>{item.name}</span>
                </a>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};
