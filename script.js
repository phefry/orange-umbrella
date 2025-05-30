let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Books & Coffee', 'Cozy Reading', 'Fresh Brews', 'Community Events'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
const serviceBoxes = document.querySelectorAll('.service-box');

window.addEventListener('scroll', () => {
    serviceBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxTop < windowHeight - 50) {
            box.classList.add('show');
        }
    });
});
const aboutImages = document.querySelectorAll('.about-content img');

window.addEventListener('scroll', () => {
    aboutImages.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imgTop < windowHeight - 50) {
            img.classList.add('show');
        }
    });
});
document.querySelectorAll('.about-content img').forEach(img => {
    img.addEventListener('click', function() {
        
        if (document.querySelector('.zoom-overlay')) return;

        
        const overlay = document.createElement('div');
        overlay.className = 'zoom-overlay';
        document.body.appendChild(overlay);

        
        this.classList.add('zoomed');

        
        function removeZoom() {
            img.classList.remove('zoomed');
            overlay.remove();
            overlay.removeEventListener('click', removeZoom);
            img.removeEventListener('click', removeZoom);
        }
        overlay.addEventListener('click', removeZoom);
        img.addEventListener('click', removeZoom);
    });
});

