import React from "react";
import { HomeContainer } from "./styles";
import Articles from "../../components/articles";

import Header from "../../components/header";

export default function Home() {

    return (
        <HomeContainer>
            <Header />
            <Articles />
        </HomeContainer>
    )
};