import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  min-height: 100vh;
  text-align: center;

  > header {
    flex-direction: column;
    width: 100%;
    min-height: 150px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    > img {
      width: 200px;
      height: 200px;
    }

    a {
      text-decoration: none;
      color: #43639d;
      font-family: Inter;
      font-weight: 700;
      font-size: 24px;
      margin: 0 15px;
      transition: color 0.3s, font-size 0.3s ease;
      &:hover {
        color: #f0c918;
        font-size: 30px;
      }
    }
  }

  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;

    width: 500px;
    height: 500px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export const Pesquisa = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  text-align: center;

  gap: 8px;

  margin-top: 70px;

  > input {
    width: auto;
    height: 30px;
    border: 1px solid #43639d;
    border-radius: 8px;
    padding: 10px;
    color: #43639d;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    &::placeholder {
      color: #43639d;
      font-family: Inter;
      font-size: 20px;  
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }

    &:focus {
      outline: none;
    }
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    background: #43639d;
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    transition: color 0.3s, font-size 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #f0c918;
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;

    button {
      width: 100%;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 200px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 100px;

  > div:nth-child(1) {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 50px;
    margin-right: 300px;
    align-items: flex-start;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 200px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        width: auto;
        height: 50px;
        border-top: 1px solid #43639d;
        color: #43639d;
        font-size: 26px;
        font-family: Inter;
        font-weight: 700;
      }
      p {
        width: auto;
        height: 100px;
        color: #43639d;
        font-size: 16px;
        font-family: Inter;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;

    > div:nth-child(1) {
      margin-right: 0;
    }

    > div:nth-child(2) {
      gap: 20px;
    }
  }
`;

export const DireitosAutorais = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }

  > p {
    color: #43639d;
  }
`;
