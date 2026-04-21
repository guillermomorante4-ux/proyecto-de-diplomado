document.addEventListener("DOMContentLoaded", function () {
    const botonesPostular = document.querySelectorAll(".index-postular-btn");
    const convocatorias = document.querySelector("#convocatorias");

    if (!convocatorias || botonesPostular.length === 0) {
        return;
    }

    convocatorias.style.display = "none";

    botonesPostular.forEach(function (boton) {
        boton.addEventListener("click", function (event) {
            event.preventDefault();

            if (convocatorias.style.display === "none" || convocatorias.style.display === "") {
                convocatorias.style.display = "block";
                convocatorias.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                convocatorias.style.display = "none";
            }
        });
    });
});
