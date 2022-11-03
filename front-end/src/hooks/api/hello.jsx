import useAsync from "../async";
import articlesApi from "../../services/articlesApi";

export default function getHello() {

    const data = useAsync(articlesApi.helloWorld, true);
    return data;
};