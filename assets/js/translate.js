const langToggle = document.getElementById("langToggle");
const langFloating = document.querySelector(".lang-floating");
const langItems = document.querySelectorAll(".lang-dropdown li");
const langBtn = document.getElementById("langToggle");

const languageMap = {
  en: "\uD83C\uDF10 EN",
  fr: "\uD83C\uDDEB\uD83C\uDDF7 FR",
  de: "\uD83C\uDDE9\uD83C\uDDEA DE",
  ru: "\uD83C\uDDF7\uD83C\uDDFA RU"
};

function ensureTranslateScript() {
  if (typeof window.ensureGoogleTranslate === "function") {
    window.ensureGoogleTranslate();
  }
}

function setButtonLanguage(lang) {
  if (!langBtn) return;
  langBtn.textContent = languageMap[lang] || languageMap.en;
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
  if (lang === "en") {
    document.cookie = "googtrans=/en/en;path=/";
    window.location.reload();
    return true;
  }

  const select = document.querySelector(".goog-te-combo");
  if (!select) return false;

  select.value = lang;
  select.dispatchEvent(new Event("change"));

  window.setTimeout(forceTranslatedSectionsVisible, 1200);
  return true;
}

function scheduleLanguageApply(lang) {
  if (lang !== "en") {
    ensureTranslateScript();
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    const done = applyLanguage(lang);
    attempts += 1;

    if (done || attempts > 20) {
      window.clearInterval(timer);
    }
  }, 500);
}

if (langToggle && langFloating) {
  langToggle.addEventListener("click", () => {
    ensureTranslateScript();
    langFloating.classList.toggle("active");
  });
}

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang") || "en";

    setButtonLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    scheduleLanguageApply(lang);

    if (langFloating) {
      langFloating.classList.remove("active");
    }
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
    scheduleLanguageApply(savedLang);
  }
});
