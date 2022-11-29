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

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
    console.log('FCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'paint', buffered: true});

let clsValue = 0;
let clsEntries = [];

let sessionValue = 0;
let sessionEntries = [];

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    // Only count layout shifts without recent user input.
    if (!entry.hadRecentInput) {
      const firstSessionEntry = sessionEntries[0];
      const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

      // If the entry occurred less than 1 second after the previous entry and
      // less than 5 seconds after the first entry in the session, include the
      // entry in the current session. Otherwise, start a new session.
      if (sessionValue &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000) {
        sessionValue += entry.value;
        sessionEntries.push(entry);
      } else {
        sessionValue = entry.value;
        sessionEntries = [entry];
      }

      // If the current session value is larger than the current CLS value,
      // update CLS and the entries contributing to it.
      if (sessionValue > clsValue) {
        clsValue = sessionValue;
        clsEntries = sessionEntries;

        // Log the updated value (and its entries) to the console.
        console.log('CLS:', clsValue, clsEntries)
      }
    }
  }
}).observe({type: 'layout-shift', buffered: true});

new PerformanceObserver((entryList) => {
  const [pageNav] = entryList.getEntriesByType('navigation');

  console.log(`TTFB: ${pageNav.responseStart}`);
}).observe({
  type: 'navigation',
  buffered: true
});

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    const delay = entry.processingStart - entry.startTime;
    console.log('FID candidate:', delay, entry);
  }
}).observe({type: 'first-input', buffered: true});