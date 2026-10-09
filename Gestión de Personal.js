// ===================================
// CONTROLFACE - GESTIÓN DE PERSONAL
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    // BUSCADOR Y FILTROS EN TIEMPO REAL
    const buscador = document.getElementById("busqueda");
    const filtroCargo = document.getElementById("filtroCargo");

    function actualizarTabla() {
        const textoBusqueda = buscador ? buscador.value.toLowerCase().trim() : "";
        const cargoSeleccionado = filtroCargo ? filtroCargo.value.toLowerCase() : "todos";
        const filas = document.querySelectorAll("#tablaPersonal tr");

        filas.forEach(fila => {
            const nombre = fila.cells[2].textContent.toLowerCase();
            const cargo = fila.cells[3].textContent.toLowerCase();
            const correo = fila.cells[4].textContent.toLowerCase();

            const coincideBusqueda = nombre.includes(textoBusqueda) || correo.includes(textoBusqueda);
            const coincideCargo = cargoSeleccionado === "todos" || cargo.includes(cargoSeleccionado);

            fila.style.display = (coincideBusqueda && coincideCargo) ? "" : "none";
        });
    }

    if (buscador) {
        buscador.addEventListener("keyup", actualizarTabla);
    }

    if (filtroCargo) {
        filtroCargo.addEventListener("change", actualizarTabla);
    }

    // ACCIÓN DE EDITAR
    document.querySelectorAll(".editar").forEach(btn => {
        btn.addEventListener("click", () => {
            let fila = btn.closest("tr");
            let nombreActual = fila.cells[2].innerText;
            let correoActual = fila.cells[4].innerText;

            let nuevoNombre = prompt("Editar nombre:", nombreActual);
            if (nuevoNombre && nuevoNombre.trim() !== "") {
                fila.cells[2].innerText = nuevoNombre;
            }

            let nuevoCorreo = prompt("Editar correo:", correoActual);
            if (nuevoCorreo && nuevoCorreo.trim() !== "") {
                fila.cells[4].innerText = nuevoCorreo;
            }
        });
    });

    // ACCIÓN DE ELIMINAR
    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", () => {
            let fila = btn.closest("tr");
            let nombre = fila.cells[2].innerText;
            let confirmar = confirm(`¿Desea eliminar a ${nombre}?`);

            if (confirmar) {
                fila.remove();
                alert("Usuario eliminado correctamente.");
            }
        });
    });

    // CONTADORES ANIMADOS
    document.querySelectorAll(".card h2").forEach(numero => {
        let objetivo = parseInt(numero.textContent);
        if (isNaN(objetivo)) return;

        let contador = 0;
        const velocidad = Math.max(20, 1000 / objetivo);
        const intervalo = setInterval(() => {
            contador++;
            numero.textContent = contador;
            if (contador >= objetivo) {
                clearInterval(intervalo);
            }
        }, velocidad);
    });

    // PAGINACIÓN INTERACTIVA
    const paginas = document.querySelectorAll(".paginacion button");
    paginas.forEach(boton => {
        boton.addEventListener("click", () => {
            if (!boton.querySelector("i")) {
                paginas.forEach(btn => btn.classList.remove("pagina-activa"));
                boton.classList.add("pagina-activa");
            }
        });
    });
});

// FUNCIONES GLOBALES
function cerrarSesion() {
    const confirmar = confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
        window.location.href = "index.html";
    }
}