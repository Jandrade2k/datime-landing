import React from "react";
import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import { Content } from "../../components/content";
import { Cases } from "../../components/cases";
import {Contact} from "../../components/contact";

export function Index() {

    return (
        <div className="body">
            <Header />
            <Banner href="banner" />
            <Content />
            <Cases />
            <Contact />
        </div>
    )
}