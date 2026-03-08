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

  const travelDate = document.getElementById("travelDate");
  if (travelDate) {
    const today = new Date();
    const tzOffsetMs = today.getTimezoneOffset() * 60000;
    const localISODate = new Date(today.getTime() - tzOffsetMs).toISOString().split("T")[0];
    travelDate.min = localISODate;
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const fullName = String(formData.get("fullName") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const tourType = String(formData.get("tourType") || "").trim();
      const travelDateValue = String(formData.get("travelDate") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!fullName || !email || !phone || !tourType || !travelDateValue || !message) {
        alert("Please fill all required fields.");
        return;
      }

      const phoneNumber = "94767585529";
      const whatsappMessage =
        "Hello Ceylon Sunshine Tours, I want to plan a tour.%0A%0A" +
        "Full Name: " + encodeURIComponent(fullName) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Interested Tour: " + encodeURIComponent(tourType) + "%0A" +
        "Preferred Date: " + encodeURIComponent(travelDateValue) + "%0A" +
        "Message: " + encodeURIComponent(message);

      const whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;
      window.open(whatsappURL, "_blank");

      contactForm.reset();
      alert("Your request is ready in WhatsApp. Please send the message there.");
    });
  }

  const newsletterForm = document.getElementById("contactNewsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for subscribing. We will share our latest offers.");
      newsletterForm.reset();
    });
  }
})();
