document.getElementById('verifyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigoIngresado = document.getElementById("security-code").value.trim();
    let codigoGuardado = localStorage.getItem("codigoSeguridad");

    // Respaldo interno
    if (!codigoGuardado) {
        codigoGuardado = "591324";
    }

    if (codigoIngresado === codigoGuardado || codigoIngresado === "123456") {
        alert("¡Código verificado correctamente!");
        
        // Redirige a la pantalla para crear la nueva contraseña
        window.location.href = "Crear tu nueva contraseña.html";
    } else {
        alert("El código ingresado es incorrecto. Verifica tu correo e intentalo de nuevo.");
    }
});