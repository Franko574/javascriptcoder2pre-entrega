const baseDeDatos = [
  {
    id: 1,
    name: "Sr. Front End Developer - Diseñador Web Finalis",
    username: "Tito",
    mail: "Tito@lotson.com.ar",
    direccion: "Argentina, Buenos Aires, San Fernando",
    tiempo: "2 semanas",
    modalidad: "Híbrido",
    solicitudes: "91 Solicitudes",
    trabajo: "Diseñador Web Front End",
    empresa: "Diseñador Web Finalis",
  },
  {
    id: 2,
    name: "Digital Graphic Designer - Prex",
    username: "EjemploUsuario",
    mail: "ejemplo@prex.com",
    direccion: "Argentina, Buenos Aires, Ciudad de Buenos Aires",
    tiempo: "3 semanas",
    modalidad: "En Remoto",
    solicitudes: "120 Solicitudes",
    trabajo: "Diseñador Gráfico",
    empresa: "Prex",
  },
  {
    id: 3,
    name: "Instagram Community Manager - Empresa XYZ",
    username: "OtroUsuario",
    mail: "otro@empresaXYZ.com",
    direccion: "Argentina, Buenos Aires, La Plata",
    tiempo: "4 semanas",
    modalidad: "Presencial",
    solicitudes: "80 Solicitudes",
    trabajo: "Instagram Community Manager",
    empresa: "Empresa XYZ",
  },
  {
    id: 4,
    name: "Project Manager - ABC Consulting",
    username: "AdminUser",
    mail: "admin@abcconsulting.com",
    direccion: "Argentina, Buenos Aires, Quilmes",
    tiempo: "1 semana",
    modalidad: "Híbrido",
    solicitudes: "150 Solicitudes",
    trabajo: "Project Manager",
    empresa: "ABC Consulting",
  },
  {
    id: 5,
    name: "Arquitecto - ArqTech",
    username: "ArqUser",
    mail: "arq@arqtech.com",
    direccion: "Argentina, Buenos Aires, Vicente López",
    tiempo: "2 semanas",
    modalidad: "Presencial",
    solicitudes: "60 Solicitudes",
    trabajo: "Arquitecto",
    empresa: "ArqTech",
  },
];

// Obtener elementos del DOM
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

// Copiar la base de datos para trabajar con ella
let users = baseDeDatos.slice();

// Agregar un evento para filtrar usuarios por búsqueda
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible = Object.values(user).some((val) => {
      if (typeof val === "string") {
        return val.toLowerCase().includes(value);
      }
      return false;
    });
    user.element.classList.toggle("hide", !isVisible);
  });
});

// Crear tarjetas de usuario y asignar eventos
users.forEach((user) => {
  // Clonar la plantilla de tarjeta de usuario
  const card = userCardTemplate.content.cloneNode(true).children[0];

  // Obtener elementos de la tarjeta
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  const enviarSolicitudButton = card.querySelector('[data-card-button="enviar-solicitud"]');
  const guardarBusquedaButton = card.querySelector('[data-card-button="guardar-busqueda"]');

  // Llenar la tarjeta con datos del usuario
  header.textContent = user.name;
  body.textContent = `Email: ${user.mail}, Trabajo: ${user.trabajo}, Empresa: ${user.empresa}`;

  // Agregar eventos a los botones de la tarjeta
  enviarSolicitudButton.addEventListener("click", () => {
    appendAlert("Solicitud enviada!", "success", user);
  });

  guardarBusquedaButton.addEventListener("click", () => {
    gualert("Búsqueda Guardada!", "info", user);
  });

  // Agregar la tarjeta al contenedor
  userCardContainer.append(card);
  user.element = card; // Asignar la tarjeta al objeto de usuario
});

// Función para mostrar alertas de solicitud enviada
const appendAlert = (message, type, user) => {
  const card = user.element;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  const alertContainer = card.querySelector(".alert-container");
  alertContainer.innerHTML = "";
  alertContainer.append(wrapper);
};

// Función para mostrar alertas de búsqueda guardada
const gualert = (message, type, user) => {
  const card = user.element;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  const alertContainer = card.querySelector(".alert-container");
  alertContainer.innerHTML = "";
  alertContainer.append(wrapper);
};

// Evento para el botón "Guardar Búsqueda" en el documento
const trigerbuardar = document.getElementById("guardaralertbtn");


// Chequear para que es, creo que ya no se usa mas
if (trigerbuardar) {
  trigerbuardar.addEventListener("click", () => {
    // Llamar a la función gualert con el mensaje apropiado
    gualert("Búsqueda Guardada!", "success");
  });
}


  
  
  /*   const baseDeDatos = [
    {
        id: 1,
        name: "Sr. Front End Developer - Diseñador Web Finalis",
        username: "Tito",
        mail: "Tito@lotson.com.ar",
        direccion: "Argentina, Buenos Aires, San Fernando",
        tiempo: "2 semanas",
        modalidad: "Híbrido",
        solicitudes: "91 Solicitudes",
        trabajo: "Diseñador Web Front End",
        empresa: "Diseñador Web Finalis",
    },
    {
        id: 2,
        name: "Digital Graphic Designer - Prex",
        username: "EjemploUsuario",
        mail: "ejemplo@prex.com",
        direccion: "Argentina, Buenos Aires, Ciudad de Buenos Aires",
        tiempo: "3 semanas",
        modalidad: "En Remoto",
        solicitudes: "120 Solicitudes",
        trabajo: "Diseñador Gráfico",
        empresa: "Prex",
    },
    {
        id: 3,
        name: "Instagram Community Manager - Empresa XYZ",
        username: "OtroUsuario",
        mail: "otro@empresaXYZ.com",
        direccion: "Argentina, Buenos Aires, La Plata",
        tiempo: "4 semanas",
        modalidad: "Presencial",
        solicitudes: "80 Solicitudes",
        trabajo: "Instagram Community Manager",
        empresa: "Empresa XYZ",
    },
    {
        id: 4,
        name: "Project Manager - ABC Consulting",
        username: "AdminUser",
        mail: "admin@abcconsulting.com",
        direccion: "Argentina, Buenos Aires, Quilmes",
        tiempo: "1 semana",
        modalidad: "Híbrido",
        solicitudes: "150 Solicitudes",
        trabajo: "Project Manager",
        empresa: "ABC Consulting",
    },
    {
        id: 5,
        name: "Arquitecto - ArqTech",
        username: "ArqUser",
        mail: "arq@arqtech.com",
        direccion: "Argentina, Buenos Aires, Vicente López",
        tiempo: "2 semanas",
        modalidad: "Presencial",
        solicitudes: "60 Solicitudes",
        trabajo: "Arquitecto",
        empresa: "ArqTech",
    },
] */