import {
  connectMeItemswaper as connectMeAssets,
  connectMeBackgrounds,
} from '@/assets/connectMe';
import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';

export interface ConnectMeSlide {
  id: string;
  title: string;
  titleElement?: JSX.Element;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  image: IncludePrefixResponsiveSizes;
  background: IncludePrefixResponsiveSizes;
}

const connectMe: ConnectMeSlide[] = [
  {
    id: 'cme-c-1',
    title: 'Lorem ipsum dolor',
    titleElement: (
      <>
        {'Lorem ipsum'}

        <strong>{'dolor'}</strong>
      </>
    ),
    descriptionDesktop: (
      <p>
        Desktop Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    ),
    descriptionMobile: (
      <p>
        Mobile Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    ),
    image: connectMeAssets.item01,
    background: connectMeBackgrounds.bg01,
  },
  {
    id: 'cme-c-2',
    title: 'Lorem',
    titleElement: (
      <>
        {'Lorem ipsum'}

        <strong>{'dolodollarr'}</strong>
      </>
    ),
    descriptionDesktop: (
      <p>
        Desktop Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    ),
    descriptionMobile: (
      <p>
        Mobile Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    ),
    image: connectMeAssets.item02,
    background: connectMeBackgrounds.bg02,
  },
];

export default connectMe;
