import React from "react";

// styles
import { Wrapper, Content, MainText } from "./HeroImage.styles";

const HeroImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <div className="container">
        <Content>
          <MainText>
            <h1>{title}</h1>
            <p>{text}</p>
          </MainText>
        </Content>
      </div>
    </Wrapper>
  );
};

export default HeroImage;
