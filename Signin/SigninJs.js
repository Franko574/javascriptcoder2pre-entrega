/* Esta parte es para un sign in , faltaria crear una parte donde el usuario se logea y crea su perfil*/

/* Tambien hay comentarios a correcciones futuras */

document.addEventListener("DOMContentLoaded", function () {
    // Función para guardar el formulario----------------------------------------------------------------------------------------------------------------------->
    function guardarFormulario(email, password) {
      
      // Mostrar los datos en la consola------------------------------------------------------------------------------------------------------------------------>
      /* Revisar este codigo , no me esta mostrando como yo quiero en la consola 
      capaz podria mostrarlo como el profe con un table y me tire los datos*/
      console.log("Correo Electrónico:", email);
      console.log("Contraseña:", password);
  
      // Convertir los datos en un objeto----------------------------------------------------------------------------------------------------------------------->
      const datosFormulario = {
        email,
        password
      };
      // Convertir los datos en un objeto---------------------------------------------------------------------------------------------------------------------->
  
      // Convertir el objeto a una cadena JSON------------------------------------------------------------------------------------------------------------------>
      const datosFormularioJSON = JSON.stringify(datosFormulario);
      // Convertir el objeto a una cadena JSON------------------------------------------------------------------------------------------------------------------>
  
      // Almacenar los datos en el localStorage----------------------------------------------------------------------------------------------------------------->
      localStorage.setItem("datosFormulario", datosFormularioJSON);
    }
  
    // Escuchar el evento "submit" del formulario--------------------------------------------------------------------------------------------------------------->
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Capturar los valores del correo electrónico y la contraseña----------------------------------------------------------------------------------------->
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
  
        // Llamar a la función para guardar el formulario------------------------------------------------------------------------------------------------------>
        /* Revisar este codigo , en que momento guarda el formulario y lo envia al consol? Estaria bueno que al guardarlo lo envie para que lo pueda ver*/
        guardarFormulario(email, password);
  
        // Almacenar el correo electrónico en el localStorage------------------------------------------------------------------------------------------------->
        localStorage.setItem("email", email);
  
        // Limpiar la contraseña------------------------------------------------------------------------------------------------->
        document.getElementById("passwordInput").value = "";
      });
  
      // Restaurar el valor del correo electrónico si existe en localStorage----------------------------------------------------------------------------------->
      /* Revisar porque me esta pasando que esto solo funciona cuando voy para atras , no cuando desde el menu toco ingresar y me manda a completar los datos */
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        document.getElementById("emailInput").value = storedEmail;
      }
    }
  
    // Escuchar el evento "click" del botón "Recordarme"------------------------------------------------------------------------------------------------------>
    /* El boton recordarme no funciona como un disparador para mostrar los datos en la consola , reverlo */
    const rememberMeButton = document.getElementById("rememberMeButton");
  
    if (rememberMeButton) {
      rememberMeButton.addEventListener("click", function () {
        // Recuperar los datos guardados del formulario desde el localStorage--------------------------------------------------------------------------------->
        const datosFormularioJSON = localStorage.getItem("datosFormulario");
  
        if (datosFormularioJSON) {
          // Convertir la cadena JSON en un objeto------------------------------------------------------------------------------------------------------------>
          const datosFormulario = JSON.parse(datosFormularioJSON);
  
          // Mostrar los datos en la consola------------------------------------------------------------------------------------------------------------------>
          /* Revisar este codigo , no me esta mostrando como yo quiero en la consola */
          console.log("Correo Electrónico (Recordar):", datosFormulario.email);
          console.log("Contraseña (Recordar):", datosFormulario.password);
        }
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
  // Function to save the form data
  function saveForm(email, password) {
    // Display the data in the console
    console.log("Email:", email);
    console.log("Password:", password);

    // Convert the data into an object
    const formData = {
      email,
      password
    };

    // Convert the object into a JSON string
    const formDataJSON = JSON.stringify(formData);

    // Store the data in the localStorage
    localStorage.setItem("formData", formDataJSON);
  }

  // Listen to the "submit" event of the form
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Capture the values of the email and password
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;

      // Call the function to save the form data
      saveForm(email, password);

      // Store the email in the localStorage
      localStorage.setItem("email", email);

      // Clear the password field
      document.getElementById("passwordInput").value = "";
    });

    // Restore the value of the email if it exists in localStorage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      document.getElementById("emailInput").value = storedEmail;
    }
  }

  // Listen to the "click" event of the "Remember Me" button
  const rememberMeButton = document.getElementById("rememberMeButton");

  if (rememberMeButton) {
    rememberMeButton.addEventListener("click", function () {
      // Retrieve the saved form data from localStorage
      const formDataJSON = localStorage.getItem("formData");

      if (formDataJSON) {
        // Convert the JSON string into an object
        const formData = JSON.parse(formDataJSON);

        // Display the data in the console
        console.log("Email (Remember Me):", formData.email);
        console.log("Password (Remember Me):", formData.password);
      }
    });
  }
});