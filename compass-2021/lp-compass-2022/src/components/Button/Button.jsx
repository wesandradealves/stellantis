import React from 'react';
import { DataLayer } from '../Track/DataLayer/DataLayer';
import Btn from './styles';

const Button = ({
  datalayer,
  datalayername,
  datalayerversionname,
  children,
  to,
  bg,
  width,
  height,
  br,
  color,
  fs,
  jc,
  ...rest
}) => (
  <Btn
    alt="botao"
    onClick={() => {
      DataLayer.push(
        `${datalayer}`,
        datalayername,
        datalayerversionname,
      );
    }}
    href={to}
    bg={bg}
    width={width}
    height={height}
    br={br}
    fs={fs}
    jc={jc}
    color={color}
    {...rest}
  >
    {children}
  </Btn>
);
export default Button;
