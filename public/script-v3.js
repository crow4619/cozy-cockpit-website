const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());

const galleryItems = [...document.querySelectorAll('[data-gallery-item]')];
const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
const lightboxClose = document.querySelector('[data-lightbox-close]');
const lightboxPrevious = document.querySelector('[data-lightbox-previous]');
const lightboxNext = document.querySelector('[data-lightbox-next]');

if (lightbox instanceof HTMLDialogElement && lightboxImage instanceof HTMLImageElement && lightboxCaption) {
  let currentImage = 0;
  let previouslyFocused = null;

  const showImage = (index) => {
    currentImage = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentImage];
    const thumbnail = item.querySelector('img');

    lightboxImage.src = item.href;
    lightboxImage.alt = thumbnail?.alt ?? '';
    lightboxCaption.textContent = item.dataset.caption ?? '';
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      showImage(index);
      if (!lightbox.open) {
        document.body.classList.add('lightbox-open');
        lightbox.showModal();
        lightboxClose?.focus();
      }
    });
  });

  lightboxClose?.addEventListener('click', () => lightbox.close());
  lightboxPrevious?.addEventListener('click', () => showImage(currentImage - 1));
  lightboxNext?.addEventListener('click', () => showImage(currentImage + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      lightbox.close();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(currentImage - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(currentImage + 1);
    }

    if (event.key === 'Tab') {
      const controls = [lightboxClose, lightboxPrevious, lightboxNext].filter((control) => control instanceof HTMLElement);
      const firstControl = controls[0];
      const lastControl = controls[controls.length - 1];

      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault();
        lastControl.focus();
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault();
        firstControl.focus();
      }
    }
  });

  lightbox.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open');
    lightboxImage.removeAttribute('src');
    previouslyFocused?.focus();
    previouslyFocused = null;
  });
}
