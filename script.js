const body = document.body;
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const appointmentModal = document.getElementById("appointmentModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const openButtons = [
  document.getElementById("bookBtn"),
  document.getElementById("heroBookBtn"),
  document.getElementById("contactBookBtn"),
  document.getElementById("mobileBookBtn")
].filter(Boolean);

function openBookingModal() {
  appointmentModal.classList.add("show");
  body.style.overflow = "hidden";
}

function closeBookingModal() {
  appointmentModal.classList.remove("show");
  body.style.overflow = "";
}

openButtons.forEach((btn) => {
  btn.addEventListener("click", openBookingModal);
});

closeModal.addEventListener("click", closeBookingModal);
modalOverlay.addEventListener("click", closeBookingModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBookingModal();
  }
});

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const yOffset = -80;
    const y =
      target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});