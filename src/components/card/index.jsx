import React from "react";
import './style.css';

export function Card(props) {

    if(props.title == null || props.text == null) {
        return (
            <>
            </>
        )
    }

    return (
        <div className="body">
        <div className="card">
            <p>{props.text}</p>
        </div>
        <h3>{props.title}</h3>
        </div>
    )
}