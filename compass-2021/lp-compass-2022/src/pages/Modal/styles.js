import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { FiChevronDown } from 'react-icons/fi';
import { Colors } from '../../styles';

export const Swiper = styled(SwiperReact)`
  margin-bottom: -8px;
  width: 100% !important;
  .swiper-slide {
    display: flex;
    justify-content: center;
    /* width: 100% !important; */
    /* width: 320px; */
    /* background-color: pink; */
  }
  .swiper-button {
    &-next,
    &-prev {
      background-color: ${Colors.primary};
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      color: ${Colors.greyDark};
      content: '';
      height: 44px;
      width: 44px;

      &::after {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }

    &-next {
      right: 26px;
    }

    &-prev {
      left: 26px;
    }
  }

  .swiper-pagination {
    align-items: end;
    display: flex;
    justify-content: center;
    padding-top: 21px;
    margin-top: 5px;
    /* background-color: red; */

    &-bullet {
      background-color: ${Colors.white};
      border-radius: 0;
      height: 4px;
      opacity: 0.8;
      width: 46px;

      &-active {
        background-color: ${Colors.primary};
        height: 4px;
        opacity: 1;
        width: 46px;
      }
    }
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
  background-size: cover;
  background-position: center;
  height: 552px;
  object-fit: cover;
  width: 100%;
`;

export const Jeep = styled.img`
  display: block;
  width: 30px;
  height: auto;
  margin: 0 0 -20px 30px;
  z-index: 7;
  transform: rotate(90deg);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1;
  letter-spacing: -0.15rem;
  text-transform: uppercase;
  padding-bottom: 34px;
  top: 65px;
  z-index: 7;
`;

export const New = styled.div`
  color: ${Colors.white};
  position: absolute;
  left: 50px;
  top: 65px;

  p {
    font-size: 22px;
    line-height: 18px;
    padding-left: 8px;
  }
`;

export const Infos = styled.div`
  bottom: 122px;
  color: ${Colors.white};
  position: absolute;
  right: 200px;
  width: 280px;

  h1 {
    font-size: 34px;
    line-height: 36px;
    padding-bottom: 9px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    font-family: 'DIN Regular', sans-serif;
    opacity: 1;
  }
`;

export const ChevronDown = styled(FiChevronDown)`
  color: ${Colors.white};
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  z-index: 9999;
`;

export const ArrowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0rem;
`;

export const ArrowText = styled.p`
  flex: 0 1 auto;
  font-size: 0.7rem;
  line-height: 1.2;
  font-weight: 400;
  color: ${Colors.white};
`;
