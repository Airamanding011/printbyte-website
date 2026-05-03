const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");

menuOpenBtn.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
     768: {
        slidesPerView: 2
    },
     1024: {
        slidesPerView: 3
    }
  }
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // para hindi mag refresh

    // show message
    successMessage.style.display = "block";
    successMessage.textContent = "Successfully sent! ✅";

    // optional: clear form
    form.reset();

    // optional: mawala after 3 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
});

function setService(serviceName) {
    const messageBox = document.querySelector("#contactForm textarea");
    messageBox.value = "Hello! I would like to avail: " + serviceName;
}