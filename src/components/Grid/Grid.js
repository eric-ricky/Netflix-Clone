import React from "react";

import { Wrapper, Content } from "./Grid.styles";

const Grid = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <h1>{props.title}</h1>
        <Content>{props.children}</Content>
      </div>
    </Wrapper>
  );
};

export default Grid;
