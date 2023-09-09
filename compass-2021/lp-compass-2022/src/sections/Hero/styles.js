import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { FiChevronDown } from 'react-icons/fi';
import { Colors } from '../../styles';
import next from '../../assets/next.png';
import prev from '../../assets/prev.png';

export const Swiper = styled(SwiperReact)`
  /* height: calc(100vh - 90px); */
  .swiper-slide {
    width: 100% !important;
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
      height: 44px;
      width: 44px;
      top: 57%;

      &::after {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    &-next {
      right: 26px;
      @media (min-width: 1679px) {
        top: 44%;
        right: 30px;
      }

      @media (min-width: 1919px) {
        top: 54%;
        right: 42px;
      }
    }

    &-prev {
      left: 26px;
      @media (min-width: 1679px) {
        top: 53%;
        left: 45px;
      }

      @media (min-width: 1919px) {
        top: 54%;
        left: 56px;
      }
    }
  }

  .swiper-pagination {
    /* align-items: center; */
    display: flex;
    justify-content: center;
    /* padding-top: -15px; */
    position: absolute;
    bottom: 2.5rem;

    &-bullet {
      background-color: ${Colors.white};
      border-radius: 0;
      height: 4px;
      opacity: 0.8;
      width: 50px;

      &-active {
        background-color: ${Colors.terciary};
        height: 4px;
        opacity: 1;
        width: 50px;
      }
    }
  }
`;

export const Container = styled.div`
  #compass-2022 {
    height: calc(100vh - 87px);
  }
  .fixed {
    width: 100%;
    padding-left: 150px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2000;
  }
`;
export const Brand = styled.img`
  left: calc(50% - 45px);
  max-height: 36px;
  position: absolute;
  top: 23px;
  width: 90px;
  z-index: 2;
`;

export const Image = styled.img`
  background-size: contain;
  background-position: center;
  object-fit: contain;
  width: 110%;
  /* height: fit-content; */
`;

export const Jeep = styled.img`
  display: block;
  width: 4.25rem;
  margin: 0 0 1.625rem 11rem;
  z-index: 7;
`;

export const Title = styled.h1`
  padding-top: 2rem;
  font-size: 3.5vw;
  padding-left: 7rem;
  line-height: 1;
  letter-spacing: -0.15rem;

  padding-bottom: 10px;
  top: 65px;
  z-index: 7;
  color: ${Colors.white};
  @media (min-width: 1359px) {
  }

  @media (min-width: 2559px) {
    font-size: 5.1rem;
  }
`;

export const New = styled.div`
  color: ${Colors.white};
  position: absolute;
  left: 83px;
  top: 65px;

  @media (min-width: 1679px) {
    left: 140px;
  }

  @media (min-width: 2559px) {
    left: 250px;
    top: 145px;
  }

  p {
    font-size: 1.8rem;
    line-height: 1;

    @media (min-width: 2559px) {
      font-size: 2.8rem;
    }
  }
`;

export const Infos = styled.div`
  top: clamp(15%, 3vw, 22%);
  padding-top: 14%;

  right: clamp(5%, 1350px, 10%);
  padding-right: 10px;

  color: ${Colors.white};
  position: absolute;
  width: 340px;

  h1 {
    font-size: clamp(32px, 2vw, 38px);
    line-height: 30px;
    padding-bottom: 4px;
  }

  p {
    font-size: clamp(12px, 2.5vw, 16px);
    line-height: 21px;
    font-family: 'DIN Regular', sans-serif;
    opacity: 1;
    font-weight: 500;
  }

  .descriptionSubtitle {
    font-weight: 1000;
    font-size: 16px;
    margin-bottom: 1rem;
  }
`;

export const ChevronDown = styled(FiChevronDown)`
  color: ${Colors.white};
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  z-index: 200;
`;

export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0rem 1rem;
  background-color: ${Colors.darkPrimary};
  @media (min-width: 1358px) {
    padding: 3rem 0rem 1rem;
  }
  @media (min-width: 1679px) {
    padding: 3rem 0rem 1.5rem;
  }

  @media (min-width: 1919px) {
    padding: 4rem 0rem 1.5rem;
  }
`;

export const ArrowText = styled.p`
  flex: 0 1 auto;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 400;
  color: ${Colors.terciary};

  @media (min-width: 2559px) {
    font-size: 1.5rem;
  }
`;
