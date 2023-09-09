import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  padding: 0 34px;
  background-color: #16191a;
  padding-bottom: 40px;

  .tltTabs {
    color: ${Colors.white};
    font-size: 1.9rem;
    font-weight: bold;
    line-height: 42px;
    margin-bottom: 28px;
    padding-top: 36px;
    text-align: center;
    @media (min-width: 1439px) {
      margin-bottom: 32px;
    }
    @media (min-width: 1679px) {
      padding-top: 100px;
      margin-bottom: 24px;
    }
  }

  header {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    position: relative;
    width: 90%;
    margin: 0 auto 30px;
    @media (min-width: 1679px) {
      width: 80%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: ${Colors.white};
  font-family: 'DIN Next LT Pro', sans-serif;
  font-weight: 300;

  span {
    font-family: 'DIN Next LT Pro', sans-serif;
    white-space: nowrap;
    text-align: center;
    font-size: 0.95rem;

    @media (min-width: 1600px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1679px) {
      font-size: 1rem;
    }

    &:not(:last-child):after {
      content: '';
      width: 1px;
      height: 100%;
      border-right: 1px solid #535759;
    }

    &:after {
      @media (min-width: 1000px) {
        padding-right: 7px;
      }
      @media (min-width: 1300px) {
        padding-right: 10px;
      }
      @media (min-width: 1600px) {
        padding-right: 20px;
      }
    }
  }
  .ChevronDown {
    display: none;
  }

  ${props =>
    props.isActive &&
    css`
      color: ${Colors.terciary};

      span {
        font-family: 'DIN Next LT Pro Bold', sans-serif;
      }

      .ChevronDown {
        display: flex;
        color: ${Colors.terciary};
        width: 1.5em;
        height: 2rem;
        margin: 0 calc(50% - 1.1rem);
        margin-top: -0.5rem;
      }
    `}
`;
