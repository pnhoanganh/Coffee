let navbar = document.querySelector('.navbar');

document.querySelector('.fa-bars').onclick = () =>{
    navbar.classList.toggle('active')
    cartBox.classList.remove('active')
    search.classList.remove('active')
} 

let cartBox = document.querySelector('.cart-box');

document.querySelector('.fa-shopping-cart').onclick = () =>{
    cartBox.classList.toggle('active')
    navbar.classList.remove('active')
    search.classList.remove('active')
    
} 

let search = document.querySelector('.search-form');

document.querySelector('.fa-search').onclick = () =>{
    search.classList.toggle('active')
    navbar.classList.remove('active')
    cartBox.classList.remove('active')
    
} 

window.onscroll = () =>{
    navbar.classList.remove('active')
    cartBox.classList.remove('active')
    search.classList.remove('active')
}

//loader
function loader(){
    document.querySelector('.loader').classList.add('fadeout')
}

function fadeOut(){
  setInterval(loader, 3000)
}

window.onload = fadeOut();