// function openModal() {
//     document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("myModal").style.display = "none";
// }


let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')
let hamburger = document.querySelector('.hamburger')
let dropDown = document.querySelector('.drop-down')
let sideBar = document.querySelector('.side-bar')
let closeBtn = document.querySelector('.times')
let cart = document.querySelector('.cart-icon')
let cartContent = document.querySelector('.cart-display')
let productDisplay = document.querySelector('.product-display')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let cartNumber = document.querySelector('.cart-number2')
let smallCartNumber = document.querySelector('.cart-number.small')
let productCartNumber = document.querySelector('.cart-number.product')
let addCart = document.querySelector('.cart-btn')
let checkBtn = document.querySelector('.checkout-btn')
let productName = document.querySelector('.product-name.cart')
let money = document.querySelector('.money')
let empty = document.querySelector('.empty')
let total = document.querySelector('.total')
let trash = document.querySelector('.trash-icon')
let warn = document.querySelector('.warn')
let dot = document.querySelectorAll('.dot')

let body = document.body




//functionality for the side-bar
hamburger.addEventListener('click', ()=>{
    sideBar.classList.toggle('active')
    dropDown.classList.toggle('active')
    cartContent.classList.remove('open')
})

closeBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('active')
    dropDown.classList.toggle('active')
})


// cart display function
cart.addEventListener('click', ()=>{
    cartContent.classList.toggle('open')
    
})

// removal of product from cart
trash.addEventListener('click', ()=>{
    productDisplay.style.display = "none"
    checkBtn.style.display = "none"
    smallCartNumber.style.display = 'none'
    empty.style.display = 'block'
    
})





// image gallery slider
let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".product");
    // let dots = document.getElementsByClassName("demo");
    // let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 2;
    }
    if (n < 2) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dot[slideIndex - 2].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
    console.log(slideIndex);
}


leftArrow.addEventListener('click', ()=>{
    plusSlides(-1)
})

rightArrow.addEventListener('click', ()=>{
    plusSlides(1)
})

// for (let i = 0; i < dot.length; i++) {
//     currentSlide(slideIndex + 1)
    
    
// }

// image control for wider screens






// increment and decrement of items
numCart = Number(cartNumber.textContent)
plus.addEventListener('click', ()=>{
    numCart += 1
    cartNumber.innerText = numCart
})

minus.addEventListener('click', ()=>{
    if (numCart <= 0) {
        return
    } else{
        numCart -= 1
        
        cartNumber.innerText = numCart
    }
    
})

// adds the product to the cart
addCart.addEventListener('click', ()=>{

    if (cartNumber.innerText == 0) {
        warn.classList.add('open')
    } else {
        warn.classList.remove('open')
        empty.style.display = 'none'
        productDisplay.style.display = 'flex'
        checkBtn.style.display = 'block'
        productCartNumber.innerText = numCart
        smallCartNumber.style.display = 'block'
        smallCartNumber.textContent = numCart
        total.innerText = Number(money.textContent) * Number(numCart)
    }
})






