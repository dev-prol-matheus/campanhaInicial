// import urls from './server_url.js';
const url = {
  urlGET: 'http://localhost/campanhaInicial/users_lead.php',
  urlInsert: 'http://localhost/campanhaInicial/controllers/users_insert.php',
  // urlGET: 'https://querobolsadeestudos.com.br/',
  // urlInsert: 'https://querobolsadeestudos.com.br/',
};
let dataBase, key = true;

const button = document.getElementById('sendWhatsappData');
button.addEventListener("click", () => {
  const data = {
    name: `${document.getElementById('name').value}`,
    email: `${document.getElementById('email').value}`,
    phone: `${document.getElementById('phone').value}`,
    location: `${document.getElementById('location').value}`
  };

  // let dataArray = Object.values(data); 
  // dataArray.forEach(data => {
  //   if(data != null && data != '') {
  //     key = false; 
  //   }
  // })

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
      // dataArray.forEach((data, index) => {
      //   if(!dataArray.lenght - 1 == index) {
      //     document.getElementById(`${data}`).value = '';
      //   }
      // })
      console.log(message);
      break;
    case 'error':
      console.log(message);
      break;
    default:
      console.log("Alguma irregularidade no código enviado."); 
  }
}