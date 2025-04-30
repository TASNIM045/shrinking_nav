window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

window.addEventListener('scroll', function() {
    const svgs = document.getElementsByClassName('svg');
    for (let i = 0; i < svgs.length; i++) {
        if (window.scrollY > 50) {
            svgs[i].classList.add('hidden');
        } else {
            svgs[i].classList.remove('hidden');
        }
    }
});
