(function () {
  const bubbleCssHref = '/css/style-bubbles.css';
  if (!document.querySelector(`link[href="${bubbleCssHref}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = bubbleCssHref;
    document.head.appendChild(link);
  }

  const emergencyCss = document.createElement('style');
  emergencyCss.textContent = `
    :root{--gold:#d7ad4a;--gold2:#ffe4a2;--navy:#061525;--red:#b82226}
    .home-hero{background:linear-gradient(90deg,rgba(6,21,37,.97),rgba(6,21,37,.86) 45%,rgba(6,21,37,.55)),url('/assets/images/us-capitol-flag-bg.svg') center/cover no-repeat!important}
    .poster-slot img[src$='.jpg'],.map-image-slot img[src$='.jpg']{display:none!important}
    .poster-slot,.map-image-slot{background:linear-gradient(135deg,rgba(6,21,37,.30),rgba(6,21,37,.82)),url('/assets/images/us-capitol-flag-bg.svg') center/cover no-repeat!important}
    .poster-frame,.map-frame,.text-panel,.event-card,.fight-card{border-color:rgba(255,228,162,.78)!important;box-shadow:0 18px 50px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,228,162,.12)!important}
    .brand a,.menu a,.resource-tabs a,.gold-bubble,.hero-actions a,.quick-strip a,.resource-pill{background:linear-gradient(135deg,#8b6418,#d7ad4a 45%,#ffe4a2 72%,#9c741e)!important;color:#101010!important}
    .hero-actions a.red{background:linear-gradient(135deg,#8f1117,#b82226,#ef5148)!important;color:#fff!important}
  `;
  document.head.appendChild(emergencyCss);

  const navShell = document.querySelector('.nav');
  const nav = document.querySelector('nav.menu');
  const brand = document.querySelector('.brand');

  if (brand) {
    brand.innerHTML = '<a href="/index.html" aria-label="Gregory R. Smith for Congress home"><span>Gregory R. Smith</span><small>For Congress · A Voice For The People</small></a>';
  }

  const replaceText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      node.nodeValue = node.nodeValue
        .replace(/Donate Today/g, 'Endorse Gregory')
        .replace(/\bDonate\b/g, 'Endorse')
        .replace(/\bDonations Welcome\b/g, 'Endorsements Welcome')
        .replace(/\bContribution\b/g, 'Endorse')
        .replace(/\bContribute\b/g, 'Endorse')
        .replace(/\bPeople Vote\b/g, 'Pledge Center')
        .replace(/\bVote Priorities\b/g, 'Pledge Priorities')
        .replace(/Maui Live Feed/g, 'Campaign Media Center')
        .replace(/Maui live-news/g, 'campaign media')
        .replace(/Newsroom Live/g, 'Media Center');
    });
  };

  replaceText(document.body);

  document.querySelectorAll('a[href="/contribution.html"]').forEach((a) => {
    a.href = '/endorsement.html';
    a.textContent = a.textContent.replace(/Donate Today|Donate|Contribution|Contribute/g, 'Endorse');
  });

  document.querySelectorAll('img[src="/assets/images/the-peoples-voice.jpg"]').forEach((img) => { img.src = '/assets/images/the-peoples-voice.svg'; });
  document.querySelectorAll('img[src="/assets/images/peoples-endorsement.jpg"]').forEach((img) => { img.src = '/assets/images/peoples-endorsement.svg'; });

  if (nav) {
    const items = [
      { href: '/index.html', label: 'Home', match: ['/', '/index.html'] },
      { href: '/about.html', label: 'Meet Gregory', match: ['/about.html'] },
      { href: '/speech.html', label: 'Speech', match: ['/speech.html'] },
      { href: '/priorities.html', label: 'Platform', match: ['/priorities.html', '/issues.html'] },
      { href: '/community-issues.html', label: 'National Issues', match: ['/community-issues.html'] },
      { href: '/resources.html', label: 'Resources', match: ['/resources.html', '/education/'] },
      { href: '/media.html', label: 'Media Center', match: ['/media.html'] },
      { href: '/tour/index.html', label: 'Events', match: ['/tour/', '/events.html'] },
      { href: '/people-vote.html', label: 'Pledge Center', match: ['/people-vote.html'] },
      { href: '/volunteer.html', label: 'Volunteer', match: ['/volunteer.html', '/get-involved.html'] },
      { href: '/endorsement.html', label: 'Endorse', match: ['/endorsement.html', '/contribution.html'] },
      { href: '/contact.html', label: 'Contact', match: ['/contact.html'] }
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
