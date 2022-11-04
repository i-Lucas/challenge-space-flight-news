import React from "react";
import styled from "styled-components";

export default function ViewMore() {
  return (
    <Container>
      <Button>Carregar Mais</Button>
    </Container>
  )
};

const Container = styled.section`

  width: 100%;
  height: 15%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`

  width: 10%;
  height: 15%;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 50px;
  border: 1px solid gray;
  background-color: lightgray;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;