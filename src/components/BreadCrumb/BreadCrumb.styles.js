import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.8) 60%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    ${({ image }) =>
      image ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${image}')` : ""};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: auto;
  color: var(--white);
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: 1.2rem;
    color: #fff;
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
