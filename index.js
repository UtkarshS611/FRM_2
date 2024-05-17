const menu = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const anim_menu = document.querySelectorAll('.has-fade');

menu.addEventListener('click', function(){
    console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    anim_menu.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    
    }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    anim_menu.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });

    }  
});