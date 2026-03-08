(function () {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");
  const closeIcon = document.getElementById("close-icon");

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
})();
