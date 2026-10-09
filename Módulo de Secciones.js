document.addEventListener("DOMContentLoaded", () => {
    // Cerrar sesión
    const btnCerrarSesion = document.getElementById("btnCerrarSesion");
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", () => {
            const salir = confirm("¿Deseas cerrar sesión?");
            if (salir) {
                window.location.href = "index.html";
            }
        });
    }

    // Botón Agregar Sección
    const btnAgregar = document.getElementById("btnAgregar");
    if (btnAgregar) {
        btnAgregar.addEventListener("click", () => {
            alert("Abre el formulario para agregar una nueva sección.");
        });
    }

    // Búsqueda dinámica en tiempo real
    const inputBuscar = document.getElementById("inputBuscar");
    const tablaBody = document.getElementById("tablaSeccionesBody");

    if (inputBuscar && tablaBody) {
        inputBuscar.addEventListener("keyup", () => {
            const busqueda = inputBuscar.value.toLowerCase().trim();
            const filas = tablaBody.getElementsByTagName("tr");

            Array.from(filas).forEach(fila => {
                const textoFila = fila.textContent.toLowerCase();
                if (textoFila.includes(busqueda)) {
                    fila.style.display = "";
                } else {
                    fila.style.display = "none";
                }
            });
        });
    }

    // Filtro por grado
    const filtroGrados = document.getElementById("filtroGrados");
    if (filtroGrados && tablaBody) {
        filtroGrados.addEventListener("change", () => {
            const gradoSeleccionado = filtroGrados.value;
            const filas = tablaBody.getElementsByTagName("tr");

            Array.from(filas).forEach(fila => {
                const gradoTexto = fila.children[1].textContent.trim(); // Columna Grado
                if (gradoSeleccionado === "todos" || gradoTexto.startsWith(gradoSeleccionado)) {
                    fila.style.display = "";
                } else {
                    fila.style.display = "none";
                }
            });
        });
    }

    // Eventos de botones de acciones (Ver, Editar, Eliminar)
    if (tablaBody) {
        tablaBody.addEventListener("click", (e) => {
            const btn = e.target.closest("button");
            if (!btn) return;

            const fila = btn.closest("tr");
            const idSeccion = fila.children[0].textContent;
            const nombreSeccion = `${fila.children[1].textContent} "${fila.children[2].textContent}"`;

            if (btn.classList.contains("btn-ver")) {
                alert(`Viendo detalles de la sección ${nombreSeccion} (ID: ${idSeccion})`);
            } else if (btn.classList.contains("btn-editar")) {
                alert(`Editando sección ${nombreSeccion} (ID: ${idSeccion})`);
            } else if (btn.classList.contains("btn-eliminar")) {
                const confirmar = confirm(`¿Estás seguro de eliminar la sección ${nombreSeccion}?`);
                if (confirmar) {
                    fila.remove();
                    alert("Sección eliminada exitosamente.");
                }
            }
        });
    }
});