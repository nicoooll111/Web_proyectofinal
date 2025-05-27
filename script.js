let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    
    document.querySelector('.carousel').scrollTo({
        left: slides[currentIndex].offsetLeft,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const agregarBtn = document.getElementById("agregar-noticia");
    const listaNoticias = document.getElementById("lista-noticias");
    const modal = document.getElementById("modal");
    const cerrarModal = document.getElementById("cerrar-modal");
    const guardarBtn = document.getElementById("guardar-noticia");
    const tituloInput = document.getElementById("titulo-noticia");
    const imagenFileInput = document.getElementById("imagen-noticia-file");
    const imagenPreview = document.getElementById("imagen-preview");
    const contenidoInput = document.getElementById("contenido-noticia");

    let noticias = JSON.parse(localStorage.getItem("noticias")) || [];
    let imagenBase64ParaGuardar = '';
    let editandoIndice = -1; 

    function mostrarNoticias() {
        listaNoticias.innerHTML = ""; // **LIMPIAR EL CONTENEDOR ANTES DE VOLVER A AÑADIR**
                                     // 
        noticias.forEach((noticia, index) => {
            let noticiaDiv = document.createElement("div");
            noticiaDiv.classList.add("noticia");
            
            noticiaDiv.setAttribute("itemscope", "");
            noticiaDiv.setAttribute("itemtype", "https://schema.org/Article");

            const fechaOriginal = new Date(noticia.fecha);
            const fechaISO = fechaOriginal.toISOString().split('T')[0];

            noticiaDiv.innerHTML = `
                <img src="${noticia.imagenBase64}" alt="${noticia.titulo}" class="imagen-noticia" itemprop="image">
                <h3 itemprop="name">${noticia.titulo}</h3>
                <p itemprop="description">${noticia.contenido}</p>
                <small>🕒 ${noticia.fechaMostrar || "Sin fecha"}</small>
                
                <meta itemprop="datePublished" content="${fechaISO}">
                <meta itemprop="dateModified" content="${fechaISO}">
                
                <div itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <meta itemprop="name" content="Nicolle Villarreal Melo">
                </div>
                
                <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                    <meta itemprop="name" content="Nicolle Villarreal Melo - Blog Noticias">
                </div>

                <br>
                <button class="boton" onclick="editarNoticia(${index})">✏ Editar</button>
                <button class="boton" onclick="eliminarNoticia(${index})">❌ Eliminar</button>
            `;
            
            listaNoticias.appendChild(noticiaDiv);

            setTimeout(() => {
                noticiaDiv.style.opacity = "1";
                noticiaDiv.style.transform = "scale(1)";
            }, 100);
        });
    }

    // Evento para previsualizar la imagen cuando se selecciona un archivo
    imagenFileInput?.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagenPreview.src = e.target.result;
                imagenPreview.style.display = 'block';
                imagenBase64ParaGuardar = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            imagenPreview.src = '#';
            imagenPreview.style.display = 'none';
            imagenBase64ParaGuardar = '';
        }
    });

    agregarBtn?.addEventListener("click", function() {
        modal.style.display = "flex";
        tituloInput.value = "";
        imagenFileInput.value = ""; 
        imagenPreview.src = '#';
        imagenPreview.style.display = 'none';
        imagenBase64ParaGuardar = '';
        contenidoInput.value = "";
        tituloInput.focus();
        editandoIndice = -1; // Resetear el índice de edición al agregar nueva noticia
    });

    cerrarModal?.addEventListener("click", function() {
        modal.style.display = "none";
        
    });

    // Handler único para el botón Guardar
    const manejarGuardarNoticia = function() {
        if (!tituloInput.value || !contenidoInput.value || !imagenBase64ParaGuardar) {
            alert("Por favor, completa todos los campos y selecciona una imagen.");
            return;
        }

        const fechaActual = new Date();
        const fechaFormateada = fechaActual.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });

        const noticiaData = {
            titulo: tituloInput.value.trim(),
            imagenBase64: imagenBase64ParaGuardar,
            contenido: contenidoInput.value.trim(),
            fecha: fechaActual.toISOString(),
            fechaMostrar: fechaFormateada
        };

        if (editandoIndice !== -1) {
            // Si estamos editando, actualizamos la noticia existente
            noticias[editandoIndice] = noticiaData;
        } else {
            // Si no estamos editando, agregamos una nueva noticia
            noticias.push(noticiaData);
        }
        
        localStorage.setItem("noticias", JSON.stringify(noticias));
        modal.style.display = "none";
        mostrarNoticias(); // Vuelve a mostrar las noticias (limpia y renderiza)
    };

    // Asigna el handler al botón UNA SOLA VEZ al cargar la página
    guardarBtn?.addEventListener("click", manejarGuardarNoticia);

    // Función para editar noticia
    window.editarNoticia = function(index) {
        editandoIndice = index; // Establecer el índice de la noticia que se está editando
        const noticiaAEditar = noticias[index];
        
        tituloInput.value = noticiaAEditar.titulo;
        contenidoInput.value = noticiaAEditar.contenido;
        
        if (noticiaAEditar.imagenBase64) {
            imagenPreview.src = noticiaAEditar.imagenBase64;
            imagenPreview.style.display = 'block';
            imagenBase64ParaGuardar = noticiaAEditar.imagenBase64;
        } else {
            imagenPreview.src = '#';
            imagenPreview.style.display = 'none';
            imagenBase64ParaGuardar = '';
        }
        
        imagenFileInput.value = ""; 

        modal.style.display = "flex";
        tituloInput.focus();
    };

    window.eliminarNoticia = function(index) {
        if (confirm("¿Estás seguro de que quieres eliminar esta noticia?")) {
            noticias.splice(index, 1);
            localStorage.setItem("noticias", JSON.stringify(noticias));
            mostrarNoticias();
        }
    };

    mostrarNoticias();
});