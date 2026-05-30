/* ═══════════════════════════════════════════════════════════════
   מתחת לפני השטח · script.js
   ═══════════════════════════════════════════════════════════════ */

/* ─── Typewriter ─────────────────────────────────────────────── */
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const messages = [
    'ברוך הבא למקום שבו לומדים לקרוא את מה שקורה מתחת לפני השטח של השיחה.',
    'המילים אומרות דבר אחד. הגוף, הטון והסאבטקסט לפעמים מספרים סיפור אחר.',
    'פענוח שפת גוף הוא לא לתפוס אנשים — הוא לשאול שאלה טובה יותר.',
  ];

  let msgIdx  = 0;
  let charIdx = 0;
  let deleting = false;
  let timer;

  const TYPING_SPEED  = 42;
  const DELETE_SPEED  = 18;
  const PAUSE_END     = 2600;
  const PAUSE_START   = 380;

  function tick() {
    const msg = messages[msgIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = msg.slice(0, charIdx);
      if (charIdx === msg.length) {
        deleting = true;
        timer = setTimeout(tick, PAUSE_END);
        return;
      }
      timer = setTimeout(tick, TYPING_SPEED);
    } else {
      charIdx--;
      el.textContent = msg.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        msgIdx = (msgIdx + 1) % messages.length;
        timer = setTimeout(tick, PAUSE_START);
        return;
      }
      timer = setTimeout(tick, DELETE_SPEED);
    }
  }

  // Start after a short delay so the page has settled
  timer = setTimeout(tick, 900);
})();


/* ─── Navbar: scroll effect ─────────────────────────────────── */
(function initNavScroll() {
  const topbar = document.getElementById('topbar');
  if (!topbar) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        topbar.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ─── Hamburger menu ─────────────────────────────────────────── */
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const open = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'סגור תפריט' : 'פתח תפריט');
  });

  // Close on nav link click
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'פתח תפריט');
    }
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* ─── Lead form ──────────────────────────────────────────────── */
(function initLeadForm() {
  const form = document.querySelector('.lead-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const data   = new FormData(form);
    const name   = String(data.get('name') || '').trim();

    if (status) {
      status.textContent = name
        ? name + ', הפרטים נקלטו. נעדכן אותך כשנפתחת גישה מוקדמת.'
        : 'הפרטים נקלטו. נעדכן אותך כשנפתחת גישה מוקדמת.';
    }
    form.reset();
  });
})();


/* ─── FAQ: ensure only one open at a time (optional UX) ─────── */
(function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        items.forEach(function (other) {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });
})();
