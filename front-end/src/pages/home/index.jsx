import React from "react";
import styled from "styled-components";

import Header from "../../components/header";
import getHello from "../../hooks/api/hello";

export default function Home() {

    const { loading, data, error } = getHello();
    if (!loading) console.log(data)

    return (
        <HomeContainer>
            <Header />
        </HomeContainer>
    )
};

const HomeContainer = styled.div`

    width: 100%;
    height: 200vh;
`;