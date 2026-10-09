function irGestionPersonal() {
    window.location.href = "Gestión de Personal.html";
}

function irRegistrarPersonal() {
    window.location.href = "Registrar Personal.html";
}

function cerrarSesion() {
    const confirmar = confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
        window.location.href = "index.html";
    }
}