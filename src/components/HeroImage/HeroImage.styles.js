import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  height: 600px;
  animation: animateHeroimage 1s;
  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  color: #fff;
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const MainText = styled.div`
  max-width: 700px;
  h1 {
    color: #fff;

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMid);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
