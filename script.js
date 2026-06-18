const toggle = document.getElementById('menu-toggle');
    const navEl  = document.querySelector('nav');
    toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navEl.classList.toggle('open');
    });
    document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navEl.classList.remove('open');
    });
    });

    /* Contact form alert */
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name').trim();
      const email = formData.get('email').trim();
      const message = formData.get('message').trim();

      if (!name || !email || !message) {
        alert('Please complete all fields before transmitting.');
        return;
      }

      alert(`MESSAGE_TRANSMITTED\n\nFrom: ${name}\nEmail: ${email}\nMessage: ${message}`);
      contactForm.reset();
    });

    /* Matrix Rain */
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    let cols, drops;

    const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|/\\'.split('');

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      cols  = Math.floor(canvas.width / 18);
      drops = Array(cols).fill(1);
    }
    resize();
    window.addEventListener('resize', resize);

    function drawRain() {
      ctx.fillStyle = 'rgba(5,10,5,0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff41';
      ctx.font = '14px Share Tech Mono, monospace';
      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(ch, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > .975) drops[i] = 0;
        drops[i]++;
      });
    }
    setInterval(drawRain, 55);

    /* Skill bar animation on scroll */
    function animateBars(entries) {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.transform = `scaleX(${bar.style.getPropertyValue('--w')})`;
          bar.classList.add('animated');
        });
      });
    }

    const barObs = new IntersectionObserver(animateBars, { threshold: .2 });
    document.querySelectorAll('.skill-card').forEach(c => barObs.observe(c));

    /* Fade-up sections */
    const fadeObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: .08 });
    document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));
