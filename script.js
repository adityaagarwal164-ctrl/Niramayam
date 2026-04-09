// Modal functionality
const modal = document.getElementById("appointmentModal");
const bookBtn = document.getElementById("bookBtn");
const heroBookBtn = document.getElementById("heroBookBtn");
const closeBtn = document.querySelector(".close");

bookBtn.onclick = () => modal.style.display = "block";
heroBookBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Scroll-triggered animations for service cards
const cards = document.querySelectorAll(".card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "all 0.6s ease";
    }
  });
}

// Run once on load and again on scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
