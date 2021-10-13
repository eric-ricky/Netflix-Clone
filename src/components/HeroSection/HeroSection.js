import React from "react";
import { Search, Title, Wrapper } from "./HeroSection.styles";

import Image from "../../images/netflixImage.jpg";
import SearchBar from "../SearchBar/SearchBar";

const HeroSection = () => {
  return (
    <Wrapper image={Image}>
      <div className="container">
        <Title>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Search anywhere. Watch everywhere.</h3>
          <p>
            Ready to watch? Search for popular and highly rated movies today.
          </p>
        </Title>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
