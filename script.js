document.addEventListener("DOMContentLoaded", function () {
    const currentPage = document.body.dataset.page || "";

    const navItems = [
        { href: "index.html", label: "Inicio", key: "inicio" },
        { href: "blog.html", label: "Blog", key: "blog" },
        { href: "servicios.html", label: "Servicios", key: "servicios" },
        { href: "contacto.html", label: "Contacto", key: "contacto" }
    ];

    const navMarkup = navItems
        .map(function (item) {
            const classes = ["nav-button"];
            if (item.key === currentPage) {
                classes.push("nav-button-primary");
            }

            return '<li><a href="' + item.href + '" class="' + classes.join(" ") + '">' + item.label + "</a></li>";
        })
        .join("");

    const headerContainer = document.getElementById("site-header");
    if (headerContainer) {
        headerContainer.innerHTML =
            '<header class="main-header">' +
                '<div class="logo-container">' +
                    '<img src="vibratologo.jpeg" alt="Logo de la empresa" class="logo">' +
                    '<h1 class="site-name">Vibrato Agency</h1>' +
                "</div>" +
                '<nav class="main-nav"><ul>' + navMarkup + "</ul></nav>" +
            "</header>";
    }

    const footerContainer = document.getElementById("site-footer");
    if (footerContainer) {
        footerContainer.innerHTML =
            '<footer class="main-footer">' +
                "<p>&copy; 2026 Vibrato Agency. Todos los derechos reservados.</p>" +
                "<p>" +
                    '<a href="#">Política de Privacidad</a> | ' +
                    '<a href="#">Términos de Servicio</a> | ' +
                    '<a href="#">Contáctenos</a>' +
                "</p>" +
            "</footer>";
    }
});