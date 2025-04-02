import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <NavBar />
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Declaración de Privacidad</h1>
          <p>En nuestro albergue, valoramos tu privacidad. Lee nuestra declaración de privacidad para comprender cómo manejamos tu información.</p>
        </header>

        <section className="privacy-section">
          <h2>1. Recopilación de Información</h2>
          <p>Recolectamos información personal como nombre, dirección, teléfono y correo electrónico al momento de la adopción o suscripción a nuestros servicios.</p>
        </section>

        <section className="privacy-section">
          <h2>2. Uso de la Información</h2>
          <p>Utilizamos la información proporcionada exclusivamente para facilitar el proceso de adopción, gestionar suscripciones y enviar información sobre el albergue.</p>
          <ul>
            <li>Notificaciones de adopciones y eventos.</li>
            <li>Actualización sobre el estado de las mascotas.</li>
            <li>Envío de newsletters y promociones (con consentimiento previo).</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Compartición de la Información</h2>
          <p>No compartimos tu información personal con terceros sin tu consentimiento, salvo en circunstancias requeridas por ley.</p>
        </section>

        <section className="privacy-section">
          <h2>4. Seguridad de la Información</h2>
          <p>Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados o uso indebido.</p>
        </section>

        <section className="privacy-section">
          <h2>5. Derechos del Usuario</h2>
          <p>Como usuario, tienes derecho a acceder, rectificar y eliminar tus datos personales. También puedes retirar tu consentimiento para el tratamiento de datos en cualquier momento.</p>
        </section>

        <section className="privacy-section">
          <h2>6. Actualizaciones de la Política de Privacidad</h2>
          <p>Nos reservamos el derecho de actualizar esta declaración de privacidad. Las modificaciones serán publicadas en esta página.</p>
        </section>

        <footer className="privacy-footer">
          <p>Si tienes preguntas o inquietudes sobre nuestra política de privacidad, no dudes en <a href="mailto:adoptify@gmail.com">contactarnos</a>.</p>
        </footer>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
