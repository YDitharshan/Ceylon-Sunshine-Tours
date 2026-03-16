/* ====================
   MOBILE MENU
==================== */

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

document.addEventListener("click", (e) => {
  if (
    sidebar &&
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    menuIcon &&
    !menuIcon.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});

/* ====================
   WHATSAPP BOOKING
==================== */

const bookingForm = document.getElementById("bookingForm");
const fullName = document.getElementById("fullName");
const tourPackage = document.getElementById("tourPackage");
const startDate = document.getElementById("startDate");
const guestCount = document.getElementById("guestCount");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = fullName.value.trim();
    const packageValue = tourPackage.value;
    const dateValue = startDate.value;
    const guestsValue = guestCount.value;

    if (!nameValue || !packageValue || !dateValue || !guestsValue) {
      alert("Please fill all booking details.");
      return;
    }

    const phoneNumber = "94761549030";

    const message =
      `Hello Travilia, I want to book a tour.\n\n` +
      `Full Name: ${nameValue}\n` +
      `Tour Package: ${packageValue}\n` +
      `Starting Date: ${dateValue}\n` +
      `Number of Guests: ${guestsValue}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  });
}

/* ====================
   GALLERY LIGHTBOX
==================== */

const galleryImages = document.querySelectorAll(".package-gallery__img");
const lightbox = document.getElementById("galleryLightbox");
const lightboxImg = document.getElementById("galleryLightboxImg");
const galleryClose = document.getElementById("galleryClose");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

let currentImageIndex = 0;
const imageSources = Array.from(galleryImages).map((img) => img.src);

const galleryOpenBtn = document.querySelector(".package-hero__gallery-btn");

if (galleryOpenBtn) {
  galleryOpenBtn.addEventListener("click", () => {
    openLightbox(0);
  });
}

function showImage(index) {
  if (!lightboxImg || imageSources.length === 0) return;
  currentImageIndex = index;
  lightboxImg.src = imageSources[currentImageIndex];
}

function openLightbox(index) {
  if (!lightbox) return;
  showImage(index);
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function showNextImage() {
  if (imageSources.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  showImage(currentImageIndex);
}

function showPrevImage() {
  if (imageSources.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
  showImage(currentImageIndex);
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

if (galleryClose) {
  galleryClose.addEventListener("click", closeLightbox);
}

if (galleryNext) {
  galleryNext.addEventListener("click", showNextImage);
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", showPrevImage);
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("active")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});