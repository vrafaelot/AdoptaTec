import React from 'react';
import './Adoptar.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { FaDog, FaCat, FaInfoCircle } from 'react-icons/fa';

const Adoptar = () => {
    return (
        <div className="adoptar-container">
            <NavBar />

            <header className="adoptar-header">
                <h1>Adopta una Mascota</h1>
                <p>Dar una segunda oportunidad a una mascota es una de las decisiones más gratificantes que puedes tomar.</p>
            </header>

            <section className="adoptar-info">
                <div className="info-card">
                    <FaDog className="info-icon" />
                    <h3>Perros en Adopción</h3>
                    <p>Explora nuestra selección de perros que buscan un hogar lleno de amor y cuidados. Encuentra el compañero perfecto para ti.</p>
                </div>
                <div className="info-card">
                    <FaCat className="info-icon" />
                    <h3>Gatos en Adopción</h3>
                    <p>Nuestros gatos están listos para ser parte de tu familia. Ven y conoce a estos adorables felinos que necesitan un hogar cariñoso.</p>
                </div>
                <div className="info-card">
                    <FaInfoCircle className="info-icon" />
                    <h3>Proceso de Adopción</h3>
                    <p>Te guiaremos en cada paso para asegurarnos de que la adopción sea fácil y que la mascota encuentre un hogar adecuado.</p>
                </div>
            </section>

            <section className="adoptar-beneficios">
                <h2>Beneficios de Adoptar</h2>
                <ul>
                    <li>Salvas una vida y das una segunda oportunidad.</li>
                    <li>Reduces el número de animales sin hogar.</li>
                    <li>Recibes amor y gratitud incondicional de tu nueva mascota.</li>
                    <li>Contribuyes a la misión de nuestro albergue y apoyas una causa importante.</li>
                </ul>
            </section>

            <section className="adoptar-testimonios">
                <h2>Historias de Adopción</h2>
                <div className="testimonios-container">
                    <div className="testimonio">
                        <p>"Adopté a Max y mi vida ha cambiado completamente. Es el mejor compañero que pude pedir."</p>
                        <span>- Ana Martínez</span>
                    </div>
                    <div className="testimonio">
                        <p>"Luna, mi gatita, me llena de alegría cada día. Adoptar fue la mejor decisión que tomé."</p>
                        <span>- Pedro Gómez</span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Adoptar;
