/**
 * navigation.js — Dock navbar behaviour
 */

import { toggleTheme } from './theme.js';

/**
 * Highlight the active navbar item based on current URL.
 */
function setActiveNavItem() {
  const path = window.location.pathname;
  document.querySelectorAll('.dock-icon[data-path]').forEach((el) => {
    const elPath = el.getAttribute('data-path');
    if (path === elPath || (elPath !== '/' && path.startsWith(elPath))) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

/**
 * Set up theme toggle button in the dock.
 */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    toggleTheme();
  });
}

/**
 * Initialise smooth scroll for same-page anchor links.
 */
function initSmoothScroll() {
  // Smooth scroll for anchor links with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  });

  // Smooth scroll to top for Home link
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      const path = window.location.pathname;
      if (path === '/' || path.endsWith('index.html') || path === '') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Ensure home hash is updated cleanly
        if (window.location.hash) {
          history.pushState("", document.title, window.location.pathname + window.location.search);
        }
      }
    });
  }
}

/**
 * Highlight active sections in the dock as the user scrolls.
 */
function initScrollSpy() {
  const projectsSection = document.getElementById('projects');
  const projectsLink = document.querySelector('.dock-icon[href="#projects"]');
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');

  if (!projectsSection || !projectsLink) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the active middle portion of screen
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectsLink.classList.add('active');
        if (homeLink) homeLink.classList.remove('active');
      } else {
        projectsLink.classList.remove('active');
        setActiveNavItem();
      }
    });
  }, observerOptions);

  observer.observe(projectsSection);
}

/**
 * Initialise the navigation module.
 */
export function initNavigation() {
  setActiveNavItem();
  initThemeToggle();
  initSmoothScroll();
  initScrollSpy();
}
