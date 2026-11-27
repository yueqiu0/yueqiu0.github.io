(() => {
  const methods = [...document.querySelectorAll('.contact-method')];
  const profile = document.querySelector('.profile');

  function setExpanded(method, expanded) {
    method.classList.toggle('is-active', expanded);
    method.querySelector('.contact-toggle').setAttribute('aria-expanded', String(expanded));
    method.querySelector('.contact-info').hidden = !expanded;
  }

  function positionOpenDetails() {
    profile.classList.remove('has-below-contact');
    const active = methods.find((method) => method.classList.contains('is-active'));
    if (!active) return;

    const info = active.querySelector('.contact-info');
    info.classList.remove('is-below');
    if (info.getBoundingClientRect().right > document.documentElement.clientWidth - 20) {
      info.classList.add('is-below');
      profile.classList.add('has-below-contact');
    }
  }

  methods.forEach((method) => {
    method.querySelector('.contact-toggle').addEventListener('click', () => {
      const shouldOpen = !method.classList.contains('is-active');
      methods.forEach((item) => setExpanded(item, false));
      if (shouldOpen) setExpanded(method, true);
      positionOpenDetails();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      methods.forEach((method) => setExpanded(method, false));
      positionOpenDetails();
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.contact-methods')) {
      methods.forEach((method) => setExpanded(method, false));
      positionOpenDetails();
    }
  });

  window.addEventListener('resize', positionOpenDetails);
})();
