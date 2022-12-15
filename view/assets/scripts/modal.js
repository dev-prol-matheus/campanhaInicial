const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal-btn");

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modalContainer.classList.remove("show");
});