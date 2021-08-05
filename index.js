const navbar = document.querySelector('.nav-mobile')
const hamburger = document.querySelector('.ham')
const anisha = document.querySelector('.flex-item1')
const ali = document.querySelector('.flex-item2')
const richard = document.querySelector('.flex-item3')
const optionAnisha = document.querySelector('.option-one')
const optionAli = document.querySelector('.option-two')
const optionRichard = document.querySelector('.option-three')

const toggleNavbar = () =>  {
    if(navbar.style.display === 'none'){
        navbar.style.display = 'block'
    }
    else{
        navbar.style.display = 'none'
    }
}

const toggleTest = (owner, optionOne, optionTwo) => {
    owner.style.display = 'block'
    optionOne.style.display = 'none'
    optionTwo.style.display = 'none'
}

hamburger.addEventListener('click', toggleNavbar)
optionAnisha.addEventListener('click', () => toggleTest(anisha, ali, richard))
optionAli.addEventListener('click', () => toggleTest(ali, anisha, richard))
optionRichard.addEventListener('click', () => toggleTest(richard, ali, anisha))