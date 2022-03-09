import React from "react";
import { Card } from "../card"
import './style.css';

export function Content() {

    const lorem = "Quisque vitae lobortis tellus. Aenean euismod metus in placerat commodo."


    return (
        <>
            <div className="content">
                <h1>Quem Somos</h1>
                <div className='cards'>
                    <Card title="Inovação" text={lorem} />
                    <Card title="Tecnologia" text={lorem} />
                    <Card title="Confiança" text={lorem} />
                </div>
            </div>
        </>
    )
}