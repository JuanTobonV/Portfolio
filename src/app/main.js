let menuButton = document.getElementById('menu__button');



menuButton.addEventListener('click', () => {
      let menu__links = document.getElementById('menu__links');
      menu__links.classList.toggle('hidden')
})