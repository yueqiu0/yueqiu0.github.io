(() => {
  const methods = [...document.querySelectorAll('.contact-method')];

  function setExpanded(method, expanded) {
    method.classList.toggle('is-active', expanded);
    method.querySelector('.contact-toggle').setAttribute('aria-expanded', String(expanded));
    method.querySelector('.contact-label').hidden = expanded;
    method.querySelector('.contact-info').hidden = !expanded;
  }

  methods.forEach((method) => {
    method.querySelector('.contact-toggle').addEventListener('click', () => {
      const shouldOpen = !method.classList.contains('is-active');
      methods.forEach((item) => setExpanded(item, false));
      if (shouldOpen) setExpanded(method, true);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') methods.forEach((method) => setExpanded(method, false));
  });
})();
