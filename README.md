# Mi Sitio Web Personal

Este repositorio contiene el código fuente de mi sitio web personal, diseñado para presentar mi perfil profesional, proyectos, un catálogo y una sección de noticias.

## Descripción del Proyecto

El sitio web está compuesto por varias secciones interconectadas, cada una diseñada para cumplir un propósito específico:

* **Página Principal (`index.html`):** Punto de entrada al sitio, con navegación a las diferentes secciones.
* **Portafolio (`portafolio.html`):**
    * Sobre Mí / Perfil: Una introducción y mi fotografía.
    * Formación Académica: Detalles de mi educación universitaria y bachillerato.
    * Estudios Complementarios: Cursos y diplomados relevantes.
    * Experiencia Laboral: Información detallada sobre puestos anteriores y responsabilidades clave.
    * Habilidades: Lista de competencias profesionales y personales.
    * Mis Proyectos: Una sección interactiva que presenta proyectos destacados con descripciones y enlaces.
    * Referencias Personales: Contactos para verificación de referencias.
    * Contacto: Información de contacto, incluyendo email, teléfono y un botón directo a LinkedIn.
* **Catálogo (`catalogo.html`):**
    * Presentación de productos con imágenes, descripciones y detalles. Puede incluir filtros, categorías o una galería interactiva.
* **Noticias / Blog (`noticias.html`):**
    * Publicación de artículos y novedades relacionadas con mi área de interés, los cuales son agregados por el usuario. También permite visualizar noticias de la página "El Tiempo".
* **Página de Error 404 (`404.html`):** Una página personalizada que se muestra cuando un usuario intenta acceder a una URL inexistente.

### Tecnologías Utilizadas

* **HTML5:** Para la estructura fundamental y semántica de todas las páginas web.
* **CSS3:** Para la estilización, el diseño responsivo y la presentación visual de todo el sitio.
* **JavaScript (ES6+):** Implementación de la interactividad (ej. carruseles de proyectos, menús de navegación, validaciones de formularios si aplica) a lo largo del sitio.

## Funcionalidades Clave y Diseño

El sitio web incorpora las siguientes funcionalidades y principios de diseño:

* **Navegación Consistente:** Un menú de navegación unificado (si aplica) o enlaces claros entre las secciones para una experiencia de usuario fluida.
* **Diseño Responsivo:** Todas las secciones están diseñadas para adaptarse y mostrarse óptimamente en una amplia gama de dispositivos, desde pantallas de escritorio grandes hasta dispositivos móviles.
* **Estructura Semántica:** Uso adecuado de etiquetas HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, etc.) para una mejor comprensión del contenido por parte de los navegadores y tecnologías asistivas.
* **Interactividad:**
    * **Portafolio:** Carrusel dinámico para la visualización de proyectos.
    * **Catálogo:** [Menciona si tiene filtros, galerías lightbox, etc., o elimina si no aplica.]
    * **Noticias:** [Menciona si tiene un sistema de paginación, comentarios, etc., o elimina si no aplica.]
* **Manejo de Errores:** Implementación de una página 404 personalizada para guiar al usuario en caso de enlaces rotos o URLs incorrectas.
* **Estilos y Branding:** Consistencia visual a través de un archivo `styles.css` centralizado, utilizando tipografías y paletas de colores coherentes con la marca personal.

## Entorno de Desarrollo y Pruebas

Para el desarrollo y la verificación del sitio web, se ha utilizado un entorno local replicable, garantizando la consistencia en el despliegue.

### Prerrequisitos

* **Navegador Web Moderno:** Google Chrome (recomendado para usar Lighthouse), Mozilla Firefox, Microsoft Edge.
* **Editor de Código:** Visual Studio Code (con la extensión Live Server).
* **Git (Opcional):** Para la gestión de versiones y clonación del repositorio.
* **Python (Opcional):** Para levantar un servidor web local simple.

### Instrucciones para Levantar el Entorno Local

1.  **Clonación o Descarga del Repositorio:**
    * **Mediante Git:**
        ```bash
        git clone [URL_DEL_REPOSITORIO]
        cd [nombre_de_la_carpeta_del_repositorio]
        ```
        (Reemplaza `[URL_DEL_REPOSITORIO]` con la URL de tu repositorio y `[nombre_de_la_carpeta_del_repositorio]` con el nombre que se cree al clonar.)
    * **Descarga Directa:** Descarga el archivo `.zip` del repositorio desde la plataforma donde esté alojado (ej. GitHub) y descomprímelo en una carpeta de tu elección.

2.  **Acceso al Directorio del Proyecto:**
    Abre tu terminal o línea de comandos y navega al directorio raíz del proyecto (donde se encuentran `index.html`, `portafolio.html`, `catalogo.html`, `noticias.html`, `styles.css`, etc.):
    ```bash
    cd ruta/a/tu/carpeta/del/sitio-web
    ```

3.  **Ejecución del Servidor Local (Método Recomendado):**

    * **Opción A: Extensión "Live Server" (Visual Studio Code)**
        1.  Si no la tienes, instala la extensión "Live Server" en Visual Studio Code.
        2.  En Visual Studio Code, abre la carpeta del proyecto (`Archivo > Abrir Carpeta...`).
        3.  Haz clic derecho sobre `index.html` (o cualquier otro archivo HTML principal) y selecciona "Open with Live Server".
        4.  El sitio se abrirá automáticamente en tu navegador predeterminado, generalmente en una dirección como `http://127.0.0.1:5500/`.

    * **Opción B: Servidor HTTP de Python**
        1.  Abre tu terminal o línea de comandos en la carpeta raíz del proyecto.
        2.  Ejecuta el siguiente comando:
            ```bash
            # Para Python 3
            python -m http.server 8000
            # Para Python 2 (si usas una versión antigua)
            python -m SimpleHTTPServer 8000
            ```
        3.  Abre tu navegador web y visita `http://localhost:8000` o `http://127.0.0.1:8000`.

    * **Opción C: Apertura Directa de Archivos (Funcionalidad Limitada)**
        Puedes simplemente hacer doble clic en `index.html` en el explorador de archivos de tu sistema operativo. **Advertencia:** Esta opción no permite probar correctamente la página 404 ni otras funcionalidades que requieran un entorno de servidor.

## Validaciones y Estándares de Calidad

Para asegurar la calidad, accesibilidad y rendimiento del sitio web, se han implementado y verificado los siguientes estándares:

### Validadores HTML y CSS (W3C)

Se han utilizado los validadores oficiales del W3C para verificar la conformidad del código fuente con los estándares web.

* **Validador HTML (Markup Validation Service):** [https://validator.w3.org/](https://validator.w3.org/)
    * **Alcance:** Todos los archivos `.html` del proyecto (`index.html`, `portafolio.html`, `catalogo.html`, `noticias.html`, `404.html`).
    * **Criterio de Aceptación:** Cero errores críticos reportados. Todas las etiquetas están correctamente anidadas y los atributos son válidos según la especificación HTML5.
* **Validador CSS (CSS Validation Service):** [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
    * **Alcance:** El archivo `styles.css` principal y cualquier otro archivo CSS utilizado.
    * **Criterio de Aceptación:** Cero errores críticos reportados. Todas las propiedades y valores CSS son válidos y la sintaxis es correcta.

**Metodología de Verificación:** Cada archivo ha sido validado de forma individual, con correcciones iterativas hasta cumplir con los criterios de aceptación.

### Herramientas de Análisis Automático (WAVE y Lighthouse)

Estas herramientas han sido empleadas para auditar la accesibilidad y las mejores prácticas de desarrollo.

* **WAVE (Web Accessibility Evaluation Tool):** [https://wave.webaim.org/](https://wave.webaim.org/)
    * **Propósito:** Identificar y corregir problemas de accesibilidad para garantizar que el sitio sea usable por personas con diversas capacidades.
    * **Metodología:** Auditoría de cada página accesible (`index.html`, `portafolio.html`, `catalogo.html`, `noticias.html`, `404.html`) utilizando la extensión de navegador WAVE o su servicio en línea.
    * **Criterio de Aceptación:** Minimizar y, si es posible, eliminar todos los "Errors" y "Alerts" de accesibilidad, asegurando un contraste de color adecuado, textos alternativos para imágenes, etiquetas en formularios (si aplica), y una estructura de encabezados lógica.

* **Lighthouse (Integrado en Google Chrome DevTools):**
    * **Propósito:** Evaluar el rendimiento, la accesibilidad y las mejores prácticas.
    * **Metodología:** Ejecución de auditorías de Lighthouse para las páginas principales del sitio (`index.html`, `portafolio.html`, `catalogo.html`, `noticias.html`) bajo las siguientes condiciones:
        * **Dispositivo:** Móvil.
        * **Dispositivo:** Escritorio.
        * **Categorías Auditadas:** "Accesibilidad" y "Best Practices".
    * **Criterio de Aceptación:** Una puntuación igual o superior al **85%** en las categorías de "Accesibilidad" y "Best Practices" para **todas las páginas auditadas** y en ambas vistas (móvil y escritorio).
    * **Aspectos Clave para la Mejora:**
        * **Accesibilidad:** Optimización de atributos ARIA, validación de contraste de color, consistencia en la navegación por teclado.
        * **Mejores Prácticas:** Verificación de la consola del navegador para errores JavaScript, uso de HTTPS (al desplegar), optimización de recursos (ej. imágenes), y seguridad en enlaces externos (`rel="noopener noreferrer"`).

### Verificación de la Página 404

La funcionalidad de la página de error 404 personalizada se ha validado en entornos de servidor.

* **Metodología:** Intentar acceder a URLs inexistentes dentro del dominio del sitio (ej. `http://localhost:8000/pagina-inexistente.html` en local, o `https://[tu-dominio]/url-falsa` una vez desplegado).
* **Criterio de Aceptación:** La página `404.html` personalizada debe ser mostrada correctamente, ofreciendo una experiencia de usuario consistente e indicando el camino de regreso al inicio.
