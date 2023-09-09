import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  height: 0;
  ${props => props.isActive && css``}

  div {
    background-color: #ffffff;
    display: flex;
    padding: 12px;
    width: 100%;
    z-index: 200;
    box-shadow: 0px 0px 20px ${Colors.black};
    position: fixed;
    bottom: -100px;
    transition: all 1s ease-in-out;
    visibility: hidden;

    ${props =>
      props.isActive &&
      css`
        visibility: visible;
        position: fixed;
      `}

    ${props =>
      props.isVisible === true &&
      css`
        bottom: 0;
      `}
    a {
      flex: 1;
      & + a {
        margin-left: 16px;
      }
    }
  }
`;
