window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const menuScroll = this.document.querySelector('.menu-section');

    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
        menuScroll.classList.add('menu-section-scroll');
    } else {
        navbar.classList.remove('shrink');
        menuScroll.classList.remove('menu-section-scroll');
    }
});

window.addEventListener('scroll', function () {
    const svgs = document.getElementsByClassName('svg');
    for (let i = 0; i < svgs.length; i++) {
        if (window.scrollY > 50) {
            svgs[i].classList.add('hidden');
        } else {
            svgs[i].classList.remove('hidden');
        }
    }
});