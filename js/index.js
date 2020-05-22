const navSlide = () => {
    const burger = document.querySelector('.nav-btn');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    const nav1 = document.querySelector('.nav-line-1');
    const nav2 = document.querySelector('.nav-line-2');
    const nav3 = document.querySelector('.nav-line-3');
    const profilePic = document.querySelector('.profile-pic');

    // burger.addEventListener('mouseenter', () => {
    //     nav1.style.width = '3rem';
    //     nav3.style.width = '3rem';
    // burger.addEventListener('click', () => {
    //     nav1.style.width = '3rem';
    //     nav2.style.width = '3rem';
    //     nav3.style.width = '3rem';
    // });
    // });

    // burger.addEventListener('mouseleave', () => {
    //     nav1.style.width = '2rem';
    //     nav2.style.width = '3rem';
    //     nav3.style.width = '1rem';
    // });

    burger.addEventListener('click', () => {

        //Toggle nav
        nav.classList.toggle('nav-active');
        // burger.classList.toggle('nav-btn-border:after');

        //profie pic animation
        if (profilePic.style.animation) {
            profilePic.style.animation = '';
        } else {
            profilePic.style.animation = 'zoomIn 0.5s ease';
        }

        //animate links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlinkFade 0.5s ease forwards ${index / 8 + 0.2}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();