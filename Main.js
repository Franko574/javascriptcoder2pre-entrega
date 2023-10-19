    /* La idea de este trabajo es crear un buscador de trabajo freelance , donde nuestro usuario coloque sus intereses y le muestre los trabajos disponibles
    que se encuentra las ofertas que hay son;
    -diseñador web
    -diseñador gráfico
    -instagram community manager
    -project manager
    -arquitecto
    */
    
    // Lista de trabajos----------------------------------------------------------------------------------------------------------------------------------------------->*/
    const trabajos = {
        "diseñador web front end": [
            "Sr. Front End Developer - Diseñador Web Finalis · Argentina (Híbrido)  hace 3 semanas  · 91 solicitudes",
            "Sr. Frontend Engineer - Health Gorilla · Buenos Aires, Provincia de Buenos Aires, Argentina Publicado de nuevo hace 1 semana  · 140 solicitudes",
        ],
        "diseñador gráfico": [
            "Digital Graphic Designer - Argentina Remote - Prex · Argentina (En remoto)  hace 2 semanas  · 839 solicitudes",
            "Digital Designer - Ogilvy · Buenos Aires y alrededores (Híbrido)  hace 4 días  · 202 solicitudes"
        ],
        "instagram community manager": [
            "MARKETING DIRECTOR. NSAM (Argentina, Brasil, Peru, Chile) - Nissan North America · Provincia de Buenos Aires, Argentina (Híbrido)  hace 2 semanas  · 364 solicitudes",
            "Digital Strategy Senior Manager LATAM - The Coca-Cola Company · Buenos Aires, Provincia de Buenos Aires, Argentina (Presencial) Publicado de nuevo  hace 3 días  · 330 solicitudes"
        ],
        "project manager": [
            "Business Project Manager - Olivos/Barracas- PwC Argentina · Provincia de Buenos Aires, Argentina (Híbrido) Publicado de nuevo  hace 2 semanas  · 261 solicitudes",
            "Jefe de proyectos - Tsoft · Argentina (En remoto)  hace 3 semanas  · 528 solicitudes"
        ],
        "arquitecto": [
            "Project Architect- slantis · Buenos Aires y alrededores (Presencial)  hace 3 semanas  · 101 solicitudes",
            "Arquitecto - RK Arquitectura · Buenos Aires y alrededores (Presencial)  hace 3 días  · 38 solicitudes"
        ]
    };

        // Función para eliminar acentos y hacer minúscula la cadena -------------------------------------------------------------------------------------------------->*/
        function limpiarTexto(texto) {
            return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }
        
        function buscarTrabajo() {
            const categoriaInputVal = document.getElementById("categoriaInput").value;
            const limpio = limpiarTexto(categoriaInputVal);
            const resultadoDiv = document.getElementById("resultado");
        
            resultadoDiv.innerHTML = "";
        
            if (limpio.trim() === "") {
                resultadoDiv.innerHTML = "<p>Por favor, ingrese una categoría para buscar trabajos.</p>";
                console.clear();  // Limpia la consola cuando el input está vacío-------------------------------------------------------------------------------------->*/
                return;
            }
        
            let categoriasEncontradas = [];  // Array para guardar las categorías encontradas--------------------------------------------------------------------------->*/
        
            for (const categoria in trabajos) {
                if (limpiarTexto(categoria).includes(limpio)) {
                    const trabajosEnCategoria = trabajos[categoria];
                    resultadoDiv.innerHTML += `<h2>Trabajos en ${categoria}:</h2>`;
                    resultadoDiv.innerHTML += "<ul>";
                    trabajosEnCategoria.forEach(trabajo => {
                        resultadoDiv.innerHTML += `<li>${trabajo}</li>`;
                    });
                    resultadoDiv.innerHTML += "</ul>";
        
                    categoriasEncontradas.push(categoria);  // Agregamos la categoría al array-------------------------------------------------------------------------->*/
                }
            }
        
            if (resultadoDiv.innerHTML === "") {
                resultadoDiv.innerHTML = "<p>No se encontraron trabajos en la categoría ingresada.</p>";
            }
        
            // Mostrar en la consola solo las descripciones de trabajos encontrados-------------------------------------------------------------------------------------->*/
            if (categoriasEncontradas.length > 0) {
                console.log("Descripciones de trabajos encontrados:", categoriasEncontradas.join(", "));
            }
        }
        
        document.getElementById("categoriaInput").addEventListener("input", function() {
            if (this.value === "") {
                console.clear();  // Limpia la consola cuando el input está vacío----------------------------------------------------------------------------------------->*/
            }
        });

