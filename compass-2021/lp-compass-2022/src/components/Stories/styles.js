import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { FiChevronDown } from 'react-icons/fi';
import { Colors } from '../../styles';
import { device } from '../../styles/device';

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  height: 74vh;
  object-fit: cover;
  padding-top: 90px;
  position: relative;
  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-size: 100vw auto;
      //background-position-y: -9vh;
      background-repeat: no-repeat;
    `};
  /* Iphone 5 */
  @media (min-width: 320px) and (min-height: 568px) {
    background-size: cover;
    background-repeat: no-repeat;
  }
  /* Moto g4/s5 */
  @media (min-width: 360px) and (min-height: 640px) {
    background-size: 100vw 65vh;
    background-position-y: 1.5vh;
    background-repeat: no-repeat;
  }
  /* 700 Height */
  @media (min-width: 360px) and (min-height: 700px) {
    background-size: 100vw auto;
    background-position-y: 2vh;
    background-repeat: no-repeat;
  }
  /* S8 */
  @media (min-width: 360px) and (min-height: 730px) {
    background-size: 100vw auto;
    background-repeat: no-repeat;
  }
  /* Iphone 6/7/8 */
  @media (min-width: 375px) and (min-height: 667px) {
    background-size: 100vw auto;
    background-position-y: -5vh;
    background-repeat: no-repeat;
  }
  /* Iphone x */
  @media (min-width: 375px) and (min-height: 812px) {
    background-size: 100vw 65vh;
    background-position-y: 4vh;
    background-repeat: no-repeat;
  }
  /* Pixel 2 */
  @media (min-width: 411px) and (min-height: 731px) {
    background-size: cover;
    background-position-y: -4vh;
    background-repeat: no-repeat;
  }
  /* Pixel 2 XL */
  @media (min-width: 411px) and (min-height: 823px) {
    background-size: 100vw;
    background-position-y: 4vh;
    background-repeat: no-repeat;
  }
  /* Iphone 6/7/8 Plus */
  @media (min-width: 414px) and (min-height: 736px) {
    background-size: 100vw auto;
    background-position-y: -4vh;
    background-repeat: no-repeat;
  }

  div.TitleSymbols {
    padding: 5rem 1.25rem;
    /* width: 85vw; */
    /* margin: 0 auto; */
    display: flex;
    justify-content: space-between;
    z-index: 2;
  }

  .stories {
    background: red;
  }

  .scroll-to {
    position: absolute;
    top: 0px;
    right: 15px;
    color: ${Colors.white};

    legend {
      font-weight: 300;
      font-family: 'DIN Next LT Pro';
    }
    img {
      padding-left: 12px;
    }
  }
`;

export const ChevronDown = styled(FiChevronDown)`
  color: ${Colors.white};
  width: 1.5em;
  height: 1.5em;
  margin: 0 auto;
  z-index: 999999;
`;

export const ArrowContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  bottom: 0;
  position: absolute;
  /* Iphone 5 */
`;

export const JeepTitle = styled.h1`
  font-family: 'DIN Next LT Pro Bold', sans-serif;
  font-size: 2.3rem;
  color: ${Colors.white};
  font-weight: bold;
`;

export const FiatTitle = styled.div`
  position: absolute;
  ${props =>
    props.highlighted
      ? css`
          top: clamp(50px, 2vh, 90px);
        `
      : css`
          bottom: clamp(40px, 50vw, 10%);
        `}
  /* width: 100vw; */
  flex: 0 1 90%;
  padding-left: 4vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  h1 {
    color: ${Colors.white};
    font-family: 'DIN bold', sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0.3px;
    line-height: 1;
    margin-bottom: 0.5rem;
    text-align: left;
    font: normal normal bold 36px/38px DIN Next LT Pro;
  }

  p {
    color: ${Colors.white};
    font-size: clamp(22px, 2vw, 24px);
    font-family: 'DIN Next LT Pro';
    font-weight: 300;
  }

  svg {
    display: flex;
  }
`;

export const Divider = styled.hr`
  width: 15%;
  height: 0px;
  margin-bottom: 10px;

  border-bottom: 4px solid ${Colors.primary};
`;

export const NextContainer = styled.div`
  width: 100vw;
  flex: 0 1 10%;
  z-index: 2;
`;

export const Next = styled.div`
  color: ${Colors.light};
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-top: auto;
  z-index: 2;

  /* Iphone 5 */
  @media (min-width: 320px) and (min-height: 568px) {
    margin-top: 27.5%;
  }
  /* Moto g4/s5 */
  @media (min-width: 360px) and (min-height: 640px) {
    margin-top: 25%;
  }
  /* 700 Height */
  @media (min-width: 360px) and (min-height: 700px) {
    margin-top: 25%;
  }
  /* S8 */
  @media (min-width: 360px) and (min-height: 730px) {
    margin-top: 25%;
  }
  /* Iphone 6/7/8 */
  @media (min-width: 375px) and (min-height: 667px) {
    margin-top: 25%;
  }
  /* Iphone x */
  @media (min-width: 375px) and (min-height: 812px) {
    margin-top: 20%;
  }
  /* Pixel 2 */
  @media (min-width: 411px) and (min-height: 731px) {
    margin-top: 20%;
  }
  /* Pixel 2 XL */
  @media (min-width: 411px) and (min-height: 823px) {
    margin-top: 20%;
  }
  /* Iphone 6/7/8 Plus */
  @media (min-width: 414px) and (min-height: 736px) {
    margin-top: 22.5%;
  }

  div {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 2;
  }

  span {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    margin-right: 10vw;
  }

  img {
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 9px;
  }

  ${switchProp('align', {
    center: css`
      align-items: center;
      flex-direction: column;
      justify-content: center;
    `,
    left: css`
      justify-content: flex-start;
    `,
    right: css`
      justify-content: flex-end;
    `,
    bottomright: css`
      align-items: flex-end;
      justify-content: flex-end;
    `,
  })}
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 32.5%,
    rgba(255, 255, 255, 0) 75%,
    rgba(0, 0, 0, 0.8) 95%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const ActionContainer = styled.div`
  position: absolute;
  bottom: 8vh;

  /* Iphone 5 */
  @media (min-width: 320px) and (min-height: 568px) {
    bottom: 5vh;
  }
  /* Moto g4/s5 */
  @media (min-width: 360px) and (min-height: 640px) {
    bottom: 8vh;
  }
  /* Iphone 6/7/8 */
  @media (min-width: 375px) and (min-height: 667px) {
    bottom: 6vh;
  }
  /* Iphone x */
  @media (min-width: 375px) and (min-height: 812px) {
    bottom: 3rem;
  }
  /* Pixel 2 */
  @media (min-width: 411px) and (min-height: 731px) {
    bottom: 7vh;
  }
  /* Pixel 2 XL */
  @media (min-width: 411px) and (min-height: 823px) {
    bottom: 7vh;
  }
  /* Iphone 6/7/8 Plus */
  @media (min-width: 414px) and (min-height: 736px) {
    bottom: 8vh;
  }
`;

export const ArrowBox = styled.div`
  position: relative;
  bottom: 20px;
  z-index: 200;
`;
