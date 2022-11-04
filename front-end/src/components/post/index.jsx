import React from "react";

import {
  PostContainer,
  ImageContainer,
  ContentContainer,
  Title,
  Date,
  Text
} from "./styles";

export default function Post({ props, order }) {

  const { id, imageUrl, newsSite, publishedAt, summary, title, updatedAt, url } = props;
  const flip = order % 2 === 0 ? "row-reverse;" : "row;"

  const date = formatDate(publishedAt);
  const update = formatDate(updatedAt);

  return (
    <PostContainer flip={flip} onClick={() => alert(id)}>
      <ImageContainer background={imageUrl} />
      <ContentContainer>
        <Title className="center">
          <h1>{title}</h1>
        </Title>
        <Date className="left">
          <h1>Publicação: {date}</h1>
          <h1>Atualização: {update}</h1>
        </Date>
        <Text className="center">
          <h1>{summary}</h1>
        </Text>
      </ContentContainer>
    </PostContainer>
  )
};

function formatDate(date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  return `${day} / ${month} / ${year}`;
};