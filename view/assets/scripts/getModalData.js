let url;
if(window.location.href == 'http://localhost/campanhaInicial/') {
  url = {
    urlGET: 'http://localhost/campanhaInicial/users_lead.php',
    urlInsert: 'http://localhost/campanhaInicial/controllers/users_insert.php',
  };
} else {
  url = {
    urlGET: 'https://querobolsadeestudos.com.br/campanhaInicial/users_lead.php',
    urlInsert: 'https://querobolsadeestudos.com.br/campanhaInicial/controllers/users_insert.php',
  };
}
console.log(url);
let dataBase, key = true;

const button = document.getElementById('sendWhatsappData');
button.addEventListener("click", () => {
  const data = {
    name: `${document.getElementById('name').value}`,
    email: `${document.getElementById('email').value}`,
    phone: `${document.getElementById('phone').value}`,
    location: `${document.getElementById('location').value}`
  };

  if(key) {
    axios.post(url.urlInsert, data, true)
      .then(response => actionMessage(response.data))
      .catch(error => {
        console.log(error);
      }) 
  } else {
    actionMessage(false, dataArray);
  }
})

function actionMessage(message) {
  switch(message) {
    case 'sucess':
      console.log(message);
      break;
    case 'error':
      console.log(message);
      break;
    default:
      console.log("Alguma irregularidade no código enviado."); 
  }
}