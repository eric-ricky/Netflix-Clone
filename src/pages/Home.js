import React from "react";
import Grid from "../components/Grid/Grid";
import HeroImage from "../components/HeroImage/HeroImage";
import HeroSection from "../components/HeroSection/HeroSection";
import { useHomeFetch } from "../hooks/use-home-fetch";

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

import NoImage from "../images/no_image.jpg";
import ImageThumb from "../components/ImageThumb/ImageThumb";
import SearchBar from "../components/SearchBar/SearchBar";
import { Spinner } from "../components/Spinner/Spinner.styles";
import Button from "../components/UI/Button";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) return <div>Something Went wrong</div>;

  console.log(state);
  return (
    <>
      {!searchTerm && state.results[0] && <HeroSection />}

      <SearchBar setSearchTerm={setSearchTerm} />

      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      {!searchTerm && state.results[2] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`}
          title={state.results[2].original_title}
          text={state.results[2].overview}
        />
      )}

      {state.results[0] && (
        <Grid title={searchTerm ? "Search Results: " : "Popular Movies"}>
          {state.results.map((movie) => {
            return (
              <ImageThumb
                key={movie.id}
                clickable
                movieId={movie.id}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
              />
            );
          })}
        </Grid>
      )}

      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </>
  );
};

export default Home;
