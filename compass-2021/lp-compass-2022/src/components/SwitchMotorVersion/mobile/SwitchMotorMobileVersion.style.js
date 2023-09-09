import styled from 'styled-components';
import { Colors } from '../../../styles';

export const ContainerBox = styled.header`
  z-index: 1500;
  background-color: ${Colors.switch};
  color: ${Colors.light};
  width: 100%;
  margin-top: 44px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  top: 0;
  position: fixed;
`;

export const TextContainer = styled.div`
  padding-left: 15px;
  h1 {
    font-size: 11px;
  }

  h2 {
    font-size: 7.2px;
  }
`;
export const Wrap = styled.div`
  flex-direction: row;
  display: flex;
  padding-right: 15px;
  /* justify-content: start; */

  .wrapper {
    flex-direction: row;
    display: flex;
    justify-content: start;
    cursor: pointer;
  }

  .ponta-esquerda {
    background-color: ${Colors.hybridOption};
    height: 24px;
    border-radius: 60% 0 0 60%;
    width: 15px !important;
  }
  .ponta-direita {
    background-color: #269dde;
    height: 24px;
    border-radius: 0 60% 60% 0;
    width: 15px;
    padding-left: 17px;
  }
  .both {
    max-width: 204px;
    width: 100px;
    /* min-width: 175px; */
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 11px;

    svg {
      width: 10px;
    }
    span {
      font-size: 11px;
    }
  }

  .combustion {
    /* padding-left: 1rem; */
    background-color: ${Colors.hybridOption};
    span {
      margin-right: 3px;
      color: ${Colors.white};
    }
  }
  .hybrid {
    /* padding-left: 2.8rem; */
    background-color: ${Colors.primary};
    span {
      color: ${Colors.light};
    }
  }
`;
