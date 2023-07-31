window.addEventListener('load', function() {
var templates = document.querySelector('.templates');
var pages = document.querySelectorAll('.pages');
var templateHeight = templates.offsetHeight;
for (var i = 0; i < pages.length; i++) {
pages[i].style.height = templateHeight + "px";
}
});
