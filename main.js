let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset:true
})

sr.reveal('.text', {delay: 150, origin: 'top'});
sr.reveal('.form-container', {delay: 200, origin: 'left'});
sr.reveal('.heading', {delay: 30, origin: 'top'});
sr.reveal('.ride-container .box', {delay: 20, origin: 'top'});
sr.reveal('.services', {delay: 20, origin: 'top'});
sr.reveal('.about-container', {delay: 50, origin: 'top'});
sr.reveal('.reviews-container', {delay: 50, origin: 'top'});
sr.reveal('.newsletter .box', {delay: 400, origin: 'bottom'});