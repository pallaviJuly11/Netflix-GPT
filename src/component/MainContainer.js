/** @format */

import React from "react";
import VedioBackgroundTrailer from "./VedioBackgroundTrailer";
import VedioTitle from "./VedioTitle";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VedioTitle title={title} overview={overview} />
      <VedioBackgroundTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
