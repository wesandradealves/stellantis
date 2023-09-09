import styled from 'styled-components';
import { Colors } from '../../styles';
import {
  Background,
  BackgroundMobile,
} from '../../assets/images/05-awards/desktop';

export const Section = styled.section`
  width: 100%;

  height: 533px;
  @media (min-width: 1439px) {
    height: 580px;
  }

  @media (min-width: 1919px) {
    height: 657px;
  }

  background-image: url(${Background});

  @media (max-width: 700px) {
    background-image: url(${BackgroundMobile});
  }
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 15px;
  }

  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

export const StampRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  flex-wrap: wrap;

  @media (min-width: 1439px) {
    padding-bottom: 40px;
  }

  @media (max-width: 700px) {
    justify-content: flex-start;
    padding: 45px 30px;
  }

  img {
    max-width: 12%;
    @media (max-width: 700px) {
      max-width: 30%;
      margin-bottom: 20px;
    }

    @media (max-width: 1200px) {
      //max-height: 90px;
      //padding-left: 10px;
      //padding-right: 10px;
    }
    max-height: 124px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const MiddleContent = styled.div`
  padding-top: 23px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  //mobile
  @media (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
    padding-left: 42.3px;
    padding-right: 42.3px;
    padding-top: 35px;
  }
`;

export const PrincipalText = styled.h1`
  max-width: 319px;
  font-size: 2rem;
  font-family: 'DIN Next LT Pro';
  color: ${Colors.primary};
  @media (max-width: 700px) {
    width: 400px;
    justify-content: center;
    margin-left: 20px;
  }
  @media (min-width: 1358px) {
    margin-top: -5px;
  }

  @media (min-width: 1919px) {
    padding-top: 45px;
  }

  @media (min-width: 1000px) {
    /* font-size: 20px; */
    max-width: unset;
    width: 100%;
    text-align: center;
  }
`;

export const Description = styled.div`
  max-width: 47%;
  font-size: 16px;
  font-family: 'DIN Next LT Pro';
  color: #e4e4e4;
  word-spacing: 1px;

  @media (max-width: 700px) {
    padding-top: 5.8px;
    max-width: 290px;
  }

  @media (min-width: 1000px) {
    /* font-size: 20px; */

    max-width: unset;
    width: 100%;
    text-align: center;
  }
`;

export const DescriptionBox = styled.div`
  margin: 0.3% auto 0;
  max-width: 80%;
  font-size: 1.25rem;
  font-family: 'DIN Next LT Pro';

  @media (max-width: 700px) {
    max-width: 100%;
    margin-left: 0;
    font-size: 1rem;
  }

  span {
    font-weight: bold;
  }
`;
