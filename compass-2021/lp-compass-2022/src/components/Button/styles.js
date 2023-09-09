import styled, { css } from 'styled-components';
import { Colors } from '../../styles';

const Btn = styled.a`
  background-color: ${props =>
    props.bg ? props.bg : Colors.primary};
  border-radius: ${props => (props.br ? props.br : 4)}px;
  border: ${props => props.border && props.border};
  height: ${props => (props.height ? props.height : 48)}px;
  width: ${props => props.width && props.width}px;
  padding: ${props => (props.pd ? props.pd : 20)}px;
  color: ${props => (props.color ? props.color : Colors.light)};
  justify-content: ${props => props.jc};
  line-height: 24px;
  font-size: ${props => (props.fs ? props.fs : 18)}px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export default Btn;
