// archivo JS sin animaciones por ahora
console.log("✨ Portafolio de Yuilsi cargado correctamente.");

const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const items = document.querySelectorAll(".timeline-item");
const cards = Array.from(track.children);


let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].getBoundingClientRect().width + 24; // ancho + gap
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // controla los estados de los botones
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === cards.length - 1;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

updateCarousel();

// === animación al hacer scroll ===

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2, // activa cuando el 20% del elemento es visible
  }
);

items.forEach((item) => observer.observe(item));

