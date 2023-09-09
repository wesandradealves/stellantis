import styled from 'styled-components';
import { Colors } from '../../styles';

export const ExpandedDiv = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 90%);
  position: fixed !important;
  z-index: 100000;

  justify-content: center;
  align-items: center;
  display: flex;

  .swiper-pagination-bullet {
    background-color: ${Colors.greyDark};
    border-radius: 50%;
    height: 7px;
    opacity: 1;
    width: 7px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${Colors.terciary};
    height: 7px;
    opacity: 1;
    width: 7px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-size: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${Colors.terciary};
    border-radius: 50%;
    height: 3.25rem;
    width: 3.25rem;
    font-size: 0.3rem;
    color: ${Colors.white};
    &::after {
      font-size: 1.3rem;
    }
  }
`;

export const Photo = styled.img`
  width: 100%;
`;

export const Close = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const SwiperContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    img {
      object-fit: contain !important;
      max-height: 600px;
      @media (min-width: 1439px) {
        max-height: 700px;
      }
      @media (min-width: 1679px) {
        max-height: 800px;
      }

  }
`;
