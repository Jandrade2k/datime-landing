import React from 'react';
import Cafe from '../../images/logos/logo-cafe.png'
import './style.css';

export function MiniCard() {
    return (
        <>
        <div className="mini-card">
            <img src={Cafe} alt="logo" />
        </div>
        </>
    )
}