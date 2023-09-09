import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../../styles/colors';

export const Container = styled.div`
  background-color: ${Colors.black};
  /* border-radius: 20px; */
  padding-top: 45px;
  position: relative;
`;

export const Title = styled.h1`
  width: 90vw;
  height: 8vh;
  margin: 0 auto 10px auto;
  text-align: center;
  font-family: 'DIN Next LT Pro', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0px;
  color: ${Colors.white};
  text-transform: uppercase;

  /* Iphone 5 */
  @media (min-width: 320px) and (min-height: 568px) {
    width: 100vw;
  }
  /* Moto g4/s5 */
  @media (min-width: 360px) and (min-height: 640px) {
    width: 90vw;
  }
  /* Iphone 6/7/8 */
  @media (min-width: 375px) and (min-height: 667px) {
    width: 90vw;
  }
  /* Iphone x */
  @media (min-width: 375px) and (min-height: 812px) {
    width: 90vw;
  }

  /* Pixel 2 */
  @media (min-width: 411px) and (min-height: 731px) {
    width: 90vw;
  }
  /* Pixel 2 XL */
  @media (min-width: 411px) and (min-height: 823px) {
    width: 90vw;
  }
`;

export const Swiper = styled(SwiperReact)`
  .swiper-button-next,
  .swiper-button-prev {
    background-size: 25px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${Colors.terciary};
    border-radius: 50%;
    height: 2.25rem;
    width: 2.25rem;
    color: ${Colors.light};

    ::after {
      font-size: 1.1rem;
      line-height: 1.2;
    }

    /* Iphone 5 */
    @media (min-width: 320px) and (min-height: 568px) {
      margin-top: -10vh;
    }
    /* Moto g4/s5 */
    @media (min-width: 360px) and (min-height: 640px) {
      margin-top: -7vh;
      margin-right: -1vw;
      margin-left: -1vw;
    }
    /* Iphone 6/7/8 */
    @media (min-width: 375px) and (min-height: 667px) {
      margin-top: -7vh;
      margin-right: 0.5vw;
      margin-left: 0.5vw;
    }

    /* Iphone x */
    @media (min-width: 375px) and (min-height: 812px) {
      margin-top: -2vh;
      margin-right: 0.5vw;
      margin-left: 0.5vw;
    }
    /* Iphone 6/7/8 Plus*/
    @media (min-width: 414px) and (min-height: 736px) {
      margin-right: 0.5vw;
      margin-left: 0.5vw;
    }
    /* Pixel 2 */
    @media (min-width: 411px) and (min-height: 731px) {
      margin-top: -2vh;
      margin-right: 5vw;
      margin-left: 5vw;
    }
    /* Pixel 2 XL */
    @media (min-width: 411px) and (min-height: 823px) {
      margin-top: -2vh;
      margin-right: 4vw;
      margin-left: 4vw;
    }
  }

  .swiper-pagination {
    &-bullet {
      background-color: ${Colors.white};
      border-radius: 50%;
      opacity: 0.5;
      width: 7px;
      height: 7px;

      &-active {
        background-color: ${Colors.terciary};
        opacity: 1;
      }
    }
  }

  /* Iphone 5/SE Ajustes do Background */
  @media (min-width: 320px) and (min-height: 568px) {
    margin-top: 6vh;
    height: 80vh;
  }
  /* Moto G4/S5 Ajustes do Background */
  @media (min-width: 360px) and (min-height: 640px) {
    margin-top: -1vh;
    height: 75vh;
  }
  /* Iphone 6/7/8 Ajustes do Background */
  @media (min-width: 375px) and (min-height: 667px) {
    margin-top: -1vh;
    height: 75vh;
  }
  /* Iphone 6/7/8 PlusAjustes do Background */
  @media (min-width: 414px) and (min-height: 736px) {
    margin-top: -5vh;
    height: 70vh;
  }
  /* Iphone 6/7/8 Plus Ajustes do Background */
  @media (min-width: 414px) and (min-height: 736px) {
    background-position-y: -40px;
    background-size: 100vw 73.5vh;
    background-position-x: 0px;
  }
  /* Iphone X Ajustes do Background */
  @media (min-width: 375px) and (min-height: 812px) {
    margin-top: -8vh;
    height: 67vh;
  }
  /* Iphone Pixel 2 Ajustes do Background */
  @media (min-width: 411px) and (min-height: 731px) {
    margin-top: -4vh;
    height: 70vh;
  }
  /* Iphone Pixel 2XL Ajustes do Background */
  @media (min-height: 820px) {
    margin-top: -9vh;
    height: 66vh;
  }
`;

export const BoxSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  margin-bottom: 5vh;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90vw;

    img {
      mask-image: linear-gradient(
        to top,
        transparent -60%,
        #fff 70%
      );
      max-width: 100%;
      display: inline-block;
      border-radius: 10px;
      height: 420px;
      width: 320px;
    }

    div {
      color: ${Colors.white};
      padding: 20px;
      height: 400px;
      width: 320px;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      h1 {
        color: ${Colors.white};
        font-family: 'DIN bold', sans-serif;
        font-size: 26px;
        letter-spacing: 0.3px;
        line-height: 25px;
        width: 220px;
        text-transform: uppercase;
      }

      p {
        color: ${Colors.white};
        font-size: 13px;
        font-family: 'Din Regular', sans-serif;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 17px;
        text-align: left;
      }
    }
  }
`;
