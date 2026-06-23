console.log("Script loaded");
  // ============================================================
  // PAGE NAVIGATION
  // KEY CONCEPT: JavaScript DOM manipulation
  // We show/hide pages by toggling a CSS class.
  // document.getElementById finds an element by its id attribute.
  // ============================================================

  function showPage(name) {
    // Remove 'active' from all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Add 'active' to the target page
    document.getElementById('page-' + name).classList.add('active');
    // Scroll back to top
    window.scrollTo(0, 0);
  }

  // ============================================================
  // MODAL LOGIC
  // ============================================================

  function openModal(type) {
    document.getElementById('modal-' + type).classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeModal(type) {
    document.getElementById('modal-' + type).classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close modal if user clicks the dark overlay (not the modal itself)
  function closeModalOnBg(event, type) {
    if (event.target === event.currentTarget) closeModal(type);
  }

  // Switch between sign in and sign up
  function switchModal(from, to) {
    closeModal(from);
    openModal(to);
  }

  // Close modal on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      ['signin', 'signup'].forEach(closeModal);
    }
  });

  // ============================================================
  // BASIC WRITE TOOLBAR (demo only)
  // ============================================================
  function formatText(type) {
    const body = document.getElementById('draft-body');
    const msgs = {
      bold: '**bold text**',
      italic: '_italic text_',
      h1: '\n# Heading 1\n',
      h2: '\n## Heading 2\n',
      quote: '\n> Your blockquote here\n',
      code: '\n```\ncode here\n```\n'
    };
    body.value += msgs[type] || '';
    body.focus();
  }
  gsap.from(".hero-title", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out"
});
document
  .querySelectorAll(
    ".btn-startreading, .btn-getstarted"
  )
  .forEach(btn => {

    btn.addEventListener("mousedown", () => {
      gsap.to(btn, {
        scale: 0.96,
        duration: 0.1
      });
    });

    btn.addEventListener("mouseup", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.2
      });
    });

  });
  document
  .querySelectorAll(
    ".btn-startreading, .btn-getstarted"
  )
  .forEach(btn => {

    btn.addEventListener(
      "mousemove",
      e => {

        const rect =
          btn.getBoundingClientRect();

        const x =
          e.clientX -
          rect.left -
          rect.width / 2;

        const y =
          e.clientY -
          rect.top -
          rect.height / 2;

        gsap.to(btn, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.4,
          ease: "power2.out"
        });

      }
    );

    btn.addEventListener(
      "mouseleave",
      () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease:
            "elastic.out(1,0.3)"
        });
      }
    );

  });