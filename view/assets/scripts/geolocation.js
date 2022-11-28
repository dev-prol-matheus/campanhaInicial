let GEO_SUCCESS, GEO_ERROR = true;
let DATA, GLOBAL_KEY = '';
const SESSION_REGION = document.getElementById('regions');

axios.get('http://localhost:3001/')
  .then(response => DATA = response.data)
  .catch(error => {
    message: 'error',
    error
  })

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("Latitude: " + position.coords.latitude+"\nLongitude: "+position.coords.longitude);
    // let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    let latlng = new google.maps.LatLng(-8.11278, -35.01472);
    // let latlng = new google.maps.LatLng(-23.4969, -47.4451);
    // let latlng = new google.maps.LatLng(-7.11278, -35.01472);
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({location:latlng}, function(result) {
      let count = result.length;

      console.log(result);
      // console.log(result[count - 3].address_components);
      // console.log(result[count - 3].formatted_address); 
      // console.log(result[count - 3].address_components[0].long_name);

      GEO_SUCCESS = result[count - 3].address_components[0].long_name;
      const GEO_SUCCESS_PATH = GEO_SUCCESS.replace(/\s/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

      const locale_array = ['Recife', 'Jaboatãoo dos Guararapes', 'Olinda', 'Paulista', 'Sorocaba', 'Caruaru'];
      locale_array.forEach((item) => {
        switch(GEO_SUCCESS) {
          case item:
            console.log('Apontamento de localidade para ' + GEO_SUCCESS);
            GEO_ERROR = false;
            setPathSession(GEO_SUCCESS_PATH);
            break;   
        }
      })
      GEO_ERROR ? setPathSession('default') : true;
    });
  });
} else {
  GEO_ERROR = "I'm sorry, but geolocation services are not supported by your browser.";
  alert(GEO_ERROR);
}

function setPathSession(GEO_SUCCESS_PATH) {
  SESSION_REGION.innerHTML = `
  <h3><strong class="regions-strong">O Prol Educa tem as melhores</strong><br>escolas parceiras da região</h3>
  <article class="partners" id="partners">
  </article>
  <button class="button_component" type="reset">Entre em contato para garantir a vaga do seu filho</button>
  `;
  
  GLOBAL_KEY = `DATA.${GEO_SUCCESS_PATH}`;
  let array = eval(`${GLOBAL_KEY}`);
  array.forEach((item) => {
    document.getElementById('partners').innerHTML += `
      <img src="./view/assets/image/school_prol_educa/${GEO_SUCCESS_PATH}/${item}" alt="Escola ${item}">
    `;
  })
}