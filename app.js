const dialog = document.querySelector('#enquiry-dialog');
const openEnquiryButtons = document.querySelectorAll('.js-open-enquiry');
const closeDialogButton = document.querySelector('.dialog-close');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const form = document.querySelector('#enquiry-form');
const film = document.querySelector('#brand-film');
const filmToggle = document.querySelector('#film-toggle');
const heroVideo = document.querySelector('.hero-video');

const compactFooter = document.querySelector('.compact-footer');
if (compactFooter && !compactFooter.querySelector('.social-links')) {
  const socialBlock = document.createElement('div');
  socialBlock.className = 'compact-social wrap';
  socialBlock.innerHTML = `
    <p class="footer-label">Follow CANEJIVA</p>
    <div class="social-links" aria-label="CANEJIVA social media">
      <span class="social-link" role="img" aria-label="Instagram link coming soon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6" r="1" /></svg></span>
      <span class="social-link" role="img" aria-label="Facebook link coming soon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4C17.3 1.2 16.3 1 15 1c-3.5 0-5.5 2.1-5.5 5.8V9H6v4h3.5v8z" /></svg></span>
      <a class="social-link" href="https://youtu.be/3LEk18bEFeU?si=CiGf38M4_G-OLWWr" target="_blank" rel="noopener noreferrer" aria-label="Watch CANEJIVA on YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7a3 3 0 0 0-2-2C19 4.5 12 4.5 12 4.5s-7 0-9 .5a3 3 0 0 0-2 2A31 31 0 0 0 .5 12 31 31 0 0 0 1 17a3 3 0 0 0 2 2c2 .5 9 .5 9 .5s7 0 9-.5a3 3 0 0 0 2-2 31 31 0 0 0 .5-5 31 31 0 0 0-.5-5z" /><path class="social-icon-cutout" d="m10 15.5 5-3.5-5-3.5z" /></svg></a>
      <span class="social-link" role="img" aria-label="LinkedIn link coming soon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.5A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.5ZM3.3 9h3.8v12H3.3zM9.5 9h3.6v1.6h.1A4 4 0 0 1 16.8 8c3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-6.4c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5z" /></svg></span>
      <a class="social-link" href="https://wa.me/919557555457" target="_blank" rel="noopener noreferrer" aria-label="Chat with CANEJIVA on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 2.1 17.6L.5 23.5l6-1.6A11.7 11.7 0 0 0 20.5 3.5ZM12 21a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-3.6 1 1-3.5-.2-.4A9.7 9.7 0 1 1 12 21Zm5.3-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.2-.3-.3-.6-.4Z" /></svg></a>
    </div>
    <p class="social-note">Instagram, Facebook and LinkedIn links coming soon.</p>`;
  compactFooter.insertBefore(socialBlock, compactFooter.querySelector('.footer-bottom'));
}

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
    filmToggle.dataset.state = 'playing';
    filmToggle.setAttribute('aria-label', 'Pause brand film');
    filmToggle.title = 'Pause film';
  } else {
    film.pause();
    filmToggle.dataset.state = 'paused';
    filmToggle.setAttribute('aria-label', 'Play brand film');
    filmToggle.title = 'Play film';
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
