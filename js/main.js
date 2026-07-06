(function () {
  const bubbleCssHref = '/css/style-bubbles.css';
  if (!document.querySelector(`link[href="${bubbleCssHref}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = bubbleCssHref;
    document.head.appendChild(link);
  }

  const navShell = document.querySelector('.nav');
  const nav = document.querySelector('nav.menu');
  const brand = document.querySelector('.brand');

  if (brand) {
    brand.innerHTML = '<a href="/index.html" aria-label="Gregory R. Smith for Congress home"><span>Gregory R. Smith</span><small>For Congress · A Voice For The People</small></a>';
  }

  if (nav) {
    const items = [
      { href: '/index.html', label: 'Home', match: ['/', '/index.html'] },
      { href: '/about.html', label: 'About', match: ['/about.html'] },
      { href: '/speech.html', label: 'Movement', match: ['/speech.html'] },
      { href: '/tour/index.html', label: 'Events', match: ['/tour/', '/events.html'] },
      { href: '/tour/index.html', label: 'Tour', match: ['/tour/index.html'] },
      { href: '/priorities.html', label: 'Issues', match: ['/priorities.html', '/issues.html'] },
      { href: '/volunteer.html', label: 'Volunteer', match: ['/volunteer.html', '/get-involved.html'] },
      { href: '/contribution.html', label: 'Donate', match: ['/contribution.html'] }
    ];

    const current = location.pathname || '/';
    const isCurrent = (matches) => matches.some((path) => path.endsWith('/') ? current.startsWith(path) : current === path);

    nav.setAttribute('aria-label', 'Primary navigation');
    nav.innerHTML = items.map((item) =>
      `<a href="${item.href}"${isCurrent(item.match) ? ' aria-current="page"' : ''}>${item.label}</a>`
    ).join('');

    if (navShell && !navShell.querySelector('.menu-toggle')) {
      const toggle = document.createElement('button');
      toggle.className = 'menu-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', 'site-menu');
      toggle.textContent = 'Menu';
      nav.id = 'site-menu';
      navShell.insertBefore(toggle, nav);

      const closeMenu = () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      };

      toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Close' : 'Menu';
      });

      nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) closeMenu();
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
      });
    }
  }
})();

function submitDemo(event) {
  event.preventDefault();
  alert('This form is not connected yet. No information was sent.');
}
