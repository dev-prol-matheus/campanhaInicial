const cookies = document.getElementById("cookies");
const acceptCookies = document.getElementById("acceptCookies");
const closeCookies = document.getElementById("closeCookiesWindow");

const showCookiesWindow = () => {
  cookies.classList.remove("hidden");
  cookies.classList.add("show");
};
const closeCookiesWindow = () => {
  cookies.classList.remove("show");
  cookies.classList.add("hidden"); 
};

const setCookies = () => {
  // document.cookie = "cookie=accept";
  localStorage.setItem("cookie",true)
  closeCookiesWindow();
};
const declineCookies = () => {
  // document.cookie = "cookie=decline";
localStorage.setItem("cookie",false)
  closeCookiesWindow();
};

document.addEventListener("DOMContentLoaded", () => {
  // const verifyCookie = document.cookie("PHPSESSID");
  const verifyCookie = localStorage.getItem("cookie");

  acceptCookies.addEventListener("click", setCookies);
  closeCookies.addEventListener("click", declineCookies);

  if(verifyCookie == null){
    showCookiesWindow();
  };
});