console.log("Hello World!");
const modalContainer = document.getElementById("modal-container");
const closeModalBtn = document.getElementById("close-modal-btn");

/*
setTimeout(function(){
    modalContainer.classList.add("show-modal");
}, 100000);
*/

closeModalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show-modal");
});