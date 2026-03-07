/*=============== SHOW MENU ===============*/

const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active")
});

closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

/*=============== DropDown MENU ===============*/

document.addEventListener("DOMContentLoaded", function () {
    const toursLink = document.querySelector(".sidebar__item:nth-child(2) > .sidebar__link");
    const dropdownMenu = document.querySelector(".sidebar__dropdown");

    if (toursLink) {
        toursLink.addEventListener("click", function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle("active");
        });
    }
});

 
/*=============== PRICE  RANGE ===============*/


const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const priceField = document.getElementById("priceField");

function updateSlider() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) {
        [minRange.value, maxRange.value] = [maxRange.value, minRange.value];
        [minVal, maxVal] = [maxVal, minVal];
    }

    minPrice.textContent = minVal;
    maxPrice.textContent = maxVal;
}

    minRange.addEventListener("input", updateSlider);
    maxRange.addEventListener("input", updateSlider);

    priceField.addEventListener("click", function (e) {
        e.stopPropagation();
        priceField.classList.toggle("show");
    });

    document.body.addEventListener("click", function () {
        priceField.classList.remove("show");
    });


/*=============== SCROLL REVEAL ANIMATION ===============*/
 

 
const sr = ScrollReveal({
    distance: '150px',
    duration: 1000,
    easing: 'ease-out',
    reset: false
});

sr.reveal('.home__image-girl', {
  origin: 'left',
  interval: 100,
  distance: '50px',
  duration: 1000,
  delay: 300,
});

sr.reveal('.home__title', {
  origin: 'left',
  interval: 100,
  delay: 500
});

sr.reveal('.home__image-plane, .testimonial__wrapper, .memories__images-box', {
  origin: 'left',
  interval: 100, 
});

sr.reveal('.booking-item, .about__one-container, .about__features, .memories__btn-group, .destinatio__search-box', {
  origin: 'bottom',
  interval: 100, 
  delay: 300,
});

sr.reveal('.home__subtitle-text, .memories__activities, .description, .btn, .search-box, .nature__cards, .destination__grid, .promo__btn', {
  origin: 'bottom',
  interval: 100
});

sr.reveal('.home__image-map, .home__image-icon, .about__images, .features__right, .testimonial__right', {
  origin: 'right',
  interval: 100, 
});

sr.reveal('.home__image-plane, .home__image-birds, .heading', {
  origin: 'top',
  interval: 100, 
  delay: 500,
});

sr.reveal('.topic, .footer__columns', {
  origin: 'top',
  interval: 100,  
});