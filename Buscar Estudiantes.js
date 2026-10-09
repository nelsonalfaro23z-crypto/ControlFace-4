// ================================
// BUSCADOR DE ESTUDIANTES
// ================================

const btnBuscar = document.getElementById("btnBuscar");
const inputBusqueda = document.getElementById("busqueda");

function mostrarTodos(){
    const filas = document.querySelectorAll("#tablaEstudiantes tr");
    filas.forEach(fila => {
        fila.style.display = "";
    });
}

function filtrarTabla(){
    let filtro = inputBusqueda.value.toLowerCase().trim();
    const filas = document.querySelectorAll("#tablaEstudiantes tr");

    if(filtro === ""){
        mostrarTodos();
        return;
    }

    filas.forEach(fila => {
        let texto = fila.textContent.toLowerCase();
        if(texto.includes(filtro)){
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
}

if(btnBuscar){
    btnBuscar.addEventListener("click", filtrarTabla);
}

if(inputBusqueda){
    // Permite buscar al presionar cualquier tecla en vivo
    inputBusqueda.addEventListener("keyup", filtrarTabla);
}

// ================================
// VER ESTUDIANTE
// ================================

document.querySelectorAll(".ver").forEach(boton => {
    boton.addEventListener("click", () => {
        const fila = boton.closest("tr");
        const nombre = fila.cells[3].innerText;
        alert("Información de: " + nombre);
    });
});

// ================================
// EDITAR ESTUDIANTE
// ================================

document.querySelectorAll(".editar").forEach(boton => {
    boton.addEventListener("click", () => {
        const fila = boton.closest("tr");
        const nombreActual = fila.cells[3].innerText;

        const nuevoNombre = prompt("Editar nombre:", nombreActual);

        if(nuevoNombre && nuevoNombre.trim() !== ""){
            fila.cells[3].innerText = nuevoNombre;
            alert("Estudiante actualizado.");
        }
    });
});

// ================================
// ELIMINAR ESTUDIANTE
// ================================

document.querySelectorAll(".eliminar").forEach(boton => {
    boton.addEventListener("click", () => {
        const fila = boton.closest("tr");
        const nombre = fila.cells[3].innerText;

        const confirmar = confirm("¿Eliminar a " + nombre + "?");

        if(confirmar){
            fila.remove();
            alert("Estudiante eliminado.");
        }
    });
});

// ================================
// CONTADOR TARJETAS
// ================================

const numeros = document.querySelectorAll(".card h2");

numeros.forEach(numero => {
    const objetivo = parseInt(numero.textContent);
    let contador = 0;

    const intervalo = setInterval(() => {
        contador++;
        numero.textContent = contador;

        if(contador >= objetivo){
            clearInterval(intervalo);
        }
    }, 40);
});

// ================================
// NOTIFICACIONES
// ================================

const btnNotificacion = document.querySelector(".notificacion");

if(btnNotificacion){
    btnNotificacion.addEventListener("click", () => {
        alert("No hay nuevas notificaciones.");
    });
}

// ================================
// CERRAR SESIÓN
// ================================

const logout = document.querySelector(".logout") || document.querySelector(".cerrar-sesion");

if(logout){
    logout.addEventListener("click", () => {
        const salir = confirm("¿Desea cerrar sesión?");

        if(salir){
            window.location.href = "index.html"; // Redirige a la pantalla de login principal
        }
    });
}

// ================================
// BOTÓN VOLVER
// ================================

const volver = document.querySelector(".volver");

if(volver){
    volver.addEventListener("mouseenter", () => {
        volver.style.transform = "translateX(-5px)";
    });

    volver.addEventListener("mouseleave", () => {
        volver.style.transform = "translateX(0px)";
    });
}

// ================================
// VER TODOS
// ================================

const verTodos = document.querySelector(".ver-todos");

if(verTodos){
    verTodos.addEventListener("click", () => {
        alert("Mostrando todos los estudiantes registrados.");
    });
}

// ================================
// ANIMACIÓN TARJETAS
// ================================

window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.style.opacity = "0";

        setTimeout(() => {
            card.style.opacity = "1";
        }, index * 150);
    });
});

// ===============================
// PAGINACIÓN
// ===============================

const paginas = document.querySelectorAll(".paginacion button");

paginas.forEach(boton => {
    boton.addEventListener("click", () => {
        paginas.forEach(btn => {
            btn.classList.remove("pagina-activa");
        });

        if(!boton.querySelector("i")){
            boton.classList.add("pagina-activa");
        }
    });
});