const button_components = document.querySelectorAll('.button_component');
function create_button_components() {
  console.log('Entrou no botão e capturou: ');
  console.log(button_components);
  button_components.forEach((item) => {
    console.log(item);
    item.innerHTML = `
    <a href="https://wa.me/5581996857745?text=Ol%C3%A1%20pessoal%20do%20Prol%20Educa!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Bolsa%20de%20Estudo.">
        <img id="whatsapp-img" src="./icons/whatsapp-envolt.png" alt="whatsapp icon">
        <h5>GARANTA AGORA SUA BOLSA <br>
        PELO WHATSAPP!</h5>
    </a>
    `;
  })
}
create_button_components();