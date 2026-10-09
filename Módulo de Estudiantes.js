function irBuscarEstudiantes() {
    window.location.href = "Buscar Estudiantes.html";
}

function irRegistrarEstudiante() {
    window.location.href = "Registrar Estudiante.html";
}

function volverAlModulo() {
    window.location.href = "Módulo de Estudiantes.html";
}

function cerrarSesion() {
    const confirmar = confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
        window.location.href = "index.html";
    }
}