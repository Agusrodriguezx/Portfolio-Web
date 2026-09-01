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
    }

    carousel.querySelector(".next").addEventListener("click", () => {
      current = (current + 1) % images.length;
      showSlide(current);
    });

    carousel.querySelector(".prev").addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    });
  });
})();
