import { Link as LinkRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Colors } from '../../../styles';

export const MdArrowRight = styled(MdKeyboardArrowRight)`
  width: 20px;
  height: 50px;
`;

export const Container = styled.div`
  align-items: center;
  background-color: ${Colors.greyDark};
  display: flex;
  width: 100vw;
  height: 44px;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding-left: 10px;

  img {
    height: 24px;
    width: 60px;
    margin-left: 10px;
  }

  .version-selected {
    width: 31px;
    height: 37px;
    background-color: ${Colors.switch};
    position: absolute;
    bottom: 0;
    right: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 40% 40% 0 0;
  }
`;

export const Hamburger = styled.div`
  align-items: center;
  background-color: ${Colors.greyDark};
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 4px;
  width: 30px;
  @media (min-width: 992px) {
    width: 4%;
  }

  span {
    background-color: ${({ isOpen }) =>
      isOpen ? Colors.primary : Colors.light};
    border-radius: 3px;
    display: block;
    height: 2px;
    position: relative;
    top: 0;
    transition: 0.5s ease-in-out;
    width: 100%;
    &::before,
    &::after {
      background-color: ${({ isOpen }) =>
        isOpen ? Colors.primary : Colors.light};
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
`;

export const Nav = styled.div`
  background-color: ${Colors.greyDark};
  color: ${Colors.white};
  display: flex;
  flex-direction: column;
  left: ${props => (props.isOpen ? 0 : '-100%')};
  overflow: scroll;
  padding: 20px 20px 45px;
  position: fixed;
  top: 43px;
  transition: 0.2s ease-in-out;
  width: 92%;
  height: 100vh;
  z-index: 9999;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ul {
    padding-left: 30px;
    li {
      list-style: disc;
      padding-top: 10px;
      font-weight: 400 !important;

      a {
        border-bottom: 0;
        font-family: 'DIN Next LT Pro', sans-serif;
        font-weight: 400 !important;
        font-size: 1.3rem;
        line-height: 21px;
        padding: 0;
      }
    }
  }
`;
export const Link = styled.button`
  background-color: transparent;
  color: ${Colors.white};
  font-size: 1rem;
  font-family: 'DIN Bold', Sans-serif;
  line-height: 2;
  padding: 0;
  text-align: left;
  transition: 0.16s ease-in-out;
  width: 148px;

  h2 {
    font-size: 1rem;
    color: ${Colors.white};
    font-family: 'Din Next LT Pro', sans-serif;

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
      color: #358ad5;
    }
  }
  &:hover {
    color: #358ad5;
  }
`;
export const Actions = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  position: relative;
  a + a {
    margin-top: 8px;
  }

  img {
    position: absolute;
    right: 1rem;
    height: 3%;
  }

  .teste {
    left: 2px;
    top: 10px;
    height: 20px;
    width: 14px;
    max-height: unset;
    position: unset;
    color: #fff;
    margin: 0 6px -6px 0px;
  }

  a {
    align-items: center;
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
    line-height: 10px;
    color: ${Colors.white};
  }
  .btnblue {
    color: ${Colors.white} !important;
  }
`;

export const Medias = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  a {
    height: 24px;

    img {
      height: 100%;
    }
  }
`;
