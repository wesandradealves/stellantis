import React from 'react';
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import { Container } from './styles';

const Medias = ({ socialMedias }) => {
  return (
    <Container>
      {socialMedias?.map(item => {
        let icon;
        switch (item.name) {
          case 'facebook':
            icon = <FaFacebookSquare />;
            break;

          case 'instagram':
            icon = <FaInstagram />;
            break;

          case 'twitter':
            icon = <FaTwitter />;
            break;

          case 'youtube':
            icon = <FaYoutube />;
            break;

          default:
            break;
        }

        return (
          <a
            key={`footer-socialmedia-${item.name}`}
            onClick={() =>
              DataLayer.push('Footer_ClicouSocial', item.name)
            }
            href={item.link}
            target="blank"
          >
            {icon}
          </a>
        );
      })}
    </Container>
  );
};

export default Medias;
