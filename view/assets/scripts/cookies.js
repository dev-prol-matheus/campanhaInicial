const cookies = document.getElementById("cookies");
const acceptCookies = document.getElementById("acceptCookies");

const showCookiesWindow = () => {
  cookies.classList.remove("hidden");
  cookies.classList.add("show");
};
const closeCookiesWindow = () => {
  cookies.classList.remove("show");
  cookies.classList.add("hidden"); 
};

// SetCookies
const setCookies = () => {
  document.cookie = "cookie=accept";
  closeCookiesWindow();
};
const declineCookies = () => {
  document.cookie = "cookie=decline";
  closeCookiesWindow();
};

// Verificar se existem cookies;
function getCookie(name) {
  let cookie = {};
  
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  
  return cookie[name];
}
const cookie = getCookie("cookie");

document.addEventListener("DOMContentLoaded", () => {
  acceptCookies.addEventListener("click", setCookies);

  if(cookie == null || cookie == undefined){
    showCookiesWindow();
  };

});