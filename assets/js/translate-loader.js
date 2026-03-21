(function () {
  let isLoading = false;

  function ensureGoogleTranslate() {
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      return;
    }

    if (document.querySelector('script[data-google-translate-loader="true"]') || isLoading) {
      return;
    }

    isLoading = true;

    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    script.dataset.googleTranslateLoader = "true";

    script.addEventListener("load", () => {
      isLoading = false;
    });

    script.addEventListener("error", () => {
      isLoading = false;
    });

    (document.body || document.head || document.documentElement).appendChild(script);
  }

  window.ensureGoogleTranslate = ensureGoogleTranslate;

  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang && savedLang !== "en") {
    ensureGoogleTranslate();
  }
})();
