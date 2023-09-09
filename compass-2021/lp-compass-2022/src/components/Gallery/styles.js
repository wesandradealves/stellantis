import styled from 'styled-components';
import { Colors } from '../../styles';

const teste = document.querySelector(
  '#galeriad .flickity-slider',
);

export const Container = styled.section`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem 3rem 0rem 5rem;
  height: auto;

  @media (min-width: 1679px) {
    padding: 0rem 7rem 0rem 10rem;
  }

  img {
    width: 100%;
  }
`;

export const Expanded = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 30%);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;
export const Nav = styled.div`
  padding: 0;
  /* max-width: 450px; */
  /* max-height: 950px; */
  /* width: 34%; */
  flex: 0.9;
  height: 100%;
  div {
    position: relative;
    height: 100%;
    .flickity-viewport {
      cursor: default !important;
      height: 100% !important;

      & > div {
        height: 100% !important;
        transform: none !important;
        width: 100%;

        button {
          transform: none !important;
          /* height: 108px; */
          /* left: auto !important; */
          margin-left: 6px;
          opacity: 0.6;
          position: relative !important;
          width: 45%;

          img {
            /* height: 100%; */
            object-fit: cover;
          }

          &.is-selected,
          &.is-nav-selected {
            opacity: 1;

            img {
              border: 4px solid ${Colors.terciary};
            }
          }
        }
      }
    }
  }
`;
