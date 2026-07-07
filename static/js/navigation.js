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
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Initialise the navigation module.
 */
export function initNavigation() {
  setActiveNavItem();
  initThemeToggle();
  initSmoothScroll();
}
