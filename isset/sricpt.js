let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + "%";
  document.querySelector(".carousel-inner").style.transform = "translateX(" + newTransformValue + ")";

  // Hide all captions
  document.querySelectorAll(".carousel-caption").forEach((caption) => {
    caption.style.display = "none";
  });

  // Display caption for the current slide
  document.querySelector(".carousel-item:nth-child(" + (currentIndex + 1) + ") .carousel-caption").style.display = "block";
}

// Optional: Auto slide change every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);

// slider nyaa ==================================================
document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const radioButtons = document.querySelectorAll(".radio-container input[type='radio']");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${-index * 100}%)`;
    });
  }

  function updateRadioButton(index) {
    radioButtons.forEach((radioButton, i) => {
      radioButton.checked = i === index;
    });
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    updateRadioButton(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updateRadioButton(currentIndex);
  }

  prevBtn.addEventListener("click", prevSlide);
  prevBtn.style.cursor = "pointer"; // Set cursor to pointer on hover
  nextBtn.addEventListener("click", nextSlide);
  nextBtn.style.cursor = "pointer"; // Set cursor to pointer on hover

  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener("change", () => {
      currentIndex = index;
      showSlide(currentIndex);
      updateRadioButton(currentIndex);
    });
  });

  function goToPage(index) {
    currentIndex = index;
    showSlide(currentIndex);
    updateRadioButton(currentIndex);
  }

  // Example: go to page 1 when radio button 2 is clicked
  radioButtons[1].addEventListener("change", () => {
    goToPage(1);
    // Add more conditions for other radio buttons as needed
  });

  // Autoplay functionality
  function autoplay() {
    nextSlide();
  }

  setInterval(autoplay, 3000); // Change slide every 3000 milliseconds (3 seconds)
});

// ===================================================================
// untuk konten kegiatanlet currentIndexs = 0;

// ==========================================================
// kegiatan
let jere = 0;
const intervalDuration = 5000; // 5 detik

const kontenItems = document.querySelectorAll(".container-kegiatan .colkiri .konten");
const totalitem = kontenItems.length; // Menggunakan totalitem

const imgItems = document.querySelectorAll(".container-kegiatan .colkanan .img");

const sebelumBtn = document.getElementById("sebelum");
const selanjutnyaBtn = document.getElementById("selanjutnya");

function showItem(index) {
  kontenItems.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });

  imgItems.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

function updateSlider() {
  jere++;
  if (jere >= totalitem) {
    jere = 0;
  }
  showItem(jere);
}

function startAutoSlide() {
  return setInterval(() => {
    updateSlider();
  }, intervalDuration);
}

function sebelumSlide() {
  jere--;
  if (jere < 0) {
    jere = totalitem - 1;
  }
  showItem(jere);
}

function selanjutnyaSlide() {
  updateSlider();
}

// Mendengarkan peristiwa untuk tombol slider
sebelumBtn.addEventListener("click", sebelumSlide);
selanjutnyaBtn.addEventListener("click", selanjutnyaSlide);

// Mulai slider otomatis
let autoSlideInterval = startAutoSlide();

// Menanggapi interaksi pengguna untuk menghentikan otomatis slider
document.querySelector(".container-kegiatan").addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

document.querySelector(".container-kegiatan").addEventListener("mouseleave", () => {
  autoSlideInterval = startAutoSlide();
});

// Menampilkan item awal
showItem(jere);

// pengumuman
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
