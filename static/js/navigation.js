/**
 * navigation.js — Dock navbar behaviour
 */

import { toggleTheme } from './theme.js';

const SCROLL_OFFSET = 80; // px — accounts for the floating dock

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
}  );
}

/**
 * Set up theme toggle button in the dock.
 */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => toggleTheme());
}

/**
 * Smooth-scroll to the projects section with a fixed offset.
 * Uses pushState so the URL fragment is bookmarkable and back/forward work.
 */
function scrollToProjects() {
  const section = document.getElementById('projects');
  if (!section) return;
  window.history.pushState(null, '', '/#projects');
  const top = section.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Smooth-scroll to the top and strip the #projects fragment.
 * Uses pushState so back/forward button can navigate back to /#projects.
 */
function scrollToHome() {
  window.history.pushState('', document.title, '/');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Handle direct page load with /#projects in the URL.
 * Prevents the browser jump, shows the page from the top, then
 * smoothly animates down to the projects section.
 */
function handleDeepLink() {
  if (window.location.hash !== '#projects') return;

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  setTimeout(() => scrollToProjects(), 300);
}

/**
 * Initialise smooth-scroll click handlers for dock and anchor links.
 */
function initSmoothScroll() {
  // My Projects dock / anchor → scroll to section + push hash
  document.querySelectorAll('a[href="#projects"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToProjects();
    });
  });

  // All other same-page anchors
  document.querySelectorAll('a[href^="#"]:not([href="#projects"])').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Home dock icon → scroll to top and strip any fragment
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      const path = window.location.pathname;
      if (path === '/' || path.endsWith('index.html') || path === '') {
        e.preventDefault();
        scrollToHome();
      }
    });
  }
}

/**
 * ScrollSpy: bidirectionally sync the URL fragment and dock active state with
 * the user's scroll position.
 *
 * Uses replaceState while scrolling (no history noise).
 * Uses pushState only on explicit dock clicks so back/forward still works.
 *
 * The symmetric rootMargin ("-25% 0px -25% 0px") ensures the IntersectionObserver
 * fires reliably when the section enters OR exits the viewport — in both scroll
 * directions. The previous "-20% 0px -60% 0px" margin only covered 20% of the
 * viewport, causing upward-scroll exit events to be missed.
 */
function initScrollSpy() {
  const projectsSection = document.getElementById('projects');
  const projectsLink = document.querySelector('.dock-icon[href="#projects"]');
  const homeLink = document.querySelector('.dock-icon[data-path="/"]');

  if (!projectsSection) return;

  // String guard: tracks the currently active section to avoid redundant updates
  let activeSection = null; // null = not yet determined

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Projects section entered the viewport → activate My Projects
        if (activeSection === 'projects') return; // no change
        activeSection = 'projects';

        if (projectsLink) projectsLink.classList.add('active');
        if (homeLink) homeLink.classList.remove('active');
        window.history.replaceState(null, '', '/#projects');
      } else {
        // Projects section left the viewport → restore Home
        if (activeSection === 'home') return; // no change
        activeSection = 'home';

        if (projectsLink) projectsLink.classList.remove('active');
        setActiveNavItem();
        // Explicitly push "/" to guarantee the fragment is stripped
        window.history.replaceState('', document.title, '/');
      }
    });
  }, {
    root: null,
    rootMargin: '-25% 0px -25% 0px', // symmetric — fires on both entry and exit
    threshold: 0
  });

  observer.observe(projectsSection);

  // Back / Forward button support
  window.addEventListener('popstate', () => {
    if (window.location.hash === '#projects') {
      const section = document.getElementById('projects');
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
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
