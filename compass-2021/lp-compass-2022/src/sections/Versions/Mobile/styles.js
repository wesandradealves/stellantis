import styled, { css } from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import Colors from '../../../styles/colors';

export const Swiper = styled(SwiperReact)`
  background: #f0f0f0;
  /* margin-top: -20px; */

  .next-arrow,
  .prev-arrow {
    display: none;
  }
  .swiper-navigation {
    display: none !important;
    bottom: 30px;
    &-bullet {
      background-color: ${Colors.greyDark};
      border-radius: 50%;
      height: 8px;
      opacity: 1;
      position: relative;
      width: 8px;
      margin: 0 7px !important;

      &-active {
        background-color: ${Colors.terciary};
        height: 7px;
        opacity: 1;
        width: 7px;
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.terciary};
    border-radius: 50%;
    color: ${Colors.white};
    height: 36px;
    position: absolute;
    top: calc(100% - 40px) !important;
    width: 36px;
    margin-right: 5px;
    margin-left: 5px;
    background-size: 35px;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
      font-size: 1.1rem;
      line-height: 1.2;
      color: ${Colors.white};
    }

    ${({ afterblock }) =>
      afterblock === 'true'
        ? css`
            top: calc(100vh - 60rem);
          `
        : css`
            /* top: calc(100vh - 480px); */
          `};

    .swiper-slide {
      background-color: #f0f0f0;
      /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 1) 45% rgba(240, 240, 240, 1) 80%,
        rgba(240, 240, 240, 1) 100%
      ); */
    }
  }
  .custom_next {
    background-color: red;
    font-size: 20px;
  }

  .swiper-wrapper {
    padding: 20px 0;
  }
`;

export const PrevArrow = styled.div`
  background-color: ${Colors.terciary};
  border-radius: 50%;
  color: ${Colors.white};
  height: 36px;
  position: absolute;
  top: calc(100% - 60rem) !important;
  width: 36px;
  left: 3px;
  z-index: 25;
  margin-right: 5px;
  margin-left: 5px;
  background-size: 35px;
  background-position: center;
  background-repeat: no-repeat;
  padding-left: 11px;
  padding-top: 7px;

  &:after {
    font-size: 1.1rem !important;
    line-height: 1.2 !important;
    color: #ffffff;
    content: 'prev';
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
`;

export const NextArrow = styled.div`
  background-color: ${Colors.terciary};
  border-radius: 50%;
  color: ${Colors.white};
  height: 36px;
  position: absolute;
  top: calc(100% - 60rem) !important;
  right: 3px;
  width: 36px;
  z-index: 25;
  margin-right: 5px;
  margin-left: 5px;
  background-size: 35px;
  background-position: center;
  background-repeat: no-repeat;
  padding-left: 15px;
  padding-top: 7px;

  &:after {
    font-size: 1.1rem !important;
    line-height: 1.2 !important;
    color: #ffffff;
    content: 'next';
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
`;

// Arrows debaixo
export const SwiperThumbs = styled(SwiperReact)`
  background: #f0f0f0;
  margin-top: -20px;
  .swiper-navigation {
    align-items: center;
    display: flex;
    justify-content: center;
    display: none;

    &-bullet {
      background-color: ${Colors.greyDark};
      border-radius: 50%;
      bottom: 805px;
      height: 4px;
      opacity: 1;
      position: relative;
      width: 4px;

      &-active {
        background-color: ${Colors.terciary};
        height: 7px;
        opacity: 1;
        width: 7px;
      }
    }
  }

  .swiperSlideThumb {
    margin-right: 10px;
    max-width: 150px;
    max-height: 120px;
    width: 150px !important;
  }

  .swiperSlideButton {
    .active {
      border: 5px solid ${Colors.secondary} !important;
      transition: 0.1s;
    }
  }
`;

export const Content = styled.div`
  background-image: url(${props => props.bg && props.bg});
  background-repeat: no-repeat;
  background-position: 25% 25%;
  background-size: 100% 100%;
  border-radius: 16px 16px 0 0;
  color: ${Colors.white};
  margin-top: -1px;
  position: relative;
  height: 290px;

  &::before {
    background-color: #000000;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    background-color: #f0f0f0;
    border-radius: 16px 16px 0 0;
    bottom: -306px;
    display: block;
    height: 320px;
    position: absolute;
    width: 100%;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;

    span {
      font-size: inherit;
      font-weight: 600;
      letter-spacing: inherit;
      color: white;
    }
  }
`;

export const BoxSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 40px;
  /* margin-top: 20px; */

  span {
    font-size: 16px;
    font-family: 'DIN Next LT Pro', sans-serif;
  }

  img {
    padding: 18px 0 8px;
    width: 54px;
  }

  h1 {
    font-family: 'DIN Next LT Pro Bold', sans-serif;
    font-weight: 800;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.white};
  }

  .boxTlt {
    margin-top: 40px;
    font-family: 'DIN Next LT Pro', sans-serif;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.3px;
    line-height: 30px;
    text-transform: uppercase;
    color: ${Colors.white};
  }

  // h2 {
  //   font-size: 30px;
  //   letter-spacing: 0.3px;
  //   line-height: 30px;
  //   width: ${props => props.width && props.width}px;
  // }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: transparent;
    font-size: 20px;
    margin-top: -54px;
  }

  a {
    background-color: #f0f0f0;
    border-radius: 3px;
    font-size: 12px;
    height: 18px;
    margin-top: 3px;
    padding-top: 3px;
    text-align: center;
    width: 20px;
  }
`;

export const Model = styled.div`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  /* border: 1px solid #70707033; */
  opacity: 1;
  /* margin-top: 50px; */
  margin-right: 1px;
  margin-left: 0;
  /* border: none; */
  overflow: hidden;
  transition: 1.1s ease-in-out;
  height: auto;

  h4 {
    position: relative;
    font-family: 'DIN Bold', sans-serif;
    font-size: 16px;
    letter-spacing: 0.2px;
    margin: 42px 0 31px;
    padding: 42px 0 10px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
  }

  h5 {
    font-family: 'DIN Next LT Pro', sans-serif;
    font-size: 14px;
    letter-spacing: 0.2px;
    position: absolute;
    bottom: 50px;
    z-index: 2;
    display: block;
    width: 100%;
    margin: 0 auto;
    /* margin: 44px 0 44px; */
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
  }

  span {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Car = styled.img`
  display: flex;
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 285px;
  height: 196px;
  position: relative;
  top: 68px;
  width: 100%;
  z-index: 1;
  margin-top: -25px;
`;

export const Cards = styled.div`
  background: ${Colors.white};
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  margin-bottom: 1.87rem;
  position: relative;
  height: 250px;
`;

// export const Infos = styled.div`
//   background-color: ${Colors.greyLight};
//   box-shadow: 0px 3px 6px ${Colors.black};
//   display: flex;
//   flex-direction: column;
//   max-width: 100%;
//   width: 100px;
//   height: 114px;
//   text-align: center;

//   & + div {
//     margin-left: 8px;
//   }

//   img {
//     height: 94px;
//     height: 74px;
//     object-fit: cover;
//     width: 100%;
//   }

//   span {
//     color: ${Colors.white};
//     font-family: 'Din Regular', sans-serif;
//     font-size: 12px;
//     margin: auto 0;
//   }
// `;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;

  .thumbs {
    padding: 8.5rem 0 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    margin-bottom: 4rem;
  }
`;

export const Gallery = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: 45vw;
  max-height: 100%;
  position: relative;

  .mainImage {
    position: absolute;
    left: 0;
    top: 0;
    width: 100% !important;
    height: auto;

    .expandIcon {
      position: absolute;
      z-index: 2;
      margin: 1rem;
      background-color: transparent;
      right: 5px;
      top: 0;
      /* border-radius: 10px;
      width: 30px;
      height: 30px; */

      /* svg {
        flex-shrink: 0;
        background-color: #e8b358;
        position: relative;
        transition: background-color 50ms ease-in-out;
        color: #ffffff;
        width: 36px;
        height: 36px;
        padding: 0.6rem 0;
        border-radius: 10px;
      } */
    }
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const ImageMobile = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const TitleSection = styled.div`
  padding: 3rem 0rem;
  background-color: #000000;
  display: flex;
  justify-content: center;
  justify-items: center;
  color: ${Colors.greyMedium};
  z-index: 10;
  margin-bottom: -20px;
  position: relative;
  span {
    font-family: 'DIN Bold' !important;
    height: 19px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;

export const BoxLike = styled.div`
  position: absolute;
  right: 12px;
  bottom: 190px;
`;

export const BoxShare = styled.div`
  position: absolute;
  right: 12px;
  bottom: 150px;
`;

export const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 0px;
    height: 0px;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
    border-bottom: ${props => (props.isOpen ? 0 : 55)}px solid
      #f0f0f0;
    position: absolute;
  }
`;

export const Cta = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  position: relative;
  padding: 0 2.3rem;
  top: 3rem;

  a {
    align-items: center;
    display: flex;
    font-family: 'DIN Bold', sans-serif;
    font-size: 18px;
    justify-content: center;
    line-height: 27px;
    z-index: 99;

    & + a {
      margin-left: 16px;
    }

    @media (min-width: 1919px) {
      height: 60px;
      width: 240px;
    }
  }
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

export const InfosWrraper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 46px;
  left: 0px;
  width: 70%;
  margin: 0 auto;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
