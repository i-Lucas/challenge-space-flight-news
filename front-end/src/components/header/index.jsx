import React from "react";
import ship from "../../assets/images/ship.svg";

import {

  HeaderContainer,
  SearchContainer,
  SearchBar,
  Input,
  Icon,
  Select,
  Image,
  Title

} from "./styles";

export default function Header() {

  function orderBy(e) {
    console.log(e.target.value)
  };

  return (
    <HeaderContainer>
      <SearchContainer>

        <SearchBar>
          <Input type="search" placeholder="pesquisar artigo" />
          <Icon>
            <ion-icon name="search-circle-outline"></ion-icon>
          </Icon>
        </SearchBar>

        <Select onChange={e => orderBy(e)} >
          <option value="default">Ordenar por</option>
          <option value="old">Mais antigas</option>
          <option value="new">Mais novas</option>
        </Select>

      </SearchContainer>

      <Image background={ship} />
      <Title>
        <h1>Space Flight News</h1>
      </Title>
    </HeaderContainer>
  )
};