(function () {
  const navShell = document.querySelector('.nav');
  const nav = document.querySelector('nav.menu');
  const brand = document.querySelector('.brand');

  if (brand) {
    brand.innerHTML = '<a href="/index.html" aria-label="Gregory R. Smith for Congress home"><span>Gregory R. Smith</span><small>For Congress · We The People Voice</small></a>';
  }

  if (nav) {
    const items = [
      { href: '/index.html', label: 'Home', match: ['/','/index.html'] },
      { href: '/about.html', label: 'Meet Gregory', match: ['/about.html'] },
      { href: '/priorities.html', label: 'Platform', match: ['/priorities.html'] },
      { href: '/echo-wall.html', label: 'Your Voice', match: ['/echo-wall.html'] },
      { href: '/tour/index.html', label: 'Tour & Events', match: ['/tour/','/events.html'] },
      { href: '/media.html', label: 'Media', match: ['/media.html'] },
      { href: '/resources.html', label: 'Resources', match: ['/resources.html','/mental-health.html','/education/','/support-team.html'] },
      { href: '/volunteer.html', label: 'Volunteer', match: ['/volunteer.html'] },
      { href: '/contact.html', label: 'Contact', match: ['/contact.html'] }
    ];

    const current = location.pathname || '/';
    const isCurrent = (matches) => matches.some((path) => path.endsWith('/') ? current.startsWith(path) : current === path);

    nav.setAttribute('aria-label', 'Primary navigation');
    nav.innerHTML = items.map((item) =>
      `<a href="${item.href}"${isCurrent(item.match) ? ' aria-current="page"' : ''}>${item.label}</a>`
    ).join('');

    if (navShell) {
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
