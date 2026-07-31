document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // MOBILE NAVIGATION
  // ============================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        icon.className = 'fas fa-bars';
      });
    });
  }

  // ============================================================
  // DARK MODE TOGGLE
  // ============================================================
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const icon = themeToggle.querySelector('i');
      if (document.body.classList.contains('dark')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
      } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // ============================================================
  // MODAL (Sign In / Sign Up)
  // ============================================================
  const modal = document.getElementById('authModal');
  const trigger = document.getElementById('authTrigger');
  const closeBtn = document.getElementById('modalClose');
  const switchAction = document.getElementById('switchAction');
  const switchText = document.getElementById('switchText');
  const modalTitle = document.getElementById('modalTitle');
  const modalSub = document.getElementById('modalSub');
  const authSubmit = document.getElementById('authSubmit');
  const authForm = document.getElementById('authForm');

  let isSignIn = true;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleAuthMode() {
    isSignIn = !isSignIn;
    if (isSignIn) {
      modalTitle.textContent = 'Welcome back';
      modalSub.textContent = 'Sign in to your account or create a new one.';
      authSubmit.textContent = 'Sign In';
      switchText.textContent = "Don't have an account?";
      switchAction.textContent = 'Sign Up';
    } else {
      modalTitle.textContent = 'Join Gleamer';
      modalSub.textContent = 'Create your account and get started.';
      authSubmit.textContent = 'Sign Up';
      switchText.textContent = 'Already have an account?';
      switchAction.textContent = 'Sign In';
    }
  }

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  switchAction.addEventListener('click', toggleAuthMode);

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const pass = document.getElementById('authPassword').value.trim();
    if (email && pass) {
      alert(isSignIn ? 'Signed in successfully!' : 'Account created successfully!');
      closeModal();
      authForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });

  // ============================================================
  // SERVICES POPUP (View all services)
  // ============================================================
  const popup = document.getElementById('servicesPopup');
  const viewAllBtn = document.getElementById('viewAllBtn');
  const popupClose = document.getElementById('popupClose');

  function openPopup() {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewAllBtn.addEventListener('click', openPopup);
  popupClose.addEventListener('click', closePopup);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  // ============================================================
  // BOOK & CONTACT BUTTONS (scroll to contact/quote)
  // ============================================================
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }

  // Book buttons
  const bookButtons = [
    document.getElementById('bookNavBtn'),
    document.getElementById('heroBookBtn'),
    ...document.querySelectorAll('.book-btn')
  ];

  bookButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToContact();
      });
    }
  });

  // Contact buttons
  const contactButtons = [
    document.getElementById('contactBtn'),
    document.getElementById('quoteBtn'),
    document.querySelector('.footer-col ul a[href="#contact"]')
  ];

  contactButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToContact();
      });
    }
  });

  // ============================================================
  // CAROUSEL
  // ============================================================
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (track && prevBtn && nextBtn) {
    const slides = track.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0]?.offsetWidth || 440;
    const gap = 40;
    const totalWidth = slideWidth + gap;
    let currentIndex = 0;
    const maxIndex = slides.length - 1;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * totalWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
    });

    let autoPlay = setInterval(() => {
      if (currentIndex < maxIndex) { currentIndex++; } else { currentIndex = 0; }
      updateCarousel();
    }, 5000);

    const carouselWrapper = track.closest('.carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
      carouselWrapper.addEventListener('mouseleave', () => {
        autoPlay = setInterval(() => {
          if (currentIndex < maxIndex) { currentIndex++; } else { currentIndex = 0; }
          updateCarousel();
        }, 5000);
      });
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newSlideWidth = slides[0]?.offsetWidth || 440;
        const newTotalWidth = newSlideWidth + gap;
        track.style.transform = `translateX(-${currentIndex * newTotalWidth}px)`;
      }, 250);
    });
  }

  // ============================================================
  // FORMS
  // ============================================================
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your interest! Our team will contact you shortly.');
      quoteForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing! You\'ll receive our latest updates.');
      newsletterForm.reset();
    });
  }

  // ============================================================
  // SMOOTH SCROLL
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ============================================================
  // ACTIVE NAV LINK ON SCROLL
  // ============================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  if (sections.length && navLinkItems.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

});
