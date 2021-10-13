import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 70vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${({ image }) => image}) no-repeat center center;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.div`
  color: var(--whiteColor);
  margin-top: 5rem;

  h1 {
    font-size: 4.125rem;
    width: 60%;
    margin: 0 auto;
  }

  h3 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.825rem;
    font-weight: 500;
  }

  p {
    font-size: 1.125rem;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    margin-top: 7rem;

    h1 {
      font-size: 3.125rem;
      width: 100%;
    }
    h3 {
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      font-size: 1.45rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.0125rem;
    }
  }
`;
