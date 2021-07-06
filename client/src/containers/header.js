const btnMenu = document.getElementById('btn-menu')
const navMenu = document.querySelector('.header__nav-menu')

btnMenu.addEventListener('click', (event) => {
  navMenu.classList.toggle('active')
})
