let url = {
  urlGET: 'http://localhost/campanhaInicial/users_lead.php',
  urlInsert: 'http://localhost/campanhaInicial/controllers/users_insert.php',
};
let dataBase;

const button = document.getElementById('sendWhatsappData');
button.addEventListener("click", () => {
  const data = {
    name: `${document.getElementById('name').value}`,
    email: `${document.getElementById('email').value}`,
    phone: `${document.getElementById('phone').value}`,
    location: `${document.getElementById('location').value}`
  };
  let key = true;
  let agree = `${document.getElementById('agree').checked}`;
  let dataArray = []; dataArray.push(data.name, data.email, data.phone, data.agree);
  dataArray.forEach((info) => {
    if(info == '' || info == null || info == undefined) {
      key = false;
    }
  })
  agree ? true : key = false;
  if(key) {
    axios.post(url.urlInsert, data, true)
      .then(response => actionMessage(response.data))
      .catch(error => {
        console.log(error);
      })   
  } else {
    actionMessage(false);
  }
})

function actionMessage(message) {
  switch(message) {
    case 'sucess':
      console.log(message);
      window.location.href = "https://wa.me/5581996857745?text=Ol%C3%A1%20pessoal%20do%20Prol%20Educa!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Bolsa%20de%20Estudo.";
      break;
    case 'error':
      console.log(message);
      break;
    default:
      console.log("Alguma irregularidade no código enviado."); 
  }
}