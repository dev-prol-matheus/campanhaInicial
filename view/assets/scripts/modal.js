const modalContainer = document.getElementById("modal-container");
const closeModalBtn = document.getElementById("close-modal-btn");
const modal = document.getElementById("modal");

closeModalBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  modalContainer.classList.add("hidden");
  modal.classList.remove("show");
  modal.classList.add("hidden");
});