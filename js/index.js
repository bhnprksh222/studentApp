const nav = document.querySelector('.nav-btn');
const nav1 = document.querySelector('.nav-line-1');
const nav2 = document.querySelector('.nav-line-2');
const nav3 = document.querySelector('.nav-line-3');

nav.addEventListener('mouseenter', () => {
    nav.style.transition = 'width 5s';
    nav1.style.width = '3rem';
    nav2.style.width = '4rem';
    nav3.style.width = '2rem';
});

nav.addEventListener('mouseleave', () => {
    nav1.style.width = '2rem';
    nav2.style.width = '3rem';
    nav3.style.width = '1rem';
});

nav.addEventListener('click', () => {
    nav1.style.width = '3rem';
    nav3.style.width = '3rem';
    nav1.style.transform = 'rotate(135deg) translateY(-1rem)';
    nav3.style.transform = 'rotate(45deg)';
    nav2.style.display = 'none';
})