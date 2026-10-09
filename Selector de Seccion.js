document.addEventListener("DOMContentLoaded", () => {
    const inputBuscar = document.getElementById("inputBuscarSeccion");
    const gridSecciones = document.getElementById("gridSecciones");

    // BUSCADOR EN TIEMPO REAL
    if (inputBuscar && gridSecciones) {
        inputBuscar.addEventListener("input", (e) => {
            const busqueda = e.target.value.toLowerCase().trim();
            const tarjetas = gridSecciones.querySelectorAll(".card-seccion");

            tarjetas.forEach((tarjeta) => {
                const titulo = tarjeta.querySelector("h3")?.innerText.toLowerCase() || "";
                const especialidad = tarjeta.querySelector("p")?.innerText.toLowerCase() || "";
                const info = tarjeta.querySelector(".seccion-info")?.innerText.toLowerCase() || "";

                if (titulo.includes(busqueda) || especialidad.includes(busqueda) || info.includes(busqueda)) {
                    tarjeta.style.display = "flex";
                } else {
                    tarjeta.style.display = "none";
                }
            });
        });
    }
});

// ACCIÓN AL SELECCIONAR SECCIÓN
function seleccionarSeccion(nombreSeccion) {
    // Redirige al Selector de Clase pasando la sección por la URL o la guarda en localStorage
    localStorage.setItem("seccionSeleccionada", nombreSeccion);
    window.location.href = "Selector de Clase.html";
}

// CERRAR SESIÓN
function cerrarSesion() {
    const confirmar = confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
        window.location.href = "index.html";
    }
}