const menu = document.getElementById('menu');
const menuInfo = document.getElementById('menuInfo');

menu.addEventListener('click', () => {
    menuInfo.classList.toggle('hidden');
})