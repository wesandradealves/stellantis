import styled from 'styled-components';
import { Colors } from '../../styles';

export const ContainerBox = styled.header`
  z-index: 100;
  background-color: ${Colors.switch};
  color: ${Colors.light};
  width: 100%;
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 16px 16px 0 0;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  padding-left: 92px;
  h1 {
    font-size: 1.5rem;

    @media (max-width: 1300px) {
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 1rem;
    @media (max-width: 1300px) {
      font-size: 0.5rem;
    }
  }
`;

export const Wrap = styled.div`
  flex-direction: row;
  display: flex;
  padding-right: 50px;
  /* justify-content: start; */
  .wrapper {
    flex-direction: row;
    display: flex;
    justify-content: start;
    cursor: pointer;
  }

  .ponta-esquerda {
    background-color: ${Colors.hybridOption};
    height: 48px;
    border-radius: 100% 0 0 100%;
    width: 40px !important;
  }
  .ponta-direita {
    background-color: ${Colors.primary};
    height: 48px;
    border-radius: 0 60% 60% 0;
    width: 40px;
    padding-left: 17px;
  }
  .both {
    max-width: 239px;
    min-width: 205px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .combustion {
    /* padding-left: 1rem; */
    background-color: ${Colors.hybridOption};
    span {
      margin-right: 34px;
      color: ${Colors.light};
    }
  }
  .hybrid {
    padding-left: 30px;
    background-color: ${Colors.primary};
    span {
      color: ${Colors.light};
    }
  }
`;
