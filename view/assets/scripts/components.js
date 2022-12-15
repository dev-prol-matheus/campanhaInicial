const buttonComponent = document.querySelectorAll('.button_component');
const modal = 

function createButtonComponents() {
  buttonComponent.forEach((button) => {
    button.innerHTML = `<img id="whatsapp-img" src="./view/assets/image/icons/whatsapp_icon.webp" alt="Whatsapp" title="Entre com contato pelo Whatsapp"> <h5>GARANTA AGORA SUA BOLSA <br> PELO WHATSAPP!</h5> `;
    button.addEventListener('click',assignMethod);
  });
}
createButtonComponents();

function assignMethod() {

};