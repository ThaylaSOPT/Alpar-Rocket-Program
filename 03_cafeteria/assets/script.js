// ACCORDION
const buttons = document.querySelectorAll('.accordion-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        btn.nextElementSibling.classList.toggle('open');
    });
});

// SIDEBAR
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuBtn.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('open');
    overlay.classList.remove('active');
});

document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuBtn.classList.remove('open');
        overlay.classList.remove('active');
    });
});