// Keep links available until the menu behaviour has successfully initialised.
document.querySelectorAll('.main-nav').forEach((nav) => {
  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('ul');
  const mobile = window.matchMedia('(max-width: 1100px)');
  if (!toggle || !links) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    links.hidden = mobile.matches && !open;
  };
  const syncViewport = () => {
    const hadFocus = links.contains(document.activeElement);
    toggle.hidden = !mobile.matches;
    setOpen(false);
    if (mobile.matches && hadFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches) {
      setOpen(false);
      toggle.focus();
    }
  });
  mobile.addEventListener('change', syncViewport);
  syncViewport();
});
