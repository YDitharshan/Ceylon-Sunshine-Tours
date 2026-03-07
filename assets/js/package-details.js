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

    const phoneNumber = "94767585529";

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