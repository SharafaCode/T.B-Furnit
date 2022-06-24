const hamburger = document.querySelector(' nav .nav-list .hamburger ');
const mobile_menu = document.querySelector(' nav .nav-list .nav-bar ul ');

const header = document.querySelector(' header');


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
   mobile_menu.classList.toggle('active');
});



document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 200){
        header.style.backgroundColor = '#1b1c26';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }

});


const links = document.querySelectorAll('.link');

links.forEach((link)=>{
    link.addEventListener('click', ()=>{
         hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});