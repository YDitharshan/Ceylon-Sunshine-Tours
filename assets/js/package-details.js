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
    !menuIcon.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});

/* ====================
   BOOKING TOTAL
==================== */

const guestCount = document.getElementById("guestCount");
const taxAmount = document.getElementById("taxAmount");
const totalAmount = document.getElementById("totalAmount");
const bookingForm = document.getElementById("bookingForm");

const pricePerPerson = 999;
const taxRate = 0.15;

function formatCurrency(amount) {
  return `$${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function updateBookingTotal() {
  if (!guestCount || !taxAmount || !totalAmount) return;

  const guests = Number(guestCount.value);
  const subtotal = pricePerPerson * guests;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  taxAmount.textContent = formatCurrency(tax);
  totalAmount.textContent = formatCurrency(total);
}

if (guestCount) {
  guestCount.addEventListener("change", updateBookingTotal);
}

updateBookingTotal();

/* ====================
   FORM SUBMIT
==================== */

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your booking request has been submitted successfully.");
  });
}