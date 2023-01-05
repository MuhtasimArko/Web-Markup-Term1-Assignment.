let openBtn = document.querySelector(".hamburger-open-icon");
let closeBtn = document.querySelector(".hamburger-close-icon");
let menu = document.querySelector(".navbar__menu");

openBtn?.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});

closeBtn?.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});

function acceptCookies() {
  // Set the cookie to indicate that the user has accepted the cookie statement
  setCookie("acceptedCookies", "true", 365);
  // Hide the cookie statement
  document.querySelector(".cookie-stat").style.display = "none";
}

// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}