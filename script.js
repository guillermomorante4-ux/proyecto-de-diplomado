document.addEventListener("DOMContentLoaded", function () {

    const btnPostular = document.querySelector(".cta-button");
    const convocatorias = document.querySelector("#convocatorias");

    if (btnPostular && convocatorias) {

        convocatorias.style.display = "none";

        btnPostular.addEventListener("click", function (e) {
            e.preventDefault();

            if (convocatorias.style.display === "none") {
                convocatorias.style.display = "block";
            } else {
                convocatorias.style.display = "none";
            }
        });

    } else {
        console.log("No se encontrÃ³ botÃ³n o convocatorias en el HTML");
    }

});
