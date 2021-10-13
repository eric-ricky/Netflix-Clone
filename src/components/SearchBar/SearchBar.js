import React, { useEffect, useRef, useState } from "react";
import { Content, Wrapper } from "./SearchBar.styles";
import Image from "../../images/netflixImage.jpg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper image={Image} className={state ? "stateful" : ""}>
      <div className="container">
        <Content>
          <div className="form">
            <input
              onChange={(ev) => setState(ev.target.value)}
              value={state}
              type="text"
              placeholder="Search for trending movies..."
            />
            <button class="form_btn">Search Movies</button>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
};

export default SearchBar;
