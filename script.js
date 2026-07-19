function verificarRespuesta() {
    let respuesta = document.getElementById("respuesta").value.trim().toLowerCase();

    if (respuesta === "19 de mayo") {
        document.getElementById("pregunta").style.display = "none";
        document.getElementById("carta").style.display = "block";
    } else {
        document.getElementById("mensaje").textContent =
            "Respuesta incorrecta. Inténtalo nuevamente.";
    }
}
