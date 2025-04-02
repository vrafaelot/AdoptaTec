import React from 'react';
import './Terms.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="terms-page">
      <NavBar />

      <div className="terms-container">
        <header className="terms-header">
          <h1>Términos y Condiciones</h1>
          <p>Bienvenido a nuestro albergue. Por favor, lea nuestros términos y condiciones antes de utilizar nuestros servicios.</p>
        </header>

        <section className="terms-section">
          <h2>1. Política de Adopción</h2>
          <p>Nos comprometemos a asegurar que cada mascota sea adoptada por una familia responsable y amorosa. Todas las adopciones están sujetas a la verificación de los antecedentes de los adoptantes.</p>
          <ul>
            <li>El adoptante debe ser mayor de 18 años.</li>
            <li>Debe proporcionar una identificación válida y comprobante de domicilio.</li>
            <li>Debe aceptar una inspección en el hogar si se considera necesario.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>2. Protección de Datos</h2>
          <p>Valoramos su privacidad y nos comprometemos a proteger sus datos personales. Los datos recolectados serán utilizados exclusivamente para el proceso de adopción y comunicación relacionada.</p>
          <ul>
            <li>No compartimos sus datos personales con terceros sin su consentimiento.</li>
            <li>Puede solicitar la eliminación de sus datos en cualquier momento.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Derechos y Responsabilidades del Adoptante</h2>
          <p>El adoptante es responsable del bienestar de la mascota y debe proporcionarle un hogar seguro, amoroso y saludable.</p>
          <ul>
            <li>El adoptante se compromete a brindar atención veterinaria a la mascota.</li>
            <li>La mascota no debe ser utilizada para actividades comerciales sin autorización del albergue.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Responsabilidad del Albergue</h2>
          <p>Nuestro albergue se compromete a ofrecer servicios de calidad y a brindar todo el apoyo necesario para una adopción exitosa.</p>
          <ul>
            <li>Proporcionamos información completa sobre la salud y el comportamiento de la mascota.</li>
            <li>Ofrecemos orientación post-adopción en caso de ser necesario.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Cambios en los Términos</h2>
          <p>Nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. Los cambios serán publicados en esta página.</p>
        </section>

        <footer className="terms-footer">
          <p>Gracias por confiar en nuestro albergue y por ofrecer un hogar amoroso a nuestras mascotas. Si tienes alguna pregunta, no dudes en <a href="https://wa.me/935389473" target="_blank" rel="noopener noreferrer">contactarnos</a>.</p>
        </footer>

      </div>

      <Footer />
    </div>
  );
};

export default Terms;
