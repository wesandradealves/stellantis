import React from 'react';
import { device } from '../../styles/device';

const Img = ({
  xs,
  sm,
  md,
  lg,
  xl,
  imgDefault,
  imageAlt,
  title,
}) => {
  return (
    <picture>
      {xl && <source media={device.xl} srcSet={xl} />}
      {lg && <source media={device.lg} srcSet={lg} />}
      {md && <source media={device.md} srcSet={md} />}
      {sm && <source media={device.sm} srcSet={sm} />}
      {xs && <source media={device.xs} srcSet={xs} />}
      <img alt={imageAlt} title={title} src={imgDefault} />
    </picture>
  );
};

export default Img;
