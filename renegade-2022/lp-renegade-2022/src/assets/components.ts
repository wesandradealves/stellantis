import {
  includeResponsive,
  PREFIX,
} from '@/utils/imagePrefixes';

const STORIES_PREFIX = 'Stories/';

const content = {
  main: `${PREFIX}${STORIES_PREFIX}firstContent.svg`,
  second: `${PREFIX}${STORIES_PREFIX}secondContent.svg`,
  third: `${PREFIX}${STORIES_PREFIX}thirdContent.svg`,
};

const backgrounds = {
  mainStorie: includeResponsive(
    `${STORIES_PREFIX}jeep-renegade`,
    'jpg',
  ),
  secondStorie: includeResponsive(
    `${STORIES_PREFIX}jeep-renegade-6`,
    'jpg',
  ),
  thirdStorie: includeResponsive(
    `${STORIES_PREFIX}jeep-renegade-2`,
    'jpg',
  ),
  fourthStorie: includeResponsive(
    `${STORIES_PREFIX}jeep-renegade-3`,
    'jpg',
  ),
  fifthStorie: includeResponsive(
    `${STORIES_PREFIX}jeep-renegade-4`,
    'jpg',
  ),
  sixthStorie: includeResponsive(
    `${STORIES_PREFIX}jeep-renegade-5`,
    'jpg',
  ),
};

export const Stories = {
  content,
  backgrounds,
};

