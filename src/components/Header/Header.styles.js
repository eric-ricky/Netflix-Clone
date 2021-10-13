import styled from "styled-components";

export const Wrapper = styled.header`
  background: rgba(0, 0, 0, 0.2);
  padding: 1.2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .logo {
    font-size: 2rem;
    color: var(--redColor);
    font-weight: 900;
  }
`;
