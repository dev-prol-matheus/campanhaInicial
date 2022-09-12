const button_components = document.querySelectorAll('.button_component');
function create_button_components() {
  console.log('Entrou no botão e capturou: ');
  console.log(button_components);
  button_components.forEach((item) => {
    console.log(item);
    item.innerHTML = `
        <div>
          <!--<i id="whatsapp" class="fa-brands fa-whatsapp"></i>-->
          <img id="whatsapp-img" src="./icons/whatsapp-envolt.png" alt="whatsapp icon">
        </div> 
        GARANTA AGORA SUA BOLSA <br>
        PELO WHATSAPP!
    `;
  })
}
create_button_components();