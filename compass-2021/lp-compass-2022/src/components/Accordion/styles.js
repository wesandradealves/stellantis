import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { Colors } from '../../styles';

export const Container = styled.div`
  color: ${props => (props.color ? props.color : Colors.yellow)};
  padding-bottom: 20px;
  background-color: #000000;
`;

export const Swiper = styled(SwiperReact)`
  background: #000000;
  height: 490px;

  .swiper-button-next,
  .swiper-button-prev {
    background-color: ${Colors.primary};
    border-radius: 50%;
    color: #575757;
    height: 36px;
    position: relative;
    top: 240px;
    width: 36px;
    background-size: 35px;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 25px;
    margin-left: 25px;

    &::after {
      font-size: 1.1rem;
      line-height: 1.2;
      color: ${Colors.white};
    }

    @media (min-width: 375px) and (min-height: 812px) {
      position: absolute;
      margin-right: 20px;
      margin-left: 26px;
    }
    @media (min-width: 320px) and (min-height: 568px) {
      position: absolute;
      margin-right: 5px;
      margin-left: 5px;
    }
    @media (min-width: 360px) and (min-height: 640px) {
      position: absolute;
      margin-right: 18px;
      margin-left: 20px;
    }

    /* Iphone 6/7/8 Plus */
    @media (min-width: 414px) and (min-height: 800px) {
      position: absolute;
      margin-right: 25px !important;
      margin-left: 30px !important;
    }

    @media (min-width: 414px) and (min-height: 736px) {
      position: absolute;
      margin-right: 35px !important;
      margin-left: 40px !important;
    }
    @media (min-width: 411px) and (min-height: 731px) {
      position: absolute;
      margin-right: 37px !important;
      margin-left: 35px !important;
    }
  }

  .swiper-pagination {
    align-items: center;
    display: flex;
    justify-content: center;
    bottom: 50px;

    &-bullet {
      background-color: ${Colors.white};
      border-radius: 50%;
      bottom: 200px;
      height: 4px;
      opacity: 0.5;
      position: relative;
      width: 4px;

      &-active {
        background-color: ${Colors.primary};
        height: 7px;
        opacity: 1;
        width: 7px;
      }
    }
  }
`;

export const Item = styled.div`
  background-color: #000000;

  header {
    align-items: center;
    background-color: transparent;
    display: flex;
    margin-left: 10px;

    span {
      color: ${Colors.greyMedium};
      font-size: 22px;
      line-height: 67px;
      margin-left: 20px;
      font-weight: 600;
    }

    svg {
      color: ${Colors.white};
      transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
      transition: 0.2s ease-in-out;
      margin-left: 25px;
    }
  }

  main {
    max-height: ${props => (props.isOpen ? 1000 : 0)}px;
    overflow: hidden;
    transition: 1s ease-in-out;
  }

  & + div {
    border-top: 2px solid ${Colors.greyLight};
  }
`;

export const BoxSection = styled.div`
  background: #000000;
  color: ${Colors.white};
  position: relative;
  margin-top: -70px;
`;

export const Infos = styled.section`
  position: relative;
  margin-top: -20px;
  padding: 0 60px;
  .legend-text-box {
    font-size: 13px;
    color: white;
  }
  h2 {
    color: ${Colors.white};
    font-family: 'DIN Next LT Pro bold', sans-serif;
    font-size: 24px;
    letter-spacing: 0.3px;
    line-height: 25px;
    margin-bottom: 10px;
    padding-top: 20px;
    margin-top: 70px;
    text-align: left;

    text-transform: uppercase;
  }

  p {
    color: ${Colors.white};
    font-size: 13px;
    line-height: 17px;
    width: 375px;
    max-width: 100%;
    text-align: left;
    letter-spacing: 0;
    font-family: 'DIN Next LT Pro', sans-serif;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

export const Design = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  overflow: hidden;

  img {
    margin: 0 25px;
    height: 210px;
    width: 317px;
    z-index: 1;
  }
`;

export const TitleBox = styled.div`
  padding: 2rem 1rem 0.5rem;
  display: flex;
  justify-content: center;
  background-color: #000000;
  .tltAcordion {
    width: 240px;
    height: 39px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.white};
  }
`;

export const Background = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 160px;
  height: 250px;
  top: 45px;
  background-repeat: no-repeat;
  background-size: cover;
`;
