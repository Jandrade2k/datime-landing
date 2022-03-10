import React from "react";
import { Banner } from "../banner";
import { MiniCard } from "../mini-card";
import {Info} from '../info';
import './style.css';

export function Cases() {
    return (
        <div className="cases">
            <Banner href='baner-cases' />
            <div className="logo-case">
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </div>
            <Info />
        </div>
    )
}