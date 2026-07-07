/**
 * animations.js — Scroll-triggered blur-fade animations
 * and flickering grid canvas effect.
 */

/* ================================================
   BLUR FADE — Intersection Observer
   ================================================ */

/**
 * Set up IntersectionObserver on all .blur-fade elements.
 * Elements become visible when they enter the viewport.
 */
export function initBlurFade() {
  const elements = document.querySelectorAll('.blur-fade');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visible, unobserve to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '-50px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ================================================
   FLICKERING GRID — Canvas animation
   ================================================ */

/**
 * Start a flickering pixel grid on a given canvas element.
 * @param {HTMLCanvasElement} canvas
 * @param {object} opts
 */
export function initFlickeringGrid(canvas, opts = {}) {
  const {
    squareSize = 2,
    gridGap = 2,
    flickerChance = 0.3,
    maxOpacity = 0.3,
    color = null,
  } = opts;

  if (!canvas) return;

  const container = canvas.parentElement;
  if (!container) return;

  let animationId;
  let cols, rows, squares, dpr;
  let isInView = false;
  let lastTime = 0;

  // Resolve the foreground colour from CSS variables
  function resolveColor() {
    if (color) return color;
    const el = document.createElement('div');
    el.style.color = 'var(--foreground)';
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    document.body.appendChild(el);
    const c = window.getComputedStyle(el).color;
    document.body.removeChild(el);
    return c || 'rgb(0,0,0)';
  }

  function toRGBA(colorStr) {
    const tiny = document.createElement('canvas');
    tiny.width = tiny.height = 1;
    const ctx2 = tiny.getContext('2d');
    if (!ctx2) return 'rgba(0,0,0,';
    ctx2.fillStyle = colorStr;
    ctx2.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(ctx2.getImageData(0, 0, 1, 1).data);
    return `rgba(${r},${g},${b},`;
  }

  function setup(w, h) {
    dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    cols = Math.floor(w / (squareSize + gridGap));
    rows = Math.floor(h / (squareSize + gridGap));
    squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * maxOpacity;
    }
  }

  function update(dt) {
    for (let i = 0; i < squares.length; i++) {
      if (Math.random() < flickerChance * dt) {
        squares[i] = Math.random() * maxOpacity;
      }
    }
  }

  function draw(ctx, colorRGBA) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const opacity = squares[i * rows + j];
        ctx.fillStyle = `${colorRGBA}${opacity})`;
        ctx.fillRect(
          i * (squareSize + gridGap) * dpr,
          j * (squareSize + gridGap) * dpr,
          squareSize * dpr,
          squareSize * dpr
        );
      }
    }
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Initial setup
  const w = container.clientWidth || 200;
  const h = container.clientHeight || 100;
  setup(w, h);

  let colorRGBA = toRGBA(resolveColor());

  // Update colour on theme change
  const themeObserver = new MutationObserver(() => {
    colorRGBA = toRGBA(resolveColor());
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  // Resize observer
  const resizeObserver = new ResizeObserver(() => {
    const nw = container.clientWidth;
    const nh = container.clientHeight;
    setup(nw, nh);
  });
  resizeObserver.observe(container);

  // Intersection observer
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    isInView = entry.isIntersecting;
    if (isInView && !animationId) {
      lastTime = performance.now();
      animationId = requestAnimationFrame(loop);
    }
  }, { threshold: 0 });
  intersectionObserver.observe(canvas);

  function loop(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;
    update(dt);
    draw(ctx, colorRGBA);
    animationId = requestAnimationFrame(loop);
  }

  // Start immediately
  isInView = true;
  animationId = requestAnimationFrame(loop);
}
