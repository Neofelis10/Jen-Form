
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-jenForm');
    const scrolled = window.scrollY > 80;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const offcanvasELement = document.getElementById('offcanvasFooterJenForm');
const offcanvas = new bootstrap.Offcanvas(offcanvasELement);

const btnFooterJenform = document.getElementById('btnFooterJenform');

btnFooterJenform.addEventListener('click', function () {
    offcanvas.show();
    btnFooterJenform.style.display = 'none';
});

offcanvasELement.addEventListener('hidden.bs.offcanvas', function () {
    btnFooterJenform.style.display = 'block';
});
