var toggleBtn = document.querySelector('.navbar__toggleBtn');
var menu = document.querySelector('.navbar__menu');
var icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
