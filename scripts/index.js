document.getElementById('hamburguer').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('show-menu')
})

document.querySelector('.touch-close').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('show-menu')
})