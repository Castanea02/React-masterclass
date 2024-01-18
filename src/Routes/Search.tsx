import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { getSearchMovie } from "./../api";

const Banner = styled.div<{ bgImg: string }>`
  background-image: ${(props) => props.bgImg};
`;

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { data, isLoading } = useQuery("searchMovie", () =>
    getSearchMovie(keyword + "")
  );
  console.log(data);
  return <Banner bgImg={data?.results[0]?.backdrop_path}></Banner>;
}

export default Search;
