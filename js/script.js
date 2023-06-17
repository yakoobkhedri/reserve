let mobileMenu = document.getElementById('mobileMenu');
let hamIcon = document.getElementById('hamIcon');
let closeIcon = document.getElementById('closeIcon');
let menudropdown = Array.from(document.getElementsByClassName('menudropdown'));
let mobileItem = Array.from(document.querySelectorAll('nav ul li'));
let overlay = document.getElementById('overlay');

mobileItem.forEach((item) => {
    item.addEventListener('click', function() {
        item.querySelector('div').classList.toggle('active')
    })
})

menudropdown.forEach((item) => {
    item.addEventListener('mouseenter', function() {
        item.querySelector('.dropdown').classList.add('active');
    });
    item.addEventListener('mouseleave', function() {
        item.querySelector('.dropdown').classList.remove('active');
    })
})

hamIcon.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    overlay.style.display = 'block'
});
closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    overlay.style.display = 'none'
});
overlay.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    overlay.style.display = 'none'
});