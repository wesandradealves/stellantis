import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { Colors } from '../../styles';

export const Swiper = styled(SwiperReact)`
  /* margin-bottom: 86px; */
  .swiper-slide {
    padding: 0 2.9rem;
    /* width: 100% !important; */
  }
  .swiper-button-prev {
    left: auto;
    right: 25%;

    @media (min-width: 1300px) {
      right: 30.5%;
    }
    @media (min-width: 1439px) {
      right: 37.5%;
    }
    @media (min-width: 1679px) {
      right: 33.5%;
    }
  }
  .swiper-button-next {
    left: auto;
    right: 18%;

    @media (min-width: 1300px) {
      right: 25%;
    }
    @media (min-width: 1439px) {
      right: 32%;
    }

    @media (min-width: 1679px) {
      right: 29.5%;
    }

    @media (min-width: 1919px) {
      right: 29.5%;
    }
  }
  .swiper-button {
    &-next,
    &-prev {
      background-color: ${Colors.secondary};
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      color: ${Colors.light};
      content: '';
      position: absolute;
      top: 92%;
      width: 44px;

      @media (min-width: 1330px) {
        top: 92%;
      }

      @media (min-width: 1360px) {
        top: 92%;
      }
      @media (min-width: 1679px) {
        top: 74%;
      }

      @media (min-width: 1919px) {
        top: 88%;
      }

      &::after {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: transparent;
  color: ${Colors.white};
  width: 100%;
`;
export const ButtonCta = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.primary};
  border-radius: 4px;
  height: 40px;
  width: 220px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  min-height: 250px;

  @media (min-width: 1330px) {
    min-height: 400px;
  }

  @media (min-width: 1679px) {
    padding-bottom: 2%;
    min-height: 517px;
  }

  & > div {
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    h2 {
      color: ${Colors.terciary};
      font-family: 'DIN Next LT Pro', sans-serif;
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 25px;

      @media (min-width: 1300px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1600px) {
      }
    }

    h3 {
      font-size: 1rem;
      font-family: 'DIN Next LT Pro Bold', sans-serif;
      line-height: 35px;
      padding-bottom: 5px;
      padding-top: 10px;
      @media (min-width: 1300px) {
        font-size: 2rem;
      }
    }

    p {
      font-family: 'DIN Next LT Pro', sans-serif;
      line-height: 18px;
      font-size: 1.25rem;
      height: auto;
      letter-spacing: 0.14px;
      line-height: 1;
      margin-bottom: 10px;
    }
    .tlt {
      text-transform: uppercase;
      font-size: 32px;
    }
  }
  .infoBox {
    width: 35%;
    margin-bottom: 2%;
    margin-right: -34px;
    .infoBoxText {
      font-family: 'DIN Next LT Pro', sans-serif !important;
      font-weight: 400 !important;
    }
    .legend-text-box {
      font-size: 13px;
    }
    @media (min-width: 1600px) {
      width: 35%;
    }
    @media (min-width: 1439px) {
      margin-right: 50px;
    }
  }
  picture {
    width: 64%;
    max-height: 400px;
    overflow: hidden;

    @media (min-width: 1600px) {
      width: 60%;
      max-height: 600px;
    }
    @media (min-width: 1439px) {
      width: 56%;
    }
    @media (min-width: 1679px) {
      margin-left: 63px;
      width: 60%;
      margin-right: 24px;
    }
  }
  img {
    width: 100%;

    @media (min-width: 1300px) {
    }
    @media (min-width: 1600px) {
      width: 100%;
    }
    source {
      width: 80%;
    }
  }
`;
