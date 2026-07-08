/**
 * navigation.js — Dock navbar behaviour
 */

import { toggleTheme } from './theme.js';

/**
 * Highlight the active navbar item based on current URL path.
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
 * Smooth-scroll to the projects section with a fixed offset.
 * Also pushes /#projects into the browser history so the URL is bookmarkable.
 */
function scrollToProjects() {
  const section = document.getElementById('projects');
  if (!section) return;
  history.pushState(null, '', '/#projects');
  const top = section.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Handle the case where the page is loaded with /#projects already in the URL.
 * Scrolls the user to the section after the page finishes rendering.
 */
function handleDeepLink() {
  if (window.location.hash !== '#projects') return;

  // Disable default browser scroll restoration so we control the scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  // Start from the top, then smoothly animate to the section
  window.scrollTo(0, 0);
  setTimeout(() => {
    scrollToProjects();
  }, 300);
}

/**
 * Initialise smooth scroll for same-page anchor links with offset correction.
 */
function initSmoothScroll() {
  // My Projects anchor — push hash and scroll with offset
  document.querySelectorAll('a[href="#projects"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToProjects();
    });
  });

  // All other same-page anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#projects"])').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Home dock icon — smooth scroll to top and strip any hash fragment
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      const path = window.location.pathname;
      if (path === '/' || path.endsWith('index.html') || path === '') {
        e.preventDefault();
        if (window.location.hash) {
          history.pushState('', document.title, window.location.pathname + window.location.search);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}

/**
 * ScrollSpy: sync the URL fragment and My Projects dock active state with scroll.
 * Uses replaceState (no history noise) while scrolling; pushState only on explicit
 * dock clicks (so back/forward button works as expected).
 */
function initScrollSpy() {
  const projectsSection = document.getElementById('projects');
  const projectsLink = document.querySelector('.dock-icon[href="#projects"]');
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');

  if (!projectsSection) return;

  // Track previous state to avoid unnecessary replaceState calls
  let prevInView = null; // null = not yet observed

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const inView = entry.isIntersecting;
      if (inView === prevInView) return; // no change — skip
      prevInView = inView;

      if (inView) {
        if (projectsLink) projectsLink.classList.add('active');
        if (homeLink) homeLink.classList.remove('active');
        // Update URL to /#projects without creating a history entry
        window.history.replaceState(null, '', '/#projects');
      } else {
        if (projectsLink) projectsLink.classList.remove('active');
        setActiveNavItem();
        // Restore clean URL without the fragment
        window.history.replaceState(
          '',
          document.title,
          window.location.pathname + window.location.search
        );
      }
    });
  }, {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  observer.observe(projectsSection);

  // Back / Forward button: scroll to the correct section when history changes
  window.addEventListener('popstate', () => {
    if (window.location.hash === '#projects') {
      scrollToProjects();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

/**
 * Initialise the navigation module.
 */
export function initNavigation() {
  setActiveNavItem();
  initThemeToggle();
  handleDeepLink();
  initSmoothScroll();
  initScrollSpy();
}
