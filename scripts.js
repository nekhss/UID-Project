document.addEventListener('DOMContentLoaded', function() {

    const toggleBtn = document.querySelector(".theme-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("healtech-theme") || 'light';

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.setAttribute("data-theme", "dark");
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            body.removeAttribute("data-theme");
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    }

    applyTheme(savedTheme);

    toggleBtn.addEventListener("click", () => {
        let currentTheme = body.getAttribute("data-theme");
        if (currentTheme === "dark") {
            localStorage.setItem("healtech-theme", "light");
            applyTheme('light');
        } else {
            localStorage.setItem("healtech-theme", "dark");
            applyTheme('dark');
        }
    });

    const navLinks = document.querySelectorAll('ul.nav-links li a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});