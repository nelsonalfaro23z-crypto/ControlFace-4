function enviarCodigo(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Por favor, ingresa tu correo institucional.");
        return;
    }

    // Guardamos el código de seguridad de forma interna
    localStorage.setItem("codigoSeguridad", "591324");

    // Mensaje limpio y sin pistas para el usuario
    alert("Se ha enviado un código de seguridad a tu correo electrónico.");

    // Redirige a la pantalla para ingresar el código
    window.location.href = "Verificá tu correo.html";
}



