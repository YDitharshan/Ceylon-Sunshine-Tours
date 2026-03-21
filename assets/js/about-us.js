(function () {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");
  const closeIcon = document.getElementById("close-icon");

  function injectBlogsNavigation() {
    const navList = document.querySelector(".nav__list");
    const sidebarList = document.querySelector(".sidebar__list");

    if (navList && !navList.querySelector('a[href="blogs.html"]')) {
      const blogItem = document.createElement("li");
      blogItem.className = "nav__item";
      blogItem.innerHTML = '<a href="blogs.html" class="nav__link">Blogs</a>';

      if (navList.lastElementChild) {
        navList.insertBefore(blogItem, navList.lastElementChild);
      } else {
        navList.appendChild(blogItem);
      }
    }

    if (sidebarList && !sidebarList.querySelector('a[href="blogs.html"]')) {
      const blogItem = document.createElement("li");
      blogItem.className = "sidebar__item";
      blogItem.innerHTML = '<a href="blogs.html" class="sidebar__link">Blogs</a>';

      if (sidebarList.lastElementChild) {
        sidebarList.insertBefore(blogItem, sidebarList.lastElementChild);
      } else {
        sidebarList.appendChild(blogItem);
      }
    }
  }

  injectBlogsNavigation();

  if (menuIcon && sidebar) {
    menuIcon.addEventListener("click", () => sidebar.classList.add("active"));
  }

  if (closeIcon && sidebar) {
    closeIcon.addEventListener("click", () => sidebar.classList.remove("active"));
  }

  document.addEventListener("click", (e) => {
    if (!sidebar || !menuIcon) return;
    if (sidebar.classList.contains("active") && !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });

  function animateCounter(el) {
    const target = Number(el.dataset.count || 0);
    if (!target) return;

    const duration = 1300;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString("en-US");
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll(".stats__number");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));

  const newsletterForm = document.getElementById("aboutNewsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for subscribing to Ceylon Sunshine Tours updates.");
      newsletterForm.reset();
    });
  }

  if (typeof ScrollReveal === "function") {
    const sr = ScrollReveal({
      distance: "150px",
      duration: 1000,
      easing: "ease-out",
      reset: false
    });

    sr.reveal(".header__logo, .top__bar, .main__nav, .topic, .footer__columns", {
      origin: "top",
      interval: 100
    });

    sr.reveal(".about-hero__content, .why-us__content", {
      origin: "left",
      interval: 120
    });

    sr.reveal(".about-hero__images, .why-us__visual", {
      origin: "right",
      interval: 120
    });

    sr.reveal(".why-us__highlight, .why-us__feature, .why-us__stat", {
      origin: "bottom",
      interval: 90,
      delay: 150
    });

    sr.reveal(".stats__intro, .stats__card, .values__intro, .values__card", {
      origin: "bottom",
      interval: 100
    });

    sr.reveal(".guide-details__heading, .guide-card, .about-cta__box", {
      origin: "bottom",
      interval: 100
    });

    sr.reveal(".about-hero__actions .btn, .about-hero__text-link, .about-cta__box .btn, .description", {
      origin: "bottom",
      interval: 80
    });
  }
})();
