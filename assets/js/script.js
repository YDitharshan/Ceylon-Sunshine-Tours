/*====================
  BLOGS NAV LINK
====================*/
function injectBlogsNavigation() {
  const isBlogPage = document.body.classList.contains("blog-page");
  const navList = document.querySelector(".nav__list");
  const sidebarList = document.querySelector(".sidebar__list");

  if (navList) {
    if (isBlogPage) {
      navList.querySelectorAll(".nav__link--active").forEach((link) => {
        link.classList.remove("nav__link--active");
      });
    }

    let blogLink = navList.querySelector('a[href="blogs.html"]');

    if (!blogLink) {
      const blogItem = document.createElement("li");
      blogItem.className = "nav__item";
      blogItem.innerHTML = '<a href="blogs.html" class="nav__link">Blogs</a>';

      if (navList.lastElementChild) {
        navList.insertBefore(blogItem, navList.lastElementChild);
      } else {
        navList.appendChild(blogItem);
      }

      blogLink = blogItem.querySelector(".nav__link");
    }

    if (isBlogPage && blogLink) {
      blogLink.classList.add("nav__link--active");
    }
  }

  if (sidebarList) {
    if (isBlogPage) {
      sidebarList.querySelectorAll(".sidebar__link--active").forEach((link) => {
        link.classList.remove("sidebar__link--active");
      });
    }

    let blogSidebarLink = sidebarList.querySelector('a[href="blogs.html"]');

    if (!blogSidebarLink) {
      const blogSidebarItem = document.createElement("li");
      blogSidebarItem.className = "sidebar__item";
      blogSidebarItem.innerHTML = '<a href="blogs.html" class="sidebar__link">Blogs</a>';

      if (sidebarList.lastElementChild) {
        sidebarList.insertBefore(blogSidebarItem, sidebarList.lastElementChild);
      } else {
        sidebarList.appendChild(blogSidebarItem);
      }

      blogSidebarLink = blogSidebarItem.querySelector(".sidebar__link");
    }

    if (isBlogPage && blogSidebarLink) {
      blogSidebarLink.classList.add("sidebar__link--active");
    }
  }
}

injectBlogsNavigation();

/*====================
  MOBILE MENU
====================*/
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");

if (menuIcon && sidebar) {
  menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
  });
}

if (closeIcon && sidebar) {
  closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

/*====================
  SIDEBAR DROPDOWN
====================*/
document.addEventListener("DOMContentLoaded", () => {
  const toursLink = document.querySelector(".sidebar__item:nth-child(2) > .sidebar__link");
  const dropdownMenu = document.querySelector(".sidebar__dropdown");

  if (toursLink && dropdownMenu) {
    toursLink.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle("active");
    });
  }
});

/*====================
  DESTINATION PRICE RANGE
====================*/
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const priceField = document.getElementById("priceField");

function updateSlider() {
  if (!minRange || !maxRange || !minPrice || !maxPrice) return;

  let minVal = parseInt(minRange.value, 10);
  let maxVal = parseInt(maxRange.value, 10);

  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal];
    minRange.value = minVal;
    maxRange.value = maxVal;
  }

  minPrice.textContent = minVal;
  maxPrice.textContent = maxVal;
}

if (minRange && maxRange) {
  minRange.addEventListener("input", updateSlider);
  maxRange.addEventListener("input", updateSlider);
  updateSlider();
}

if (priceField) {
  priceField.addEventListener("click", (e) => {
    e.stopPropagation();
    priceField.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    priceField.classList.remove("show");
  });
}

/*====================
  HERO FILTER REDIRECT
====================*/
const heroFilterForm = document.querySelector(".hero-filter__form");
const heroPackage = document.getElementById("hero-package");

if (heroFilterForm && heroPackage) {
  heroFilterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedPackagePage = heroPackage.value;

    if (!selectedPackagePage) {
      alert("Please select a package.");
      return;
    }

    window.location.href = selectedPackagePage;
  });
}

/*====================
  SCROLL REVEAL
====================*/
window.addEventListener("load", () => {
  if (typeof ScrollReveal === "undefined") {
    console.error("ScrollReveal library not loaded.");
    return;
  }

  const sr = ScrollReveal({
    distance: "70px",
    duration: 1200,
    easing: "ease-out",
    reset: false,
    opacity: 0,
    scale: 1
  });

  /* Hero */
  sr.reveal(".home__badge", { origin: "top", delay: 100 });
  sr.reveal(".home__title", { origin: "bottom", delay: 200 });
  sr.reveal(".home__desc", { origin: "bottom", delay: 350 });
  sr.reveal(".hero-filter", { origin: "bottom", delay: 500 });

  /* About */
  sr.reveal(".about__content", { origin: "left", delay: 150 });
  sr.reveal(".about__images", { origin: "right", delay: 250 });

  /* Destination */
  sr.reveal(".destinatio__intro", { origin: "top", delay: 100 });
  sr.reveal(".destination__card", {
    origin: "bottom",
    interval: 120,
    delay: 250
  });

  /* Memories */
  sr.reveal(".memories__intro", { origin: "top", delay: 100 });
  sr.reveal(".memories__images-box", { origin: "left", delay: 200 });
  sr.reveal(".memories__activities", { origin: "right", delay: 300 });

  /* Features */
  sr.reveal(".features__left", { origin: "left", delay: 100 });
  sr.reveal(".features__card-wrapper", {
    origin: "bottom",
    interval: 150,
    delay: 200
  });

  /* Nature */
  sr.reveal(".nature__intro", { origin: "top", delay: 100 });
  sr.reveal(".nature__card", {
    origin: "bottom",
    interval: 120,
    delay: 200
  });

  /* Team / Guide */
  sr.reveal(".guide-details__heading", { origin: "top", delay: 100 });
  sr.reveal(".guide-card", {
    origin: "bottom",
    interval: 120,
    delay: 200
  });

  /* Testimonial */
  sr.reveal(".testimonial__left", { origin: "left", delay: 100 });
  sr.reveal(".testimonial__right", { origin: "right", delay: 200 });

  /* Promo */
  sr.reveal(".promo__text", { origin: "bottom", delay: 100 });

  /* Footer */
  sr.reveal(".footer__header", { origin: "bottom", delay: 100 });
  sr.reveal(".footer__col", {
    origin: "bottom",
    interval: 120,
    delay: 150
  });
  
});

/*====================
  EQUAL BLOG ITINERARY CARDS
====================*/
function syncEqualBlogCardHeights() {
  const grids = document.querySelectorAll(".blog-place-grid--itinerary");

  grids.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll(".blog-place-card"));

    if (!cards.length) return;

    cards.forEach((card) => {
      card.style.height = "";
    });

    if (window.innerWidth <= 900) return;

    const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));

    cards.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  });
}

window.addEventListener("load", syncEqualBlogCardHeights);
window.addEventListener("resize", syncEqualBlogCardHeights);
