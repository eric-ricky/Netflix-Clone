import React from "react";
import { Link } from "react-router-dom";

import { Content, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <div className="logo">
          <Link to="/">Netflix</Link>
        </div>

        <div className="btn">
          <a href="https://thebreld.co.ke" target="_blank">
            Sign in
          </a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
