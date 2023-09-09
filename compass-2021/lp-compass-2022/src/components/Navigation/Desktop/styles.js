import styled, { css } from 'styled-components';
import { Colors } from '../../../styles';

export const Container = styled.div`
  /* position: relative; */
`;

export const Hamburger = styled.div`
  align-items: left;
  background-color: ${Colors.greyDark};
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  display: flex;
  height: 35px;
  left: ${props => (props.isOpen ? '167px' : 0)};
  padding: 4px;
  position: fixed;
  top: 12px;
  transition: 0.2s ease-in-out;
  width: 40px;
  z-index: 99999;

  span {
    background: ${Colors.primary};
    border-radius: 3px;
    display: block;
    height: 2px;
    left: 10px;
    position: relative;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 16px;

    &::before,
    &::after {
      background: ${Colors.primary};
      border-radius: 3px;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: 0.2s ease-in-out;
      width: 100%;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }

    ${props =>
      props.isOpen &&
      css`
        transform: rotate(45deg);
        &::before {
          transform: rotate(90deg);
          top: 0;
        }
        &::after {
          bottom: 0;
          transform: rotate(90deg);
        }
      `}
  }

  img {
    margin-left: 6px;
    z-index: 9997;
  }
`;

export const Nav = styled.div`
  align-items: center;
  background-color: ${Colors.greyDark};
  box-shadow: 3px 0px 10px #00000033;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: ${props => (props.isOpen ? 0 : '-188px')};
  overflow-y: auto;
  padding: 30px 0px 34px 0px;
  position: fixed;
  transition: 0.2s ease-in-out;
  width: 188px;
  z-index: 9999;

  @media (min-width: 2559px) {
    width: 305px;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    img {
      max-height: 0.5rem;
      margin-right: -0.8rem;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    padding-left: 30px;
    li {
      list-style: disc;
      padding-top: 10px;
      button {
        border-bottom: 0;
        font-family: 'DIN Regular', Sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        padding: 0;

        @media (min-width: 2559px) {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  height: 30px;
  margin-right: 75px;
  margin-bottom: 1.4rem;
  @media (min-width: 2559px) {
    height: 50px;
    margin-right: 135px;
    margin-bottom: 1rem;
  }
`;

export const Link = styled.button`
  background-color: transparent;
  color: ${Colors.white};

  font-family: 'DIN Bold', Sans-serif;
  line-height: 2;
  padding: 0;
  text-align: left;
  transition: 0.16s ease-in-out;
  width: 148px;

  @media (min-width: 2559px) {
    width: 255px;
  }

  h2 {
    font-size: 1rem;
    color: ${Colors.white};
    font-family: 'Din Next LT Pro', sans-serif;

    @media (min-width: 2559px) {
      font-size: 2rem;
    }

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      margin: ${({ noton }) =>
          noton === 1 ? '0rem' : '0.25rem'}
        auto;
      background: ${({ noton }) =>
        noton === 1 ? 'transparent' : '#515558'};
    }
    &:hover {
      color: ${Colors.primary};
    }
  }
  &:hover {
    color: ${Colors.primary};
  }
`;

export const Actions = styled.div`
  margin-top: 15px;
  position: relative;
  margin-top: 2rem;
  a + a {
    margin-top: 8px;
  }

  img {
    position: absolute;
    right: 1rem;
  }

  a {
    align-items: center;
    display: flex;
    font-size: 0.6875rem;
    justify-content: space-between;
    line-height: 10px;
  }

  .teste {
    left: 2px;
    top: 10px;
    height: 20px;
    width: 14px;
    max-height: unset;
    position: unset;
    color: #fff;
    margin: -4px 6px -10px 0px;
  }

  .btnyellow {
    font-size: 0.594;
    color: ${Colors.light} !important;
    &:first-child,
    &:nth-child(2) {
      color: black;
      background-color: ${Colors.primary} !important;
    }

    transition: ease 0.4s;
    :hover {
      background-color: ${Colors.light} !important;
      color: ${Colors.black} !important;
    }

    @media (min-width: 2559px) {
      width: 280px;
      height: 57px;
      font-size: 1.1;
    }
  }
`;

export const Overlay = styled.div`
  transition: 0.2s ease-in-out;
  ${props =>
    props.isOpen &&
    css`
      height: 100vh;
      left: 0;
      position: absolute;
      width: 96vw;
      z-index: 9998;
    `}
`;
