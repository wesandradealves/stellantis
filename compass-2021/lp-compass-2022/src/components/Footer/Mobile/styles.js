import styled from 'styled-components';
import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { Colors } from '../../../styles';

export const Youtube = styled(AiFillYoutube)`
  width: 45px;
  height: 45px;
  color: ${Colors.greyMedium};
`;

export const Twitter = styled(AiOutlineTwitter)`
  width: 45px;
  height: 45px;
  color: ${Colors.greyMedium};
`;

export const Instagram = styled(AiFillInstagram)`
  width: 45px;
  height: 45px;
  color: ${Colors.greyMedium};
`;

export const Facebook = styled(CgFacebook)`
  width: 45px;
  height: 45px;
  color: ${Colors.greyMedium};
`;

export const Container = styled.footer`
  background-color: #000000;
  padding: 35px 32px 18px 42px;
  color: white;

  .teste {
    left: 2px;
    top: 10px;
    height: 28px;
    width: 27px;
    max-height: unset;
    position: unset;
    color: #fff;
    margin: 0 -40px 0 0px;
  }

  a:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-radius: 0.25rem;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    border-radius: 0.25rem;
  }

  span {
    margin-right: 15px;
  }

  p {
    font-family: 'DIN Bold', sans-serif;
    color: ${Colors.white};
    margin-left: 10px;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
  }

  .btnblue {
    font-size: 9.5px;
    color: ${Colors.white};
  }
`;

export const Medias = styled.div`
  margin-top: 20px;
  margin: 20px 10px 0px auto;
  padding: 15px 32px 18px 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 24px;
    margin: 0px;
    padding: 1.2rem;

    img {
      height: 100%;
    }
  }
`;
