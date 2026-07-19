document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("mensaje").textContent =
        "Formulario enviado correctamente.";

    this.reset();
});
