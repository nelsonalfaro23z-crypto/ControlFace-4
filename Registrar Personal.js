// ===================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ===================================

const passwordInput = document.getElementById("password");
const iconoOjo = document.querySelector(".password-box i");

if (iconoOjo && passwordInput) {
    iconoOjo.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            iconoOjo.classList.remove("fa-eye");
            iconoOjo.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            iconoOjo.classList.remove("fa-eye-slash");
            iconoOjo.classList.add("fa-eye");
        }
    });
}

// ===================================
// PROFESOR / ADMINISTRADOR (SIN OPACIDAD)
// ===================================

const profesorRadio = document.querySelector('input[value="profesor"]');
const adminRadio = document.querySelector('input[value="administrador"]');
const profesorBox = document.querySelector(".profesor-box");
const adminBox = document.querySelector(".admin-box");

function actualizarTipoUsuario() {
    if (profesorBox && adminBox) {
        // Mantenemos ambos bloques con opacidad al 100%
        profesorBox.style.opacity = "1";
        adminBox.style.opacity = "1";
    }
}

if (profesorRadio && adminRadio) {
    profesorRadio.addEventListener("change", actualizarTipoUsuario);
    adminRadio.addEventListener("change", actualizarTipoUsuario);
    actualizarTipoUsuario();
}

// ===================================
// GUARDAR Y CANCELAR PERSONAL
// ===================================

const formulario = document.getElementById("formPersonal");

if (formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombreInput = document.querySelector('input[type="text"]');
        
        if (nombreInput && nombreInput.value.trim() === "") {
            alert("Debes ingresar el nombre completo.");
            return;
        }

        alert("Personal registrado correctamente.");
        formulario.reset();
        actualizarTipoUsuario();
    });
}

// FUNCIONALIDAD CERRAR SESIÓN
function cerrarSesion() {
    const confirmar = confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
        window.location.href = "index.html";
    }
}