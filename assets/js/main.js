// ── Custom Mobile Nav ────────────────────────────────────────────────────────
(function () {
  var trigger  = document.getElementById('navTrigger');
  var overlay  = document.getElementById('fxNavOverlay');
  var closeBtn = document.getElementById('navClose');

  function openNav() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (trigger)  trigger.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // close on overlay backdrop click
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeNav();
    });
  }

  // close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();

// ── GSAP Hero Animation ──────────────────────────────────────────────────────

(function () {
  // Split h1 into per-character spans
  var h1 = document.querySelector('.banner-text h1');
  if (h1) {
    h1.innerHTML = h1.textContent.split('').map(function (ch) {
      return ch === ' '
        ? '<span class="gsap-char" style="display:inline-block;">&nbsp;</span>'
        : '<span class="gsap-char" style="display:inline-block;">' + ch + '</span>';
    }).join('');
  }

  // Split h5 into per-word spans (slide-up mask effect)
  var h5 = document.querySelector('.banner-text h5');
  if (h5) {
    h5.innerHTML = h5.textContent.split(' ').map(function (word) {
      return '<span style="display:inline-block;overflow:hidden;vertical-align:bottom;">' +
             '<span class="gsap-word" style="display:inline-block;">' + word + '</span>' +
             '</span>';
    }).join(' ');
  }

  var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // h5 words slide up from mask
  tl.from('.banner-text h5 .gsap-word', {
    y: '110%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.06,
  })

  // h1 chars flip in with 3-D rotation
  .from('.banner-text h1 .gsap-char', {
    opacity: 0,
    y: 50,
    rotationX: -90,
    transformOrigin: '50% 50% -30px',
    duration: 0.55,
    stagger: 0.025,
    ease: 'back.out(1.5)',
  }, '-=0.4')

  // paragraph fade + rise
  .from('.banner-text p', {
    opacity: 0,
    y: 28,
    duration: 0.8,
  }, '-=0.3')

  // CTA button bounce in
  .from('.banner-text .primary-btn', {
    opacity: 0,
    y: 20,
    scale: 0.85,
    duration: 0.6,
    ease: 'back.out(1.8)',
  }, '-=0.5')

  // Hero image slides in from right
  .from('.banner-thumb', {
    opacity: 0,
    x: 90,
    duration: 1,
    ease: 'power2.out',
  }, '-=1.4');
})();

// ─────────────────────────────────────────────────────────────────────────────

jQuery(document).ready(function ($) {
  new WOW().init()

  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  })

  $('.testimonial-sliders').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})
