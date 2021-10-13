import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./ImageThumb.styles";

const ImageThumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="Movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="Movie-thumb" />
      )}
    </div>
  );
};

export default ImageThumb;
