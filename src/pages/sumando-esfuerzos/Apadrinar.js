import React from 'react';
import './Apadrinar.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaHeart, FaDollarSign } from 'react-icons/fa';

const Apadrinar = () => {
    return (
        <div className="apadrinar-container">
            <NavBar />

            <header className="apadrinar-header">
                <h1>Juntos podemos cambiar vidas</h1>
                <p>Tu apoyo puede marcar la diferencia para las mascotas que más lo necesitan.</p>
            </header>

            <section className="apadrinar-info">
                <div className="info-card">
                    <FaHeart className="info-icon" />
                    <h3>Apóyanos</h3>
                    <p>Elige un plan de apadrinamiento y ayuda a proporcionar alimento y cuidado a nuestras mascotas.</p>
                    <div className="apadrinar-plan-buttons">
                        <button className="apadrinar-plan-button apadrinar-mensual">
                            Plan mensual $40 <FaDollarSign />
                        </button>
                        <button className="apadrinar-plan-button apadrinar-bimestral">
                            Plan bimestral $80 <FaDollarSign />
                        </button>
                        <button className="apadrinar-plan-button apadrinar-anual">
                            Plan anual $480 <FaDollarSign />
                        </button>
                    </div>
                </div>
            </section>

            <section className="apadrinar-beneficios">
                <h2>Por qué Apadrinar</h2>
                <ul>
                    <li>Tu contribución asegura el bienestar de nuestras mascotas.</li>
                    <li>Recibes actualizaciones exclusivas sobre el impacto de tu apoyo.</li>
                    <li>Formas parte de una comunidad comprometida con el cuidado animal.</li>
                </ul>
            </section>

            <Footer />
        </div>
    );
};

export default Apadrinar;
