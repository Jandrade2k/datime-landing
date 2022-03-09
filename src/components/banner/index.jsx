import React from "react";
import baner from '../../images/baner.png';
import banerCase from '../../images/baner-cases.png';
import './style.css';

export function Banner(props) {

    var href = '';


    if (props.href == 'banner') {
        href = baner; 
    } else if (props.href == 'baner-cases') {
        href = banerCase;
    } else {
        return (
            <>
            </>
        )
    }

    return (
        <div className="banner">
            <img src={href} alt="banner" />
        </div>
    )
}