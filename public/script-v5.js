// Keep the opening key art clear; reveal navigation as the hero leaves the viewport.
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');
if (header && hero) {
  const setNavigationVisible = (visible) => {
    if (!visible && header.contains(document.activeElement)) {
      document.querySelector('#hero-title')?.focus({ preventScroll: true });
    }
    header.inert = !visible;
    header.setAttribute('aria-hidden', String(!visible));
    header.classList.toggle('is-visible', visible);
  };
  // Reveal one pixel before the 96px anchor offset, including exact anchor landings.
  const updateNavigation = () => setNavigationVisible(hero.getBoundingClientRect().bottom <= 97);
  updateNavigation();
  const observer = new IntersectionObserver(updateNavigation, { rootMargin: '-97px 0px 0px 0px' });
  observer.observe(hero);
  window.addEventListener('pageshow', updateNavigation);
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

// Keep third-party video requests behind an explicit play action.
const trailerLink = document.querySelector('[data-play-trailer]');
const trailer = document.querySelector('[data-trailer]');
if (trailerLink && trailer) {
  trailerLink.addEventListener('click', (event) => {
    // Preserve normal link behavior for opening the fallback in another tab.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/hgC0cigvGh0?rel=0&autoplay=1';
    iframe.title = 'Cozy Cockpit gameplay trailer';
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    trailer.replaceChildren(iframe);
    iframe.focus();
  });
}
