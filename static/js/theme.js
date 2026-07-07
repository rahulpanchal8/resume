/**
 * theme.js — Dark/light mode toggle
 */

const STORAGE_KEY = 'theme';

/**
 * Get the preferred theme (stored or system preference).
 */
function getPreferredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  // Default to light (matching the React app's defaultTheme="light")
  return 'light';
}

/**
 * Apply theme to the document root.
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

/**
 * Toggle between light and dark.
 */
function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
}

/**
 * Initialise theme on load (prevents flash).
 */
export function initTheme() {
  applyTheme(getPreferredTheme());
}

export { toggleTheme };
