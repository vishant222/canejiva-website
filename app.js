const dialog = document.querySelector('#enquiry-dialog');
const openEnquiryButtons = document.querySelectorAll('.js-open-enquiry');
const closeDialogButton = document.querySelector('.dialog-close');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const form = document.querySelector('#enquiry-form');
const film = document.querySelector('#brand-film');
const filmToggle = document.querySelector('#film-toggle');
const heroVideo = document.querySelector('.hero-video');

const startHeroVideo = () => {
  if (!heroVideo) return;
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;
  heroVideo.play().catch(() => {
    // Browsers can still block playback under a data-saver or strict autoplay setting.
  });
};

if (heroVideo) {
  heroVideo.addEventListener('canplay', startHeroVideo, { once: true });
  startHeroVideo();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) startHeroVideo();
  });
}

openEnquiryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (mobileNav) {
      mobileNav.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
    dialog?.showModal();
  });
});

closeDialogButton?.addEventListener('click', () => dialog.close());

dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  const name = new FormData(form).get('name');
  status.textContent = `Thanks, ${name}. Your CANEJIVA enquiry is ready for the team.`;
  form.reset();
});

filmToggle?.addEventListener('click', async () => {
  if (film.paused) {
    await film.play();
    filmToggle.textContent = 'Pause film';
    filmToggle.setAttribute('aria-label', 'Pause brand film');
  } else {
    film.pause();
    filmToggle.textContent = 'Play film';
    filmToggle.setAttribute('aria-label', 'Play brand film');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
