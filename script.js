(function () {
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú hamburguesa (mobile)
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".carousel").forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-image");
    const dots = carousel.querySelectorAll(".dot");

    let current = 0;

    function showSlide(index) {
      images.forEach(img => img.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));

      images[index].classList.add("active");
      dots[index].classList.add("active");
      current = index;
    }

    carousel.querySelector(".next").addEventListener("click", () => {
      showSlide((current + 1) % images.length);
    });

    carousel.querySelector(".prev").addEventListener("click", () => {
      showSlide((current - 1 + images.length) % images.length);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });

    // Swipe para mobile
    let touchStartX = 0;
    const SWIPE_THRESHOLD = 40;

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
          showSlide((current + 1) % images.length);
        } else {
          showSlide((current - 1 + images.length) % images.length);
        }
      }
    }, { passive: true });
  });
})();(function () {
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Menú hamburguesa (mobile)
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".carousel").forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-image");
    const dots = carousel.querySelectorAll(".dot");

    let current = 0;

    function showSlide(index) {
      images.forEach(img => img.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));

      images[index].classList.add("active");
      dots[index].classList.add("active");
      current = index;
    }

    carousel.querySelector(".next").addEventListener("click", () => {
      showSlide((current + 1) % images.length);
    });

    carousel.querySelector(".prev").addEventListener("click", () => {
      showSlide((current - 1 + images.length) % images.length);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });

    // Swipe para mobile
    let touchStartX = 0;
    const SWIPE_THRESHOLD = 40;

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
          showSlide((current + 1) % images.length);
        } else {
          showSlide((current - 1 + images.length) % images.length);
        }
      }
    }, { passive: true });
  });
})();
