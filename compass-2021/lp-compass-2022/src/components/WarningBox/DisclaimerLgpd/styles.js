import styled from 'styled-components';
import { Colors } from '../../../styles';

export const ContainerBox = styled.div`
  padding-left: 18px;
  padding-right: 18px;

  @media screen and (max-width: 900px) {
    padding-left: 0px;
    padding-right: 0px;
    // caso só haja um disclaimer bottom: 250px;
    /* bottom: 250px; */
    height: max-content;
  }
  /* width: 100vw; */
  z-index: 20000;
  position: fixed;
  //caso só haja um disclaimer bottom: 100px;
  bottom: 10px;
  display: flex;
  & .container {
    @media screen and (max-width: 900px) {
      max-height: 390px;
      flex-direction: column;
      padding-right: 18px;
    }
    max-height: 143px;
    padding-left: 18px;
    background-color: ${Colors.white};
    display: flex;
    align-content: center;
    border-radius: 4px;
    border-top: 0.3px solid #18131f;
    box-shadow: 0px -2px 40px #18131f;
  }

  & .title {
    font-size: 16px;
    font-family: 'Din Regular Next LT Pro', sans-serif;
    padding-bottom: 5px;
    margin: 0;
    color: ${Colors.primary};
    font-weight: 800;
  }

  // Texto de conteudo e Botão
  & .contentRow {
    display: flex;
    flex-direction: row;
  }

  //Texto de conteudo
  & .text {
    font-family: 'Din Regular Next LT Pro', sans-serif;
    font-weight: 400;
    text-align: justify;
    color: ${Colors.black};
    font-size: 16px;
    width: 100%;
    margin-bottom: 50px;
    font-size: 16px;
    line-height: 20px;
    /* margin-right: 1%; */
  }

  // Botão FECHAR
  & .button {
    background-color: ${Colors.primary};
    color: ${Colors.white};
    border: 0;
    height: 50px;
    font-size: 16px;
    border-radius: 4px;
    font-family: 'Din Bold', sans-serif;
  }
  // Texto Especial
  a {
    display: inline;
    text-decoration: none;
    font-family: 'Din Regular', sans-serif;
    text-decoration: underline;
    color: #18131f;
  }

  @media (min-width: 900px) {
    & .text {
      padding-right: 30px;
    }
    & .container {
      /* width: 100vw; */
      padding-bottom: 0%;
      flex-direction: column;

      padding-top: 15px;
      padding-left: 23px;
    }
    & .button {
      width: 235px;
      height: 48px;
      margin-right: 13px;
    }
  }

  @media (max-width: 900px) {
    & .container {
      max-width: 100%;
      // flex-direction: row;
    }

    & .title {
      margin-top: 22px;
    }

    & .contentRow {
      display: flex;
      flex-direction: column;
    }
    & .text {
      margin-bottom: 14px;
    }
    & .button {
      margin-bottom: 41px;
    }
  }
`;
