import LOGO1 from './Logo Sebrae 1.png' /* IMPORTO PNG DA LOGO */
import './Header.css' /* IMPORTO O CSS */
import React, { useState } from 'react';


export default function Header(){

        const [activeIndex, setActiveIndex] = useState(3);
    
        const handleClick = (index) => {
            setActiveIndex(index);
        };
    
        return (
            <header> 
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={LOGO1} className="Logo1" alt="1logo" width="100" height="50" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <div className={`fundo ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SOBRE</a>
                                    </li>
                                </div>
                                <div className={`fundo ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SOCIAIS</a>
                                    </li>
                                </div>
                                <div className={`fundo ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">FORMULÁRIOS</a>
                                    </li>
                                </div>
                                <div className={`fundo ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ENTRAR</a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    