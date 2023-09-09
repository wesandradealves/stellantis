import { includeResponsive } from '@/utils/imagePrefixes';

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ConnectMe/';

export const connectMeItemswaper = {
  item01: includeResponsive(`${SECTION_PREFIX}green-bg`, 'jpg', {
    prefix: PREFIX,
  }),
  item02: includeResponsive(`${SECTION_PREFIX}green-bg`, 'jpg', {
    prefix: PREFIX,
  }),
};

export const connectMeBackgrounds = {
  bg01: includeResponsive(`${SECTION_PREFIX}green-bg`, 'jpg', {
    prefix: PREFIX,
  }),
  bg02: includeResponsive(`${SECTION_PREFIX}green-bg`, 'jpg', {
    prefix: PREFIX,
  }),
};
