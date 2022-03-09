import React from 'react';
import logo from '../../images/logo-png.png';
import './style.css';

export function Header() {
    return (
        <>
            <div className="container">
                <img src={logo} alt="logo" />
                <div className="menu">
                    <a href="#">Inicio</a>
                    <a href="#">Quem somos </a>
                    <a href="#">Casos de sucesso</a>
                </div>
            </div>
        </>
    )
}