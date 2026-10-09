document.addEventListener("DOMContentLoaded", () => {
    const btnToggle = document.getElementById("btnExportarToggle");
    const dropdownMenu = document.getElementById("exportDropdownMenu");
    const exportPDF = document.getElementById("exportPDF");
    const exportExcel = document.getElementById("exportExcel");

    // ABRIR Y CERRAR MENÚ DESPLEGABLE DE EXPORTACIÓN
    if (btnToggle && dropdownMenu) {
        btnToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle("show");
        });

        document.addEventListener("click", () => {
            dropdownMenu.classList.remove("show");
        });
    }

    // EXPORTAR A PDF (jsPDF)
    if (exportPDF) {
        exportPDF.addEventListener("click", (e) => {
            e.preventDefault();
            dropdownMenu.classList.remove("show");

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFontSize(18);
            doc.text("ControlFace - Reporte Detallado", 14, 20);

            doc.setFontSize(10);
            doc.text(`Fecha de Generación: ${new Date().toLocaleDateString()}`, 14, 28);

            doc.autoTable({
                html: "#tablaReporte",
                startY: 35,
                theme: "grid",
                headStyles: { fillColor: [7, 0, 51] },
                styles: { fontSize: 9 }
            });

            doc.save("Reporte_Asistencia.pdf");
        });
    }

    // EXPORTAR A EXCEL (SheetJS)
    if (exportExcel) {
        exportExcel.addEventListener("click", (e) => {
            e.preventDefault();
            dropdownMenu.classList.remove("show");

            let tabla = document.getElementById("tablaReporte");
            let wb = XLSX.utils.table_to_book(tabla, { sheet: "Asistencia" });
            XLSX.writeFile(wb, "Reporte_Asistencia.xlsx");
        });
    }
});

// NAVEGACIÓN Y CERRAR SESIÓN
function cerrarSesion() {
    const confirmar = confirm("¿Deseas cerrar sesión?");
    if (confirmar) {
        window.location.href = "index.html";
    }
}