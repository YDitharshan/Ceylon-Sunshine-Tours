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

if (langToggle && langFloating) {
  langToggle.addEventListener("click", () => {
    langFloating.classList.toggle("active");
  });
}

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang");

    /* change button immediately */
    setButtonLanguage(lang);

    /* save selected language */
    localStorage.setItem("selectedLanguage", lang);

    /* apply translation */
    const tryTranslate = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(tryTranslate);
      }
    }, 500);

    langFloating.classList.remove("active");
  });
});

/* close dropdown when clicking outside */
document.addEventListener("click", (e) => {
  if (langFloating && !langFloating.contains(e.target)) {
    langFloating.classList.remove("active");
  }
});

/* restore selected language on page load */
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  setButtonLanguage(savedLang);

  if (savedLang !== "en") {
    const tryTranslate = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = savedLang;
        select.dispatchEvent(new Event("change"));
        clearInterval(tryTranslate);
      }
    }, 500);
  }
});