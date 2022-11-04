import React from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <Container>
      <ThreeDots color={"#302e53"} height={"100%"} width={"100%"} />
    </Container>
  )
};

const Container = styled.section`

  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;