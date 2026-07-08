/**
 * navigation.js — Dock navbar behaviour
 *
 * Design principles:
 *  - URL only changes on explicit user action (dock click / direct navigation).
 *  - Scrolling NEVER mutates the URL automatically.
 *  - IntersectionObserver is used solely for the visual dock active state.
 */

import { toggleTheme } from './theme.js';

const SCROLL_OFFSET = 80; // px — space for the fixed floating dock

// ── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Highlight the correct dock item for the current URL pathname.
 */
function setActiveNavItem() {
  const path = window.location.pathname;
  document.querySelectorAll('.dock-icon[data-path]').forEach((el) => {
    const elPath = el.getAttribute('data-path');
    const isMatch = path === elPath || (elPath !== '/' && path.startsWith(elPath));
    el.classList.toggle('active', isMatch);
  });
}

/**
 * Smooth-scroll to an element with the dock offset applied.
 */
function smoothScrollToEl(el) {
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ── Theme toggle ─────────────────────────────────────────────────────────────

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', () => toggleTheme());
}

// ── Deep-link handling ───────────────────────────────────────────────────────

/**
 * If the page was opened with /#projects in the URL, prevent the browser's
 * instant jump, show the page from the top, then smoothly animate down.
 * Runs once on page load — does not modify the URL.
 */
function handleDeepLink() {
  if (window.location.hash !== '#projects') return;

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  setTimeout(() => {
    const el = document.getElementById('projects');
    if (el) smoothScrollToEl(el);
  }, 300);
}

// ── Smooth scroll click handlers ─────────────────────────────────────────────

/**
 * Set up click handlers for dock items and anchor links.
 *
 * My Projects dock / anchor:
 *   pushState → /#projects then smooth-scroll (so the URL is bookmarkable).
 *
 * Home dock:
 *   pushState → / (strips any fragment) then scroll to top.
 *
 * Other anchors:
 *   Smooth scroll with offset; URL is not touched.
 */
function initSmoothScroll() {
  // My Projects dock item / any a[href="#projects"] anchor
  document.querySelectorAll('a[href="#projects"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState(null, '', '/#projects');
      const el = document.getElementById('projects');
      if (el) smoothScrollToEl(el);
    });
  });

  // All other same-page hash anchors (excluding #projects)
  document.querySelectorAll('a[href^="#"]:not([href="#projects"])').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        smoothScrollToEl(target);
      }
    });
  });

  // Home dock icon: scroll to top and strip any fragment from the URL
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      const path = window.location.pathname;
      if (path === '/' || path.endsWith('index.html') || path === '') {
        e.preventDefault();
        window.history.pushState('', document.title, '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}

// ── Visual ScrollSpy ─────────────────────────────────────────────────────────

/**
 * Watches the My Projects section with IntersectionObserver and toggles the
 * dock active state when it enters or leaves the viewport.
 *
 * Intentionally does NOT update the URL — URL changes only happen on
 * explicit dock clicks (see initSmoothScroll above).
 */
function initScrollSpy() {
  const section = document.getElementById('projects');
  const projectsLink = document.querySelector('.dock-icon[href="#projects"]');
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');

  if (!section || !projectsLink) return;

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
  }, {
    root: null,
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0,
  });

  observer.observe(section);
}

// ── Entry point ──────────────────────────────────────────────────────────────

export function initNavigation() {
  setActiveNavItem();
  initThemeToggle();
  handleDeepLink();
  initSmoothScroll();
  initScrollSpy();
}
