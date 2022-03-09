import React from "react";
import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import { Content } from "../../components/content";
import { Cases } from "../../components/cases";

export function Index() {

    return (
        <>
            <Header />
            <Banner href="banner" />
            <Content />
            <Cases />
        </>
    )
}