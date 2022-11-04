import styled from "styled-components";

export const HeaderContainer = styled.section`

  width: 100%;
  height: 30%;
  transition: 2s;
  border-bottom: 3px solid #4b5c6b;
  
  @media screen and (max-width: 768px) {
    height: 20%;
  }
`;

export const SearchContainer = styled.section`

  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SearchBar = styled.section`

  width: 20%;
  height: 50%;
  transition: 2s;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 968px) {
      width: 30%;
  };

  @media screen and (max-width: 768px) {
      width: 50%;
  };
`;

export const Input = styled.input`

  width: 100%;
  height: 100%;
`;

export const Icon = styled.div`

  width: 10%;
  height: 90%;
  cursor: pointer;
  margin-left: -38px;
  background-color: #4b5c6b;

  display: flex;
  align-items: center;
  justify-content: center;

  ion-icon {
    font-size: 40px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 768px) {
    margin-left: -25px;
    height: 80%;
  }
`;

export const Select = styled.select`

  width: 20%;
  height: 50%;

  @media screen and (max-width: 768px) {
    width: 35%;
  }
`;

export const Image = styled.div`

  width: 15%;
  height: 45%;
  margin: 2% auto;
  border-radius: 100%;

  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75% 75%;
  transform: rotate(90deg);

  @media screen and (max-width: 968px) {
    width: 40%;
    height: 40%;
  };

  @media screen and (max-width: 768px) {
    width: 45%;
    height: 45%;
  };
`;

export const Title = styled.section`

  width: 100%;
  height: 10%;
  text-align: center;

  h1 {
    font-size: 25px;
  }
`;