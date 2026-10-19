// Enable the compact menu only after its behaviour is available.
document.documentElement.classList.add('nav-enhanced');

document.querySelectorAll('.main-nav').forEach((nav) => {
  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('ul');
  const header = nav.closest('.site-header');
  const desktopCall = header?.querySelector('.header-contact[href^="tel:"]');
  const mobileCall = header?.querySelector('.mobile-call');
  const mobile = window.matchMedia('(max-width: 1100px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const closeDuration = 180;

  if (!toggle || !links || !header) return;

  let closeTimer;
  let openScrollY = window.scrollY;

  const phoneHref = desktopCall?.getAttribute('href')?.trim() || '';
  const phoneNumber = phoneHref.replace(/^tel:/i, '');
  const hasValidPhone = /^[+\d][\d\s().-]+$/.test(phoneNumber)
    && phoneNumber.replace(/\D/g, '').length >= 7;

  if (desktopCall) desktopCall.hidden = !hasValidPhone;
  if (mobileCall) {
    mobileCall.hidden = !hasValidPhone;
    if (hasValidPhone) mobileCall.href = phoneHref;
  }
  header.classList.toggle('has-mobile-call', hasValidPhone);

  const finishClose = () => {
    if (mobile.matches && toggle.getAttribute('aria-expanded') === 'false') {
      links.hidden = true;
    }
  };

  const setOpen = (open, { restoreFocus = false } = {}) => {
    const focusWasInMenu = links.contains(document.activeElement);
    const shouldOpen = mobile.matches && open;

    window.clearTimeout(closeTimer);
    toggle.setAttribute('aria-expanded', String(shouldOpen));
    toggle.setAttribute('aria-label', shouldOpen ? 'Close main menu' : 'Open main menu');

    if (shouldOpen) {
      links.hidden = false;
      links.removeAttribute('inert');
      links.removeAttribute('aria-hidden');
      openScrollY = window.scrollY;

      // Commit the closed state before applying the opening transition.
      void links.offsetHeight;
      nav.classList.add('is-open');
    } else {
      nav.classList.remove('is-open');

      if (mobile.matches) {
        links.setAttribute('inert', '');
        links.setAttribute('aria-hidden', 'true');

        if (reducedMotion.matches) {
          finishClose();
        } else {
          closeTimer = window.setTimeout(finishClose, closeDuration);
        }
      } else {
        links.hidden = false;
        links.removeAttribute('inert');
        links.removeAttribute('aria-hidden');
      }
    }

    if (!shouldOpen && restoreFocus && focusWasInMenu) toggle.focus();
  };

  const syncViewport = () => {
    const focusWasInMenu = links.contains(document.activeElement);
    toggle.hidden = !mobile.matches;
    setOpen(false, { restoreFocus: mobile.matches && focusWasInMenu });
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  links.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches
      && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false, { restoreFocus: true });
    }
  });

  document.addEventListener('click', (event) => {
    if (mobile.matches && toggle.getAttribute('aria-expanded') === 'true'
      && !nav.contains(event.target)) {
      setOpen(false);
    }
  });

  window.addEventListener('scroll', () => {
    if (mobile.matches && toggle.getAttribute('aria-expanded') === 'true'
      && Math.abs(window.scrollY - openScrollY) > 2) {
      setOpen(false, { restoreFocus: true });
    }
  }, { passive: true });

  const listenForChange = (query, handler) => {
    if (query.addEventListener) query.addEventListener('change', handler);
    else query.addListener(handler);
  };

  listenForChange(mobile, syncViewport);
  listenForChange(reducedMotion, () => {
    if (reducedMotion.matches) finishClose();
  });
  syncViewport();
});
