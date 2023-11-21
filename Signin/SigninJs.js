// Función para guardar el formulario almacenado ---------------------------------------------->
function saveForm(email, password) {
  const formData = {
    email,
    password,
  };
  const formDataJSON = JSON.stringify(formData);

  // Almacenar los datos en Local Storage ----------------------------------------------------->
  localStorage.setItem("formData", formDataJSON);
}

// Función para cargar y mostrar los datos qye tenes guardados--------------------------------->
function loadAndDisplayData() {
  const formDataJSON = localStorage.getItem("formData");

  if (formDataJSON) {
    const formData = JSON.parse(formDataJSON);
    console.log("Correo Electrónico:", formData.email);
    console.log("Contraseña:", formData.password);
  }
}

// Te manda la info del "input" en el campo de correo electrónico --------------------------------->
const emailInput = document.getElementById("floatingInput");
emailInput.addEventListener("input", function () {
  if (this.value === "") {
    console.clear();
    loadAndDisplayData();
  }
});

// Escuchar el evento "input" en el campo de contraseña ------------------------------------------>
const passwordInput = document.getElementById("floatingPassword");
passwordInput.addEventListener("input", function () {
  if (this.value === "") {
    console.clear();
    loadAndDisplayData();
  }
});

loadAndDisplayData();

// Boton recordarme------------------------------------------------------------------------------>
const rememberMeCheckbox = document.getElementById("flexCheckDefault");
rememberMeCheckbox.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  saveForm(email, password);

  // Muestra la alerta de SweetAlert-------------------------------------------------------------->
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Tus datos han sido guardados",
    showConfirmButton: false,
    timer: 1500
  });
});

loadAndDisplayData();