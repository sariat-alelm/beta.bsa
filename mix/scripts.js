document.body.style.display ="flex";

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js')
.then((registration) => {
console.log('Service Worker registered with scope:', registration.scope);
})
.catch((error) => {
console.log('Service Worker registration failed:', error);
});
}

window.addEventListener('beforeinstallprompt', (event) => {
deferredPrompt = event;
});

var overlay = document.querySelector('.overlay');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.close-popup');
var installButton = document.querySelector("#install-btn");

installButton.addEventListener("click", function() {
overlay.style.opacity = "0";
setTimeout(function() {
overlay.style.opacity = "1";
document.body.style.overflow = "hidden";
}, 200);
overlay.style.display = "block";
});

closePopup.addEventListener("click", function() {
overlay.style.opacity = "0";
setTimeout(function() {
overlay.style.display = "none";
document.body.style.overflow = "scroll";
}, 200);
});

overlay.addEventListener("click", function(event) {
if (event.target === overlay) {
overlay.style.opacity = "0";
setTimeout(function() {
overlay.style.display = "none";
document.body.style.overflow = "scroll";
}, 200);
}
});


var root = document.documentElement;
var darkModeBtn = document.querySelector("#dark-mode-btn");
var headerLogo = document.querySelector('.header-logo');

var isDarkModeEnabled = localStorage.getItem('isDarkModeEnabled') === 'true';

if (isDarkModeEnabled) {
  enableDarkMode();
} else {
  disableDarkMode();
}

darkModeBtn.addEventListener("click", function() {
  isDarkModeEnabled = !isDarkModeEnabled;
  if (isDarkModeEnabled) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  localStorage.setItem('isDarkModeEnabled', isDarkModeEnabled);
});

function enableDarkMode() {
  root.style.setProperty('--dark-blue', '#080923');
  root.style.setProperty('--light-yellow', '#949087');
  root.style.setProperty('--body-background', 'url("../../mix/dark-background.png")');
root.style.setProperty('--footer-background', 'url("../../mix/dark-world-map.svg")');
headerLogo.style.filter ="grayscale(30%)";
}

function disableDarkMode() {
  root.style.setProperty('--dark-blue', '#2B3C56');
  root.style.setProperty('--light-yellow', '#F9F5DC');
  root.style.setProperty('--body-background', 'url("../../mix/background.png")');
root.style.setProperty('--footer-background', 'url("../../mix/world-map.svg")');
headerLogo.style.filter ="grayscale(0)";
}
