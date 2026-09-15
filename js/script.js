document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    hamburgerBtn.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });


  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'koma-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeToggle.setAttribute('aria-pressed', 'true');
      themeToggle.setAttribute('aria-label', 'Ganti ke mode terang');
    } else {
      root.removeAttribute('data-theme');
      themeToggle.setAttribute('aria-pressed', 'false');
      themeToggle.setAttribute('aria-label', 'Ganti ke mode gelap');
    }
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  themeToggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  });


  const slides = Array.from(document.querySelectorAll('.slider__slide'));
  const dotsWrap = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  let currentSlide = 0;
  let autoplayTimer = null;

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Ke slide ${index + 1}`);
    if (index === 0) dot.classList.add('is-active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goToSlide(index) {
    slides[currentSlide].classList.remove('is-active');
    slides[currentSlide].setAttribute('aria-hidden', 'true');
    dots[currentSlide].classList.remove('is-active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('is-active');
    slides[currentSlide].setAttribute('aria-hidden', 'false');
    dots[currentSlide].classList.add('is-active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 5000);
  }
  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
  prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });

  const sliderEl = document.getElementById('slider');
  sliderEl.addEventListener('mouseenter', stopAutoplay);
  sliderEl.addEventListener('mouseleave', startAutoplay);

  startAutoplay();

  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('is-visible', window.scrollY > 420);
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const panels = document.querySelectorAll('.panel');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    panels.forEach((panel) => observer.observe(panel));
  } else {
    panels.forEach((panel) => panel.classList.add('is-visible'));
  }

});
