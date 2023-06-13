import { useQuery } from "@tanstack/react-query";
import { useState } from "hoist-non-react-statics/node_modules/@types/react";
import { useParams } from "react-router";
import { getMovie, IMovieDetail } from "../api";

function Detail() {
  const { id } = useParams();
  const [detail, setDetailData] = useState<IMovieDetail>();
  const [isLoading, setLoading] = useState(false);
  if (id) {
    const { isLoading: loading, data: detailData } = useQuery<IMovieDetail>(
      ["detail"],
      () => getMovie(id)
    );
    setDetailData((v) => (v = detailData));
    setLoading((l) => (l = loading));
    console.log("params", id);
  }
  return <>{isLoading ? <h1>{detail?.title}</h1> : <h1>loading</h1>}</>;
}
export default Detail;
