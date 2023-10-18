document.addEventListener("DOMContentLoaded", function () {
    // Función para guardar el formulario
    function guardarFormulario(email, password) {
      // Mostrar los datos en la consola
      console.log("Correo Electrónico:", email);
      console.log("Contraseña:", password);
  
      // Convertir los datos en un objeto
      const datosFormulario = {
        email,
        password
      };
  
      // Convertir el objeto a una cadena JSON
      const datosFormularioJSON = JSON.stringify(datosFormulario);
  
      // Almacenar los datos en el localStorage
      localStorage.setItem("datosFormulario", datosFormularioJSON);
    }
  
    // Escuchar el evento "submit" del formulario
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Capturar los valores del correo electrónico y la contraseña
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
  
        // Llamar a la función para guardar el formulario
        guardarFormulario(email, password);
  
        // Almacenar el correo electrónico en el localStorage
        localStorage.setItem("email", email);
  
        // Limpiar la contraseña
        document.getElementById("passwordInput").value = "";
      });
  
      // Restaurar el valor del correo electrónico si existe en localStorage
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        document.getElementById("emailInput").value = storedEmail;
      }
    }
  
    // Escuchar el evento "click" del botón "Recordarme"
    const rememberMeButton = document.getElementById("rememberMeButton");
  
    if (rememberMeButton) {
      rememberMeButton.addEventListener("click", function () {
        // Recuperar los datos guardados del formulario desde el localStorage
        const datosFormularioJSON = localStorage.getItem("datosFormulario");
  
        if (datosFormularioJSON) {
          // Convertir la cadena JSON en un objeto
          const datosFormulario = JSON.parse(datosFormularioJSON);
  
          // Mostrar los datos en la consola
          console.log("Correo Electrónico (Recordar):", datosFormulario.email);
          console.log("Contraseña (Recordar):", datosFormulario.password);
        }
      });
    }
  });