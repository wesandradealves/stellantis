/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
} from 'csstype';
import { MediaHTMLAttributes } from 'react';

interface TwitterProps {
  card: 'summary';
  site: '@jeepbr';
  image: string;
}

export interface VersionsDetails {
  title: JSX.Element;
  titleDescription: string;
  photo: string;
}

export interface IVersionFragment {
  id: string;
  name: string;
  slug: string;
  versionText?: string;
  nameParts: {
    first: string;
    second: string;
  };
  short: string;
  hex: string;
  details: VersionsDetails[];
  text: 'dark' | 'light';
}

export interface IVersion extends IVersionFragment {
  fullName: string;
}

export interface MenuLabel {
  id: string;
  slug: string;
  label: string;
  url: string;
  hasChildren?: boolean;
  prefixRelation?: MenuLabel;
  //reference?: MenuLabel;
  //nestedPrefix?: string;
  //tabId?: string;
}

export interface MenuCTAs {
  id: string;
  label: string;
  url: string;
  iconCode?: string;
}

export interface MetaType {
  title: string;
  description: string;
  url: string;
  heading: string;
  brandName?: string;
  twitter: TwitterProps;
  image: string;
  imageAlt: string;
  productName: string;
}

export type AnimationType =
  | 'top'
  | 'slide-in'
  | 'scale'
  | 'fade-in';

export interface StoriesBackgroundStyleProps {
  backgroundRepeat?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundRepeat'];
  backgroundPosition?: StandardShorthandProperties<
    string | number,
    string & unknown
  >['backgroundPosition'];
  backgroundImage?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundImage'];
  backgroundColor?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundColor'];
  backgroundSize?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundSize'];
}

export interface StoriesVideoProps {
  src?: string;
  autoPlay?: MediaHTMLAttributes<HTMLVideoElement>['autoPlay'];
  muted?: MediaHTMLAttributes<HTMLVideoElement>['muted'];
  loop?: MediaHTMLAttributes<HTMLVideoElement>['loop'];
}
export interface StoriesItemProps {
  title: string;
  scrollCtaOrientation?: 'horizontal' | 'vertical';
  durationInS: number;
  body: JSX.Element;
  showNext?: boolean;
  includeGradient?: boolean;
  videoProps?: StoriesVideoProps;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
  };
}

export interface DisplayItemProps {
  body: JSX.Element;
  title?: string;
  videoProps?: StoriesVideoProps;
  activeIndex?: number;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
    alt?: string;
  };
}

export interface CardsItemsProps {
  id: string;
  title: string;
  title2?: string;
  src: IncludePrefixResponsiveSizes;
  isSelected?: boolean;
}
