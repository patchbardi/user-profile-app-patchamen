
// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importez votre fichier CSS

const Home = () => {
    return (
        <div className="home-container"> {/* Appliquez la classe CSS */}
            <h1>Bienvenue sur mon profil utilisateur !</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
