import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import DataFooter from '../../../mocks/DataFooter';
import DataSocialMedias from '../../../mocks/DataSocialMedias';
import { Colors } from '../../../styles';
import * as images from '../../../assets';
import {
  Container,
  Medias,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
} from './styles';

import Button from '../../Button';

const Footer = () => {
  return (
    <>
      <Container>
        {DataFooter.map((item, index) =>
          item.download ? (
            <Button
              className="btnblue"
              datalayer={'Footer_ClicouCTA'}
              datalayername={item.ref}
              key={`footer-mobile-cta${index}-${item.id}`}
              to={`${item.link}${window.location?.search ?? ''}`}
              bg={Colors.primary}
              height={50}
              color={Colors.light}
              target={item.target ?? '_blank'}
              download
            >
              <p>{item.name} </p>
              <MdKeyboardArrowRight
                style={{
                  width: '20px',
                  height: '50px',
                  color: '#fff',
                }}
              />
            </Button>
          ) : (
            <Button
              className="btnblue"
              datalayer={'Footer_ClicouCTA'}
              datalayername={item.ref}
              key={item.id}
              to={`${item.link}${window.location?.search ?? ''}`}
              bg={Colors.primary}
              height={50}
              target={item.target ?? '_blank'}
            >
              {item.icon ? (
                <img
                  alt="whatsapp"
                  className="teste"
                  src={images.whatsapp}
                />
              ) : (
                ''
              )}
              <p>{item.name} </p>
              <MdKeyboardArrowRight
                style={{
                  width: '20px',
                  height: '50px',
                  color: '#fff',
                }}
              />
            </Button>
          ),
        )}
        <Medias>
          {DataSocialMedias.map(item => {
            let icon;
            switch (item.name) {
              case 'facebook':
                icon = <Facebook />;
                break;
              case 'Twitter':
                icon = <Twitter />;
                break;

              case 'Instagram':
                icon = <Instagram />;
                break;

              case 'Youtube':
                icon = <Youtube />;
                break;

              default:
            }

            return (
              <a
                key={`footer-link-${item.id}`}
                onClick={() =>
                  DataLayer.push(
                    'Footer_ClicouSocial',
                    item.name.toLowerCase(),
                  )
                }
                href={item.link || '#'}
                target={item.target ?? '_blank'}
              >
                {icon}
              </a>
            );
          })}
        </Medias>
      </Container>
    </>
  );
};

export default Footer;
