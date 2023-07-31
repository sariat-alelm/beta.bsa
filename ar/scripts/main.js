var menuBox = document.querySelector('.menu-box');
var menuBtn = document.querySelector('.menu-btn');
var closeMenuBtn = document.querySelector('.close-menu-btn');

function openMenu(){

menuBox.style.translate='0';

setTimeout(function(){
menuBox.style.height='85%';
}, 10);
}

function closeMenu(){
menuBox.style.translate='100%';

setTimeout(function(){
menuBox.style.height='0';
}, 10);
}
