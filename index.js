const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggle = document.querySelector('.theme-toggle');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggle.querySelector('span').classList.toggle('active');
})