import React from "react";
import styled from "styled-components";

import getArticles from "../../hooks/api/articles";
import ViewMore from "../viewmore";
import Loader from "../loader";
import Post from "../post";

export default function Articles() {

  const { loading, data, error } = getArticles(0, 50);
  const [articles, set] = React.useState([]);

  React.useEffect(() => {
    if (!loading) set(data);
  }, [loading]);

  const RenderArticles = () => articles.map((data, idx) => <Post key={idx} props={data} order={idx} />);

  function ShowContent() {
    return (
      <React.Fragment>
        <RenderArticles />
        <ViewMore />
      </React.Fragment>
    )
  };

  return (
    <ArticlesContainer>
      {loading && <Loader />}
      {!loading && <ShowContent />}
    </ArticlesContainer>
  )
};

const ArticlesContainer = styled.section`

  width: 100%;
  height: 100%;
`;