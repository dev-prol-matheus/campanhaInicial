const buttonComponent = document.querySelectorAll('.button_component');
const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");

// function createButtonComponents() {
//   buttonComponent.forEach((button) => {
//     button.innerHTML = `<img id="whatsapp-img" src="./view/assets/image/icons/whatsapp_icon.webp"
//       alt="Whatsapp"
//       title="Entre com contato pelo Whatsapp">
//       <h5>GARANTA AGORA SUA BOLSA <br> PELO WHATSAPP
//       </h5> `;
//     button.addEventListener('click',assignMethod);
//   });
// }

function createButton() {
  const formLinks = document.querySelectorAll(".form_whatsapp_link");
  formLinks.forEach(links => {
    links.innerHTML = `
      <img src="./view/assets/image/icons/whatsapp_icon.webp" alt="Whatsapp">
      <button>
        GARANTA AGORA SUA BOLSA <br> PELO WHATSAPP
      </button>
    `;
  })
}

createButton();

function assignMethod() {
  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("show");
  modal.classList.remove("hidden");
  modal.classList.add("show");
};