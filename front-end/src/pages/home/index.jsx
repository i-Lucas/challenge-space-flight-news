import React from "react";
import styled from "styled-components";

import getHello from "../../hooks/api/hello";

export default function Home() {

    const { loading, data, error } = getHello();
    if (!loading) console.log(data)

    return (
        <HomeContainer>
            <h1>Hello World</h1>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
    background-color: lightblue;
`;