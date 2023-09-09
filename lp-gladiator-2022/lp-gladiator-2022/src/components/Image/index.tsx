import React from 'react';

import { ImageProps } from '../../interfaces'

const Image = ({ src, alt, title, className }: ImageProps) => {
  return <img src={String(src)} alt={alt} title={title} className={className} />;
}

export default Image;