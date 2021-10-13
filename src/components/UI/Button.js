import React from "react";

// styles
import { Wrapper } from "./Button.styles";

const Button = ({ callback, children }) => {
  return (
    <Wrapper>
      <button onClick={callback} className="btn">
        {children}
      </button>
    </Wrapper>
  );
};

export default Button;
