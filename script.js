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
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open-menu-modal');
  const closeBtn = document.getElementById('close-menu-modal');
  const modal = document.getElementById('menu-modal');
  const menuForm = document.getElementById('menu-selection-form');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Handle menu form submission
  if (menuForm) {
    menuForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const coffees = Array.from(menuForm.querySelectorAll('input[name="coffee"]:checked')).map(cb => cb.value);
      const books = Array.from(menuForm.querySelectorAll('input[name="book"]:checked')).map(cb => cb.value);

      let message = "You selected:\n";
      message += coffees.length ? `Coffees: ${coffees.join(', ')}\n` : '';
      message += books.length ? `Books: ${books.join(', ')}` : '';
      if (!coffees.length && !books.length) {
        message = "You didn't select any items.";
      }

      alert(message);
      modal.style.display = 'none';
      menuForm.reset();
    });
  }
});

