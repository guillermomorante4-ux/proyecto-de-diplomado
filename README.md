<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VIBRATO AGENCY | Contacto</title>
  <style>
    body {
      font-family: 'Arial Black', sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    header, footer {
      background-color: #595a5c;
      color: white;
      padding: 20px;
    }

    header h1 {
      margin: 10px 0;
      font-size: 1.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* Navegación con burbujas en forma de óvalo */
    nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 15px;
    }

    nav a {
      display: inline-block;
      color: white;
      font-weight: bold;
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 10px 28px;
      border-radius: 50px;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 1rem;
      letter-spacing: 1px;
    }

    nav a:hover {
      background-color: #0066cc;
      transform: scale(1.05);
      border-color: white;
    }

    .logo {
      max-width: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    .logo-container {
      margin-bottom: 10px;
    }

    /* Sección de servicios con el mismo estilo de cards */
    #servicios {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
    }

    #servicios h2 {
      font-size: 2.2em;
      color: #0066cc;
      margin-bottom: 30px;
      text-transform: uppercase;
    }

    .servicios-contenedor {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .servicio {
      border: 3px solid #494a4b;
      background-color: #fff;
      border-radius: 12px;
      padding: 20px;
      flex: 1 1 250px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
      transition: transform 0.2s;
      text-align: left;
    }

    .servicio:hover {
      transform: translateY(-5px);
    }

    .servicio h3 {
      color: #0066cc;
      font-size: 1.5em;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .servicio p {
      font-size: 1em;
      line-height: 1.5;
      color: #333;
    }

    /* Formulario de contacto - mismo estilo de cards */
    main {
      max-width: 700px;
      margin: 40px auto;
      padding: 0 20px;
    }

    .formulario-card {
      border: 3px solid #494a4b;
      background-color: #fff;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
      text-align: left;
    }

    .formulario-card h2 {
      font-size: 2.2em;
      color: #0066cc;
      margin-bottom: 10px;
      text-transform: uppercase;
      text-align: center;
    }

    .subtitulo-contacto {
      text-align: center;
      color: #595a5c;
      margin-bottom: 25px;
      font-weight: bold;
    }

    label {
      font-weight: bold;
      color: #333;
      display: block;
      margin-bottom: 8px;
      font-size: 1rem;
    }

    input, textarea, select {
      width: 100%;
      padding: 12px;
      border: 2px solid #494a4b;
      border-radius: 8px;
      font-family: 'Arial Black', sans-serif;
      font-size: 1rem;
      box-sizing: border-box;
      margin-bottom: 20px;
      background-color: #fff;
    }

    input:focus, textarea:focus, select:focus {
      outline: none;
      border-color: #0066cc;
      box-shadow: 0 0 5px rgba(0,102,204,0.3);
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }

    /* Campo "Otro" que aparece dinámicamente */
    .campo-otro {
      display: none;
    }

    .campo-otro.show {
      display: block;
    }

    button {
      background-color: #0066cc;
      color: white;
      border: none;
      padding: 12px 30px;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      font-family: 'Arial Black', sans-serif;
      text-transform: uppercase;
      width: 100%;
      transition: background-color 0.2s;
    }

    button:hover {
      background-color: #004d99;
    }

    /* Info de contacto extra */
    .contacto-info {
      margin-top: 25px;
      text-align: center;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      border-top: 2px solid #494a4b;
      padding-top: 20px;
    }

    .contacto-info span {
      color: #595a5c;
      font-weight: bold;
    }

    footer {
      margin-top: 40px;
    }

    footer p {
      margin: 0;
      font-size: 0.9rem;
    }

    @media (max-width: 700px) {
      header h1 { font-size: 1.3rem; }
      .servicios-contenedor { flex-direction: column; }
      .formulario-card { padding: 20px; }
      nav a { padding: 8px 20px; font-size: 0.9rem; }
    }
  </style>
</head>
<body>

  <header>
    <div class="logo-container">
      <img src="vibratologo.jpeg" alt="Logo de la empresa" class="logo" width="10%">
    </div>
    <h1>🎙️ VIBRATO AGENCY</h1>
    <nav>
      <a href="index.html">Inicio</a>
      <a href="blog.html">Blog</a>
      <a href="servicios.html">Servicios</a>
      <a href="contacto.html">Contacto</a>
    </nav>
  </header>

  <section id="servicios">
    <h2>✨ Nuestros Servicios ✨</h2>
    <div class="servicios-contenedor">
      <div class="servicio">
        <h3>🎧 Locución Comercial</h3>
        <p>Grabaciones profesionales para anuncios, spots y campañas publicitarias.</p>
      </div>
      <div class="servicio">
        <h3>🎙️ Radio & Podcast</h3>
        <p>Producción y conducción de programas con calidad de estudio.</p>
      </div>
      <div class="servicio">
        <h3>🎤 Entrenamiento Vocal</h3>
        <p>Clases personalizadas para mejorar dicción, tono y proyección de voz.</p>
      </div>
      <div class="servicio">
        <h3>📽️ Narración Audiovisual</h3>
        <p>Voces para documentales, videos corporativos y material educativo.</p>
      </div>
    </div>
  </section>

  <main>
    <div class="formulario-card">
      <h2>Contáctame</h2>
      <div class="subtitulo-contacto">📍 Déjanos tu mensaje y vibremos juntos</div>

      <form action="#" method="post" id="formContacto">
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ej: Valentina Herrera" required>

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="talent@vibrato.com" required>

        <label for="servicio">¿Qué servicio te interesa?</label>
        <select id="servicio" name="servicio">
          <option value="">-- Selecciona una opción --</option>
          <option value="Locución Comercial">🎧 Locución Comercial</option>
          <option value="Radio y Podcast">🎙️ Radio y Podcast</option>
          <option value="Entrenamiento Vocal">🎤 Entrenamiento Vocal</option>
          <option value="Narración Audiovisual">📽️ Narración Audiovisual</option>
          <option value="otro">📝 Otro (específica abajo)</option>
        </select>

        <!-- Campo oculto que aparece solo cuando seleccionan "Otro" -->
        <div id="campoOtro" class="campo-otro">
          <label for="otroServicio">Especifica tu servicio:</label>
          <input type="text" id="otroServicio" name="otroServicio" placeholder="Ej: Doblaje, Voice over, Clases grupales, etc.">
        </div>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos más sobre tu proyecto..."></textarea>

        <button type="submit">Enviar mensaje</button>
      </form>

      <div class="contacto-info">
        <span>📧 hola@vibratoagency.com</span>
        <span>📞 +34 612 34 56 78</span>
        <span>🎙️ @vibrato_agency</span>
      </div>
    </div>
  </main>

  <footer>
    <p>© 2026 VIBRATO AGENCY · La voz que conecta emociones</p>
  </footer>

  <script>
    // JavaScript para mostrar/ocultar el campo "Otro" dinámicamente
    const selectServicio = document.getElementById('servicio');
    const campoOtro = document.getElementById('campoOtro');

    selectServicio.addEventListener('change', function() {
      if (this.value === 'otro') {
        campoOtro.classList.add('show');
      } else {
        campoOtro.classList.remove('show');
        // Limpiar el campo cuando se oculta
        document.getElementById('otroServicio').value = '';
      }
    });

    // Validar antes de enviar: si seleccionó "otro", asegurarse de que haya escrito algo
    const form = document.getElementById('formContacto');
    form.addEventListener('submit', function(e) {
      if (selectServicio.value === 'otro') {
        const otroInput = document.getElementById('otroServicio');
        if (otroInput.value.trim() === '') {
          e.preventDefault();
          alert('Por favor, escribe qué servicio necesitas en el campo "Especifica tu servicio".');
          otroInput.focus();
        }
      } else if (selectServicio.value === '') {
        e.preventDefault();
        alert('Por favor, selecciona un servicio o elige "Otro" para especificarlo.');
      }
    });
  </script>
</body>
</html>
