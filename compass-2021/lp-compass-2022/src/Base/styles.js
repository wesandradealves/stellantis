import styled from 'styled-components';
import Colors from '../styles/colors';

export const Container = styled.div`
  background: linear-gradient(to top, #003c55 85%, #000000 75%);
  padding-top: 44px;
  overflow-y: hidden !important;
  max-width: 100vw;
`;

export const ContainerDesktop = styled.div`
  background-color: ${Colors.black};
  margin-left: ${props => (props.open ? 188 : 0)}px;
  transition: 0.2s ease-in-out;
  position: relative;
  overflow-y: hidden !important;
  @media (min-width: 2559px) {
    margin-left: ${props => (props.open ? 305 : 0)}px;
  }
`;
