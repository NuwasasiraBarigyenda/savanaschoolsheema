(function () {
  'use strict';
  var S = window.SCHOOL || { news: [], gallery: [] };
  var $ = function (id) { return document.getElementById(id); };

  // Year in footer
  $('year').textContent = new Date().getFullYear();

  // WhatsApp links (number and message come from site-data.js)
  var waUrl = 'https://wa.me/' + S.whatsappNumber + '?text=' + encodeURIComponent(S.whatsappMessage);
  ['wa-link', 'wa-float'].forEach(function (id) { var el = $(id); if (el) el.href = waUrl; });

  // Mobile menu
  var nav = $('nav'), btn = $('menu-btn');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.firstElementChild.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });

  // Notices
  var list = $('news-list');
  if (S.news.length) {
    S.news.forEach(function (n) {
      var d = new Date(n.date + 'T00:00:00');
      var item = document.createElement('article');
      item.className = 'news-item';
      var date = document.createElement('div');
      date.className = 'news-date';
      date.innerHTML = '<b></b><span></span>';
      date.firstChild.textContent = d.getDate();
      date.lastChild.textContent = d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
      var body = document.createElement('div');
      var h = document.createElement('h3'); h.textContent = n.title;
      var p = document.createElement('p'); p.textContent = n.text;
      body.append(h, p);
      item.append(date, body);
      list.appendChild(item);
    });
  } else {
    list.innerHTML = '<p>No notices right now. Please check back soon.</p>';
  }

  // Gallery
  var grid = $('gallery-grid'), box = $('lightbox');
  if (S.gallery.length) {
    S.gallery.forEach(function (g) {
      var fig = document.createElement('button');
      fig.className = 'shot'; fig.type = 'button';
      fig.setAttribute('aria-label', 'View photo: ' + g.caption);
      var img = document.createElement('img');
      img.src = g.src; img.alt = g.caption; img.loading = 'lazy';
      var cap = document.createElement('figcaption'); cap.textContent = g.caption;
      fig.append(img, cap);
      fig.addEventListener('click', function () {
        $('lb-img').src = g.src; $('lb-img').alt = g.caption; $('lb-cap').textContent = g.caption;
        box.showModal();
      });
      grid.appendChild(fig);
    });
  } else {
    for (var i = 0; i < 6; i++) {
      var ph = document.createElement('div');
      ph.className = 'shot empty';
      ph.innerHTML = '<span><i class="fa-regular fa-image"></i>Photo coming soon</span>';
      grid.appendChild(ph);
    }
  }
  box.addEventListener('click', function (e) { if (e.target === box || e.target.closest('.lb-close')) box.close(); });

  // Back to top + active nav link
  var top = $('to-top');
  top.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 600); }, { passive: true });

  var links = nav.querySelectorAll('a');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
  }
})();
