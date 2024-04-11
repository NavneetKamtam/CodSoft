const navlinks = document.getElementById('nav-links');
const menubtn = document.getElementById('menu-btn');
const menubtnicon = document.querySelector('i');

menubtn.addEventListener('click', (e)=>{
    navlinks.classList.toggle('open')
});

const isOpen = navlinks.classList.contains('open');
menubtnicon.setAttribute('open', isOpen?'ri-close-line' : 'ri-menu-line');

navlinks.addEventListener('click', (e)=>{
    navlinks.classList.remove('open')
    menubtnicon.setAttribute('class','ri-menu-line')
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container_left h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".container_left .container_btn",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container_right h4",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".container_right h2",{
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".container_right h3",{
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".container_right p",{
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".container_right .tent-1",{
    duration: 1000,
    delay: 4000,
});

ScrollReveal().reveal(".container_right .tent-2",{
    duration: 1000,
    delay: 4500,
});

ScrollReveal().reveal(".location", {
    ...scrollRevealOption,
    origin: "left",
    delay: 5000,
  });
  
  ScrollReveal().reveal(".social span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5500,
    interval: 500,
  });