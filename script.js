(function () {
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
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
      current = (current + 1) % images.length;
      showSlide(current);
    });

    carousel.querySelector(".prev").addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
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
