/**
 * app.js — Bundled static resume site script (no ES modules)
 * Works with file:// protocol and any static hosting.
 */

(function () {
  'use strict';

  /* ================================================
     THEME
     ================================================ */

  var STORAGE_KEY = 'theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleTheme() {
    var current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply theme immediately to prevent flash
  applyTheme(getPreferredTheme());

  /* ================================================
     BLUR FADE — Intersection Observer
     ================================================ */

  function initBlurFade() {
    var elements = document.querySelectorAll('.blur-fade');

    if (!('IntersectionObserver' in window)) {
      // Fallback: show all immediately
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-30px',
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ================================================
     FLICKERING GRID — Canvas animation
     ================================================ */

  function initFlickeringGrid(canvas, opts) {
    opts = opts || {};
    var squareSize = opts.squareSize || 2;
    var gridGap = opts.gridGap || 2;
    var flickerChance = opts.flickerChance || 0.3;
    var maxOpacity = opts.maxOpacity || 0.3;

    if (!canvas) return;
    var container = canvas.parentElement;
    if (!container) return;

    var animationId;
    var cols, rows, squares, dpr;
    var lastTime = 0;

    function resolveColor() {
      var el = document.createElement('div');
      el.style.color = 'var(--foreground)';
      el.style.position = 'absolute';
      el.style.visibility = 'hidden';
      document.body.appendChild(el);
      var c = window.getComputedStyle(el).color;
      document.body.removeChild(el);
      return c || 'rgb(0,0,0)';
    }

    function toRGBA(colorStr) {
      var tiny = document.createElement('canvas');
      tiny.width = tiny.height = 1;
      var ctx2 = tiny.getContext('2d');
      if (!ctx2) return 'rgba(0,0,0,';
      ctx2.fillStyle = colorStr;
      ctx2.fillRect(0, 0, 1, 1);
      var d = ctx2.getImageData(0, 0, 1, 1).data;
      return 'rgba(' + d[0] + ',' + d[1] + ',' + d[2] + ',';
    }

    function setup(w, h) {
      dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      cols = Math.floor(w / (squareSize + gridGap));
      rows = Math.floor(h / (squareSize + gridGap));
      squares = new Float32Array(cols * rows);
      for (var i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    }

    function update(dt) {
      for (var i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * dt) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    }

    function draw(ctx, colorRGBA) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          var opacity = squares[i * rows + j];
          ctx.fillStyle = colorRGBA + opacity + ')';
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      }
    }

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var w = container.clientWidth || 200;
    var h = container.clientHeight || 100;
    setup(w, h);

    var colorRGBA = toRGBA(resolveColor());

    // Update colour on theme change
    var themeObserver = new MutationObserver(function () {
      colorRGBA = toRGBA(resolveColor());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Resize observer
    if ('ResizeObserver' in window) {
      var resizeObserver = new ResizeObserver(function () {
        var nw = container.clientWidth;
        var nh = container.clientHeight;
        setup(nw, nh);
      });
      resizeObserver.observe(container);
    }

    function loop(time) {
      var dt = (time - lastTime) / 1000;
      lastTime = time;
      update(dt);
      draw(ctx, colorRGBA);
      animationId = requestAnimationFrame(loop);
    }

    animationId = requestAnimationFrame(loop);
  }

  /* ================================================
     ACCORDION
     ================================================ */

  function initAccordion() {
    document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = trigger.closest('.accordion-item');
        if (!item) return;

        var isOpen = item.classList.contains('open');

        // Close all items
        document.querySelectorAll('.accordion-item.open').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove('open');
            var btn = openItem.querySelector('.accordion-trigger');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle this item
        if (isOpen) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ================================================
     NAVIGATION
     ================================================ */

  function initNavigation() {
    // Active nav item
    var path = window.location.pathname;
    document.querySelectorAll('.dock-icon[data-path]').forEach(function (el) {
      var elPath = el.getAttribute('data-path');
      if (path === elPath || (elPath !== '/' && path.startsWith(elPath))) {
        el.classList.add('active');
      }
    });

    // Theme toggle
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = anchor.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ================================================
     BOOT
     ================================================ */

  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initBlurFade();

    // Flickering grid canvases
    document.querySelectorAll('[data-flickering-grid]').forEach(function (canvas) {
      initFlickeringGrid(canvas, {
        squareSize: 2,
        gridGap: 2,
        flickerChance: 0.3,
        maxOpacity: 0.3,
      });
    });

    initAccordion();
  });
})();
