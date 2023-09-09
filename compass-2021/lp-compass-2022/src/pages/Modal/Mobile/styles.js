import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { FiChevronDown } from 'react-icons/fi';
import { Colors } from '../../../styles';

export const Swiper = styled(SwiperReact)`
  margin-bottom: -8px;
  width: 100% !important;
  z-index: 9999999999999;
  .swiper-slide {
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
    padding-bottom: 27px;
    margin-top: 5px;
    /* background-color: red; */

    &-bullet {
      background-color: ${Colors.white};
      border-radius: 0;
      height: 4px;
      opacity: 0.8;
      width: 46px;
      z-index: 10000000000000000000000000;

      &-active {
        background-color: ${Colors.primary};
        height: 4px;
        opacity: 1;
        width: 46px;
      }
    }
  }
`;
