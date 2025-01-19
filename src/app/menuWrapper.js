const menu = document.getElementById('menu');
const menuInfo = document.getElementById('menuInfo');
const navBar = document.getElementById("navBar");

menu.addEventListener('click', () => {
    menuInfo.classList.toggle('hidden');
})