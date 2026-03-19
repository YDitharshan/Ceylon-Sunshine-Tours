const langToggle = document.getElementById("langToggle");
const langFloating = document.querySelector(".lang-floating");
const langItems = document.querySelectorAll(".lang-dropdown li");
const langBtn = document.getElementById("langToggle");

const languageMap = {
  en: "🌐 EN",
  fr: "🇫🇷 FR",
  de: "🇩🇪 DE",
  ru: "🇷🇺 RU"
};

function setButtonLanguage(lang) {
  if (!langBtn) return;
  langBtn.textContent = languageMap[lang] || "🌐 EN";
}

function forceTranslatedSectionsVisible() {
  document.body.classList.add("translated-mode");

  const revealTargets = document.querySelectorAll(`
    .home__badge,
    .home__title,
    .home__desc,
    .hero-filter,
    .about__content,
    .about__images,
    .destinatio__intro,
    .destination__card,
    .memories__intro,
    .memories__images-box,
    .memories__activities,
    .features__left,
    .features__card-wrapper,
    .nature__intro,
    .nature__card,
    .guide-details__heading,
    .guide-card,
    .testimonial__left,
    .testimonial__right,
    .promo__text,
    .footer__header,
    .footer__col
  `);

  revealTargets.forEach((el) => {
    el.style.opacity = "1";
    el.style.visibility = "visible";
    el.style.transform = "none";
    el.style.filter = "none";
  });
}

function applyLanguage(lang) {
  const select = document.querySelector(".goog-te-combo");

  if (!select) return false;

  if (lang === "en") {
    // Reset to English (IMPORTANT FIX)
    document.cookie = "googtrans=/en/en;path=/";
    location.reload(); // reload page to remove translation
    return true;
  }

  select.value = lang;
  select.dispatchEvent(new Event("change"));

  setTimeout(() => {
    forceTranslatedSectionsVisible();
  }, 1200);

  return true;
}

if (langToggle && langFloating) {
  langToggle.addEventListener("click", () => {
    langFloating.classList.toggle("active");
  });
}

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang");

    setButtonLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);

    let attempts = 0;
    const timer = setInterval(() => {
      const done = applyLanguage(lang);
      attempts++;

      if (done || attempts > 20) {
        clearInterval(timer);
      }
    }, 500);

    langFloating.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (langFloating && !langFloating.contains(e.target)) {
    langFloating.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  setButtonLanguage(savedLang);

  if (savedLang !== "en") {
    let attempts = 0;
    const timer = setInterval(() => {
      const done = applyLanguage(savedLang);
      attempts++;

      if (done || attempts > 20) {
        clearInterval(timer);
      }
    }, 500);
  }
});