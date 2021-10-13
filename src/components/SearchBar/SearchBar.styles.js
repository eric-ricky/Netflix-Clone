import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 20vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0,
      rgba(0, 0, 0, 0.9) 60%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  padding-top: 2rem;

  &.stateful {
    padding-top: 4rem;
  }
`;
export const Content = styled.div`
  color: inherit;
  & .form {
    background-color: #fff;

    display: flex;
    align-items: center;
    padding-left: 3rem;
    width: 60%;
    margin: 2rem auto;
    margin-top: 1rem;

    padding: 1.2rem auto;
  }

  & .form input {
    border: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: 1.2rem;
    width: 70%;
    height: auto;
  }
  & .form input:focus {
    outline: none;
  }

  & .form .form_btn {
    background-color: var(--redColor);
    color: var(--whiteColor);
    padding: 1.2rem 2rem;
    font-size: 1.12rem;
    text-transform: uppercase;
    height: 100%;
    border: none;
    width: 30%;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  .form_btn:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    & .form {
      flex-flow: column;
      background: none;
      /* width: 0%; */
      padding-left: 0;
    }
    & .form input {
      background: var(--whiteColor);
      padding-left: 3rem;
      width: 100%;
      margin: 2rem auto;
      padding: 1.2rem 1rem;
    }
    & .form .form_btn {
      padding: 1.2rem 0.5rem;
      font-size: 0.72525rem;
      width: 40%;
    }
  }
`;
