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
