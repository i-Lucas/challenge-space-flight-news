import useAsync from "../async";
import articlesApi from "../../services/articlesApi";

export default function getArticles(skip, take) {

  const data = useAsync(() => articlesApi.getArticles(skip, take), true);
  return data;
};