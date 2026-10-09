document.addEventListener("DOMContentLoaded", () => {
    const formMateria = document.getElementById("formMateria");
    const tablaMaterias = document.getElementById("tablaMaterias").querySelector("tbody");
    const formTitulo = document.getElementById("formTitulo");
    const editRowIndex = document.getElementById("editRowIndex");

    const codigoMateria = document.getElementById("codigoMateria");
    const nombreMateria = document.getElementById("nombreMateria");
    const horasMateria = document.getElementById("horasMateria");
    const descripcionMateria = document.getElementById("descripcionMateria");

    const btnCancelar = document.getElementById("btnCancelar");
    const btnNuevaMateria = document.getElementById("btnNuevaMateria");

    // Función para numerar filas
    function reindexarTabla() {
        const filas = tablaMaterias.querySelectorAll("tr");
        filas.forEach((fila, index) => {
            fila.cells[0].textContent = index + 1;
        });
    }

    // Limpiar Formulario
    function limpiarFormulario() {
        formMateria.reset();
        editRowIndex.value = "";
        formTitulo.textContent = "Nueva Materia";
    }

    // Agregar / Editar Materia
    formMateria.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = nombreMateria.value.trim();
        const horas = horasMateria.value.trim();

        if (!nombre || !horas) return;

        if (editRowIndex.value !== "") {
            // EDITAR FILA EXISTENTE
            const index = editRowIndex.value;
            const fila = tablaMaterias.rows[index];
            fila.cells[1].textContent = nombre;
            fila.cells[2].textContent = horas;
        } else {
            // AGREGAR NUEVA FILA
            const nuevaFila = document.createElement("tr");
            nuevaFila.innerHTML = `
                <td></td>
                <td>${nombre}</td>
                <td>${horas}</td>
                <td>
                    <button class="btn-action edit"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn-action delete"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            `;
            tablaMaterias.appendChild(nuevaFila);
            reindexarTabla();
        }

        limpiarFormulario();
    });

    // Delegación de eventos para Editar y Eliminar
    tablaMaterias.addEventListener("click", (e) => {
        const btnEdit = e.target.closest(".edit");
        const btnDelete = e.target.closest(".delete");

        if (btnEdit) {
            const fila = btnEdit.closest("tr");
            const index = Array.from(tablaMaterias.rows).indexOf(fila);

            editRowIndex.value = index;
            nombreMateria.value = fila.cells[1].textContent;
            horasMateria.value = fila.cells[2].textContent;
            codigoMateria.value = "MAT-" + (index + 1);
            
            formTitulo.textContent = "Editar Materia";
            nombreMateria.focus();
        }

        if (btnDelete) {
            if (confirm("¿Estás seguro de que deseas eliminar esta materia?")) {
                const fila = btnDelete.closest("tr");
                fila.remove();
                reindexarTabla();
                limpiarFormulario();
            }
        }
    });

    btnCancelar.addEventListener("click", limpiarFormulario);
    btnNuevaMateria.addEventListener("click", () => {
        limpiarFormulario();
        nombreMateria.focus();
    });
});