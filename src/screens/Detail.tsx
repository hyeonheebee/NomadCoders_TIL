import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getMovie, IMovieDetail, makeBgPath } from "../api";
import { Link, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";

interface ImoviePre {
  movieId: number;
  movieBgUrl: string;
  movieOverView: string;
}
const Img = styled.img`
  width: 100px;
  height: 150px;
`;
const DetailSection = styled.div`
  width: 100%;
  height: 800px;
  background-color: white;
`;
const DetailDescript = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
const GenresUl = styled.ul`
  display: flex;

  li {
    list-style: none;
    margin-left: 10px;
  }
`;

function Detail() {
  const { movieId, movieBgUrl, movieOverView } = useOutletContext<ImoviePre>();
  const { id } = useParams();
  const [isActive, setActive] = useState(false);
  const { isLoading, data: detailData } = useQuery<IMovieDetail>(
    ["detail", movieId],
    () => getMovie(id || String(movieId))
  );
  const toggleFn = () => {
    setActive((prev) => !prev);
  };

  return (
    <>
      {isLoading ? (
        <h1>please..Loading</h1>
      ) : (
        <DetailSection>
          <h1>{detailData?.title}</h1>
          <Img src={makeBgPath(movieBgUrl)} />
          <p>{movieOverView}</p>
          <DetailDescript>
            <span>budget : {detailData?.budget}</span>
            <span>runtime : {detailData?.runtime}</span>
            <span>revenue: {detailData?.revenue}</span>
          </DetailDescript>
          <DetailDescript>
            <a href={detailData?.homepage} target={"_blank"}>
              homepage{" "}
            </a>
            <GenresUl>
              Genres :
              {detailData?.genres
                ? detailData?.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))
                : null}
            </GenresUl>
          </DetailDescript>
          <DetailDescript>
            <Link onClick={toggleFn} to={isActive ? "" : "collection"}>
              {isActive ? "🔽 Collection" : " ▶ Collection"}
            </Link>
            <Outlet
              context={{ collection: detailData?.belongs_to_collection }}
            />
          </DetailDescript>
        </DetailSection>
      )}
    </>
  );
}
export default Detail;
