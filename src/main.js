import { projectsData } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypewriter();
  initMobileMenu();
  initScrollspy();
  initSkills();
  initProjectsModal();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Effect
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Subtitle Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;

  const phrases = [
    'AI/ML & Cybersecurity',
    'Intelligent Threat Detection',
    'Full-Stack Web Engineering',
    'Native Mobile Applications',
    'DevOps & CI/CD Pipelines'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. Mobile Menu Navigation
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  if (!menuBtn || !menu) return;

  const toggleMenu = () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    } else {
      menu.classList.remove('hidden');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
    }
  };

  menuBtn.addEventListener('click', toggleMenu);

  // Close menu when any mobile nav link is clicked
  const mobileLinks = menu.querySelectorAll('.mobile-nav-link, a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    });
  });
}

/* --------------------------------------------------------------------------
   4. Scrollspy for Active Link Highlighting
   -------------------------------------------------------------------------- */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('#navbar nav .nav-link');
  const mobileNavLinks = document.querySelectorAll('#mobileMenu .mobile-nav-link');

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          updateActiveLink(desktopNavLinks, currentId);
          updateActiveLink(mobileNavLinks, currentId);
        }
      });
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));

  function updateActiveLink(links, currentId) {
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. Skills Filter & Progress Bar Animations
   -------------------------------------------------------------------------- */
function initSkills() {
  const filterTabs = document.querySelectorAll('#skillsFilter .skill-tab');
  const skillCards = document.querySelectorAll('#skillsGrid .skill-card');
  const progressBars = document.querySelectorAll('.skill-progress-bar');

  // Animated progress bars on scroll view
  if (progressBars.length) {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              progressBars.forEach((bar) => {
                const targetWidth = bar.getAttribute('data-width') || '85%';
                bar.style.width = targetWidth;
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(skillsSection);
    }
  }

  // Category Filtering
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Project Details Modal
   -------------------------------------------------------------------------- */
function initProjectsModal() {
  const modal = document.getElementById('projectModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  if (!modal) return;

  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalDesc = document.getElementById('modalDesc');
  const modalStatsGrid = document.getElementById('modalStatsGrid');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalTags = document.getElementById('modalTags');
  const modalGithubBtn = document.getElementById('modalGithubBtn');

  const openModal = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project) return;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
    if (modalBadge) modalBadge.textContent = project.badge;
    if (modalDesc) modalDesc.textContent = project.fullDesc;

    // Stats
    if (modalStatsGrid) {
      modalStatsGrid.innerHTML = project.stats
        .map(
          (stat) => `
          <div class="text-center p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <div class="text-lg sm:text-xl font-bold text-cyan-400 font-mono">${stat.value}</div>
            <div class="text-[11px] text-slate-400 font-medium uppercase tracking-wider">${stat.label}</div>
          </div>
        `
        )
        .join('');
    }

    // Features
    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = project.features
        .map(
          (feat) => `
          <li class="flex items-start space-x-2.5">
            <span class="text-cyan-400 font-bold mt-0.5">✦</span>
            <span>${feat}</span>
          </li>
        `
        )
        .join('');
    }

    // Tags
    if (modalTags) {
      modalTags.innerHTML = project.tags
        .map(
          (tag) => `
          <span class="tag-pill">${tag}</span>
        `
        )
        .join('');
    }

    // GitHub link
    if (modalGithubBtn) {
      modalGithubBtn.href = project.github;
    }

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.add('show');
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 250);
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      if (target) openModal(target);
    });
  });

  closeModalBtn?.addEventListener('click', closeModal);
  modalCloseActionBtn?.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   7. Contact Form Handling & Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  const btnSpinner = document.getElementById('btnSpinner');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (input, errorEl, condition) => {
    if (condition) {
      input.classList.remove('error');
      errorEl?.classList.remove('visible');
      return true;
    } else {
      input.classList.add('error');
      errorEl?.classList.add('visible');
      return false;
    }
  };

  // Realtime clear on typing
  nameInput?.addEventListener('input', () => {
    validateField(nameInput, nameError, nameInput.value.trim().length >= 2);
  });

  emailInput?.addEventListener('input', () => {
    validateField(emailInput, emailError, emailRegex.test(emailInput.value.trim()));
  });

  messageInput?.addEventListener('input', () => {
    validateField(messageInput, messageError, messageInput.value.trim().length >= 10);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput, nameError, nameInput.value.trim().length >= 2);
    const isEmailValid = validateField(emailInput, emailError, emailRegex.test(emailInput.value.trim()));
    const isMessageValid = validateField(messageInput, messageError, messageInput.value.trim().length >= 10);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      showToast('Please correct the highlighted fields before submitting.', 'error');
      return;
    }

    // Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.textContent = 'Sending Message...';
    if (btnIcon) btnIcon.classList.add('hidden');
    if (btnSpinner) btnSpinner.classList.remove('hidden');

    // Simulate reliable dispatch
    setTimeout(() => {
      const senderName = nameInput.value.trim();
      form.reset();

      // Reset button state
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message';
      if (btnIcon) btnIcon.classList.remove('hidden');
      if (btnSpinner) btnSpinner.classList.add('hidden');

      showToast(`Thank you, ${senderName}! Your message was successfully dispatched to Paras Thorat.`, 'success');
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   8. Toast Notification Utility
   -------------------------------------------------------------------------- */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-box ${type === 'success' ? 'toast-success' : 'toast-error'}`;

  const iconSvg =
    type === 'success'
      ? `<svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
      : `<svg class="w-5 h-5 text-rose-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <div class="flex-grow">${message}</div>
    <button class="text-slate-400 hover:text-white ml-2 text-sm focus:outline-none" aria-label="Close Toast">✕</button>
  `;

  const closeBtn = toast.querySelector('button');
  const removeToast = () => {
    toast.style.animation = 'toastOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    setTimeout(() => toast.remove(), 300);
  };

  closeBtn?.addEventListener('click', removeToast);

  container.appendChild(toast);

  setTimeout(removeToast, 4500);
}

/* --------------------------------------------------------------------------
   9. Back to Top Floating Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 350) {
        btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    },
    { passive: true }
  );

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
