import styled from 'styled-components';
import { Colors } from '../../../styles';

export const Container = styled.div`
  height: 120px;
  @media (max-width: 1250px) {
    height: 200px;
  }

  background-color: #000;
  background-size: contain;
  background-position: bottom center;
  background-attachment: fixed;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    z-index: 2;
    color: ${Colors.white};
    display: inline-block;
    font-size: 32px;

    & + a {
      margin-left: 44px;
    }
  }

  overflow: hidden !important;
  img {
    width: 100%;
    height: 14rem;
    bottom: 0;
    object-fit: cover;

    position: absolute;

    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
`;
