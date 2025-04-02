import React from 'react';
import './Donaciones.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaHome, FaBox, FaBone, FaBroom, FaCapsules, FaDog, FaCouch, FaHandsHelping, FaSmile } from 'react-icons/fa';

const Donaciones = () => {
    return (
        <div className="donaciones-container">
            <NavBar />

            <header className="donaciones-header">
                <h1>Haz una Donación</h1>
                <p>Tu generosidad puede mejorar la vida de muchas mascotas. Dona hoy y marca la diferencia.</p>
            </header>

            <section className="donaciones-info">
                <div className="donacion-card">
                    <FaHome className="donacion-icon" />
                    <h3>Dirección del Albergue</h3>
                    <p>Pronto te informaremos la ubicación exacta donde podrás dejar tus donaciones. ¡Gracias por tu apoyo!</p>
                </div>
                <div className="donacion-card">
                    <FaBox className="donacion-icon" />
                    <h3>¿Qué Puedes Donar?</h3>
                    <ul className="donaciones-list">
                        <li><FaBone className="donacion-item-icon" /> Alimentos secos y húmedos para perros y gatos</li>
                        <li><FaDog className="donacion-item-icon" /> Juguetes y mantas</li>
                        <li><FaBroom className="donacion-item-icon" /> Artículos de limpieza como detergentes y cloro</li>
                        <li><FaCapsules className="donacion-item-icon" /> Medicamentos y suplementos para mascotas</li>
                        <li><FaCouch className="donacion-item-icon" /> Camas y casas para mascotas</li>
                    </ul>
                </div>
                <div className="donacion-card">
                    <FaHandsHelping className="donacion-icon" />
                    <h3>Cómo Donar</h3>
                    <p>Puedes visitar nuestro albergue para dejar tus donaciones en persona o comunicarte con nosotros para más detalles sobre las entregas.</p>
                </div>
            </section>

            <section className="agradecimiento">
                <FaSmile className="agradecimiento-icon" />
                <h2>¡Gracias por tu Generosidad!</h2>
                <p>
                    Tu ayuda hace posible que muchas mascotas tengan una mejor calidad de vida.
                    Juntos, podemos hacer la diferencia.
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default Donaciones;
