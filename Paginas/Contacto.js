document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    const formulario = document.querySelector('form');

    // Agrega un event listener para el envío del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtiene los valores de nombre y correo electrónico
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Guarda los datos en sessionStorage
        sessionStorage.setItem('nombre', nombre);
        sessionStorage.setItem('email', email);

        // Muestra la alerta de SweetAlert
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    });
});