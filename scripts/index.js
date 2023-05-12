document.getElementById('hamburguer').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('show-menu')
})

document.querySelector('.touch-close').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('show-menu')
})


function redirectToProject(){
    window.open('https://www.github.com', '_blank')
}