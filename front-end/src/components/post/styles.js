import styled from "styled-components";

export const PostContainer = styled.section`

  width: 70%;
  height: 25%;
  transition: 1s;
  margin: 5% auto 2% auto;

  display: flex;
  cursor: pointer;
  justify-content: space-between;
  flex-direction: ${props => props.flip};

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    color: #302e53;
  }

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 20%;
    font-size: 12px;
  }
`;

export const ImageContainer = styled.div`

  width: 29%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.background});

  -webkit-box-shadow: 3px 4px 5px -1px rgba(0,0,0,0.4);
  -moz-box-shadow: 3px 4px 5px -1px rgba(0,0,0,0.4);
  box-shadow: 3px 4px 5px -1px rgba(0,0,0,0.4);

  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;

export const ContentContainer = styled.div`

  width: 70%;
  height: 100%;

  -webkit-box-shadow: 3px 4px 5px -1px rgba(0,0,0,0.4);
  -moz-box-shadow: 3px 4px 5px -1px rgba(0,0,0,0.4);
  box-shadow: 3px 4px 5px -1px rgba(0,0,0,0.4);

  @media screen and (max-width: 768px) {
    width: 54%;
  }
`;

export const Title = styled.div`
  
  width: 80%;
  height: 25%;
  margin: auto;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {

    height: 20%;

    h1 {
      font-size: 14px;
    }
  }
`;

export const Date = styled.div`

  width: 80%;
  height: 10%;
  margin: auto;

  h1 {
    margin-bottom: 5px;
    font-size: 12px;
  }
`;

export const Text = styled.div`

  width: 90%;
  margin: auto;
  height: 65%;
  line-height: 20px;
`;