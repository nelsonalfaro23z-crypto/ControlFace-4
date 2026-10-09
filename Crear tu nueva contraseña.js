document.getElementById('newPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitamos que la página se refresque sola
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validación de longitud mínima
    if (password.length < 8) {
        alert(' La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    // Validación para asegurar que ambas contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, revisalas e intentalo de nuevo.');
        return;
    }

    // Mensaje de éxito
    alert('¡Excelente! Tu contraseña ha sido restablecida con éxito.');
    
    // Limpiamos el código temporal guardado en la memoria
    localStorage.removeItem("codigoSeguridad");
    
    // Redirección directa a la pantalla de inicio de sesión (index.html)
    window.location.href = "index.html";
});