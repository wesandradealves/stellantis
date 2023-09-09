import styled, { css } from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../../styles/colors';
import * as images from '../../../assets';

export const Swiper = styled(SwiperReact)`
  background-color: ${Colors.white};
  padding-bottom: 50px;
  /* min-height: 1264px !important; */

  .swiper-slide {
    width: 100% !important;
  }

  .swiper-pagination {
    align-items: center;
    top: 33em;
    display: flex;
    justify-content: center;
    height: 44px;

    @media (min-width: 1679px) {
      top: 36em;
    }
    @media (min-width: 1919px) {
      top: 42em;
    }

    span {
      margin: 0 7px !important;
    }
    &-bullet {
      background-color: ${Colors.black};
      border-radius: 50%;
      height: 5px;
      opacity: 0.5;
      width: 5px;

      &-active {
        background-color: ${Colors.black};
        height: 7px;
        opacity: 1;
        width: 7px;
      }
    }
  }

  .swiper-button-next {
    right: 1.2rem;
  }

  .swiper-button-prev {
    left: 1.2rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.secondary};
    border-radius: 50%;
    color: ${Colors.light};
    height: 44px;
    top: 280px;
    width: 44px;

    @media (min-width: 1919px) {
      top: 375px;
    }

    &::after {
      font-size: 18px;
    }
    z-index: 9000;

    ${({ afterblock }) =>
      afterblock === 'true'
        ? css`
            top: calc(100% - 436px);
          `
        : 'false'};

    .swiper-button {
      &-next {
        right: 26px;
      }

      &-prev {
        left: 26px;

        ${props =>
          props.open &&
          css`
            left: 2vw;
          `}
      }
    }
  }
`;

export const Content = styled.div`
  background-image: url(${images.Versoes.Desktop.Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  //max-width: 1580px;
  color: ${Colors.white};
  position: relative;
  margin: 0 auto;
  &::after {
    background-color: ${Colors.white};
    bottom: -40px;
    content: '';
    height: 100px;
    position: absolute;
    width: 100%;
  }

  .versionsTlt {
    font-size: 24px;
    font-weight: 800;
    font-family: 'DIN Next LT Pro', sans-serif;
    letter-spacing: 0.16px;
    line-height: 35px;
    padding-top: 37px;
    padding-bottom: 47px;
    text-align: center;
    @media (min-width: 1679px) {
      padding-top: 40px;
    }
    @media (min-width: 1919px) {
      font-size: 2rem;
    }
  }

  h3 {
    color: ${Colors.primary};
    font-family: 'DIN Regular', sans-serif;
    font-size: 27px;
    line-height: 63px;
    font-weight: 400;
  }

  h1 {
    font-family: 'DIN Regular', sans-serif;
    font-size: 40px;
    line-height: 45px;
    opacity: 1;
  }

  div {
    position: relative;
    z-index: 1;
  }
`;

export const BoxSection = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0px 0 0 6rem;
  width: 100%;
  max-height: 300px;
  @media (min-width: 1919px) {
    max-height: 413px;
  }

  h1 {
    font-family: 'DIN Next LT Pro Bold', sans-serif;
    font-size: 40px;
    line-height: 45px;
    opacity: 1;
  }

  h3 {
    color: ${Colors.white};
    font-family: 'DIN Next LT Pro', sans-serif;
    font-size: 27px;
    line-height: 45px;
    font-weight: 400;
  }

  /* div {
    ///cards         /////////////////////

    position: relative;
    top: 47px;
    z-index: 1;
    left: -7px;

    @media (min-width: 1679px) {
      top: 51px;
    }
    @media (min-width: 1919px) {
      top: 59px;
    }
  } */
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1679px) {
    left: 50px !important;
  }
  @media (min-width: 1919px) {
    left: -10px !important;
  }

  .textTlt {
    font-family: 'DIN Next LT Pro Bold', sans-serif;
    font-size: 40px;
    line-height: 45px;
    font-weight: 600;
    text-transform: uppercase;
    @media (min-width: 1919px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-family: 'DIN Next LT Pro', sans-serif;
    font-size: 27px;
    font-weight: 200;
    margin-bottom: 8px;
  }

  span {
    font-family: 'DIN Next LT Pro', sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-left: 4px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 46px;
  left: 0px;
  @media (min-width: 1679px) {
    left: 50px !important;
  }
  @media (min-width: 1919px) {
    left: -10px !important;
  }
`;
export const InfosWrraper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const Infos = styled.div`
  background-color: ${Colors.greyLight};
  box-shadow: 0px 3px 6px ${Colors.black};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 94px;

  @media (min-width: 1919px) {
    width: 150px;
    height: 170px;
  }

  /* :first-child {
    margin-left: 8px;
  } */
  & + div {
    margin-left: 8px;
  }
  img {
    height: 74px;
    object-fit: cover;
    width: 100%;
    @media (min-width: 1919px) {
      height: 120px;
    }
  }

  span {
    color: ${Colors.white};
    font-family: 'DIN Regular', sans-serif;
    font-size: 10px;
    line-height: 13px;
    opacity: 1;
    padding: 3px;
    text-align: center;
    width: 100%;

    @media (min-width: 1919px) {
      font-size: 1rem;
      margin-top: 7px;
    }
  }
`;

export const Car = styled.img`
  position: relative;
  top: -30px;
  max-width: 681px;
  z-index: 1;
  right: 100px;

  @media (min-width: 1679px) {
    top: 30px;
    right: 220px;
  }
  @media (min-width: 1919px) {
    top: 33px;
    max-width: 890px;
    right: 129px;
  }
`;

export const Model = styled.div`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 215px;
  padding-bottom: 37px;

  @media (min-width: 1679px) {
    padding-top: 252px;
  }
  @media (min-width: 1919px) {
    padding-top: 257px;
  }

  h4 {
    font-family: 'DIN Bold', sans-serif;
    font-size: 22px;
    line-height: 13px;
    font-weight: bold;
    text-align: center;
    padding-left: 64px;
    @media (min-width: 1919px) {
      font-size: 1.8rem;
    }
  }

  img {
    height: 8px;
    margin: 0 auto;
    margin-top: 12px;
    width: 14px;
  }
`;

export const Cta = styled.div`
  align-items: flex-start;
  background-color: ${Colors.white};
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;

  @media (max-width: 1400px) {
    position: absolute;
    bottom: 7rem !important;
  }

  @media (max-width: 1500px) {
    position: absolute;
    bottom: 3rem;
  }

  @media (min-width: 1679px) {
    bottom: 160px;
    margin-top: 0rem;
  }

  @media (min-width: 1919px) {
    margin-top: 5rem;
  }

  a {
    align-items: center;
    display: flex;
    font-family: 'DIN Bold', sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 27px;

    & + a {
      margin-left: 16px;
    }

    @media (min-width: 1919px) {
      height: 60px;
      width: 240px;
    }
  }
`;

export const NewCta = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 0.5rem;
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Jeep = styled.img`
  display: block;
  width: 30px;
  height: auto;
  margin: 0 0 -20px 30px;
  z-index: 7;
  transform: rotate(90deg);
`;

export const GallerySubtitle = styled.h5`
  display: none;
  font-family: 'DIN Next LT Pro', sans-serif;
  font-size: 14px;
  letter-spacing: 0.2px;
  padding: 0 0 28px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  background-color: ${Colors.white};
  @media (min-width: 1679px) {
    padding: 0 0 70px 0;
  }
`;
