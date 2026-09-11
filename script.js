(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

  // ---------- Lightbox ----------
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Cerrar">&times;</button>
    <button type="button" class="lightbox-btn lightbox-prev" aria-label="Anterior">❮</button>
    <img class="lightbox-image" src="" alt="">
    <button type="button" class="lightbox-btn lightbox-next" aria-label="Siguiente">❯</button>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector(".lightbox-image");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const lightboxPrev = lightbox.querySelector(".lightbox-prev");
  const lightboxNext = lightbox.querySelector(".lightbox-next");

  let activeImages = [];
  let activeIndex = 0;

  function updateLightboxImage() {
    const img = activeImages[activeIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";
  }

  function openLightbox(images, index) {
    activeImages = images;
    activeIndex = index;
    updateLightboxImage();
    lightbox.classList.add("open");
    document.body.classList.add("lightbox-lock");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.classList.remove("lightbox-lock");
  }

  function showNext() {
    activeIndex = (activeIndex + 1) % activeImages.length;
    updateLightboxImage();
  }

  function showPrev() {
    activeIndex = (activeIndex - 1 + activeImages.length) % activeImages.length;
    updateLightboxImage();
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", showNext);
  lightboxPrev.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  let lbTouchStartX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    lbTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener("touchend", (e) => {
    const diff = lbTouchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? showNext() : showPrev();
    }
  }, { passive: true });

  // ---------- Carrusel ----------
  document.querySelectorAll(".carousel").forEach(carousel => {
    const images = Array.from(carousel.querySelectorAll(".carousel-image"));
    const dots = carousel.querySelectorAll(".dot");
    let current = 0;

    function showSlide(index) {
      images.forEach(img => img.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
      images[index].classList.add("active");
      if (dots[index]) dots[index].classList.add("active");
      current = index;
    }

    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    if (nextBtn) nextBtn.addEventListener("click", () => showSlide((current + 1) % images.length));
    if (prevBtn) prevBtn.addEventListener("click", () => showSlide((current - 1 + images.length) % images.length));

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });

    // Tocar/clickear la foto abre el lightbox
    images.forEach((img, index) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => openLightbox(images, index));
    });

    // Swipe para mobile
    let touchStartX = 0;
    const SWIPE_THRESHOLD = 40;

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        diff > 0 ? showSlide((current + 1) % images.length) : showSlide((current - 1 + images.length) % images.length);
      }
    }, { passive: true });

    // Observer para animaciones al hacer scroll
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.10
    });
    
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
  });
})();
