import React from "react";
import { FaLinkedin, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './style.css'

export function Contact() {
    return (
        <div className="contact">
            <div>
                <FaPhoneAlt color="#fff" size={30} />
                <p>(xx) xxxx - xxx</p>
            </div>
            <div>
                <FaWhatsapp color="#fff" size={30} />
                <p>(xx) xxxxx - xxx</p>
            </div>
            <div>
                <FaEnvelope color="#fff" size={30} />
                <p>example@datime.com.br</p>
            </div>
            <div>
                <FaLinkedin color="#fff" size={30} />
                <p>/datime</p>
            </div>
        </div>
    )
}


// pega no meu paau