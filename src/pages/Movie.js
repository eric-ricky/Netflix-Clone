import React from "react";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// components
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import Grid from "../components/Grid/Grid";
import Spinner from "../components/Spinner/Spinner";

// hook
import { useMovieFetch } from "../hooks/useMovieFetch";

// image
import NoImage from "../images/no_image.jpg";
import { useParams } from "react-router";

import MovieInfo from "../components/MovieInfo/MovieInfo";

import Actor from "../components/Actor/Actor";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb
        movieTitle={movie.original_title}
        backdrop={movie.backdrop_path}
      />
      <MovieInfo movie={movie} />

      <Grid title="Actors: ">
        {movie.actors?.map((actor) => {
          return (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageURL={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Movie;
