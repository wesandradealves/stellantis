/* eslint-disable no-param-reassign */
import 'flickity-as-nav-for';
import 'flickity/dist/flickity.min.css';
import { useState, useContext, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import { DataLayer } from '../Track/DataLayer/DataLayer';
import { Container, Nav, Expanded } from './styles';
import { GalleryContext } from '../../context/Gallery/GalleryContext';

const Tabs = ({ data, id, versionName, itemFull }) => {
  const { setExpand, setVersion, setIndexPhoto } =
    useContext(GalleryContext);
  const flickityOptions = {
    pageDots: false,
    prevNextButtons: false,
    freeScroll: false,
    groupCells: false,
    imagesLoaded: true,
    lazyLoad: 0,
    arrowShape:
      'M100,47.564v4.632c0,3.014-2.532,5.609-5.546,5.609H27.382l21.273,21.2   c1.03,1.028,1.595,2.33,1.595,3.791c0,1.464-0.564,2.836-1.595,3.863l-3.273,3.275c-1.029,1.027-2.4,1.594-3.863,1.594   c-1.464,0-2.836-0.565-3.865-1.594L1.595,53.877C0.561,52.845-0.004,51.467,0,49.995c-0.004-1.464,0.561-2.84,1.595-3.874   l36.059-36.056c1.029-1.029,2.402-1.594,3.865-1.594s2.834,0.569,3.863,1.598l3.273,3.275c1.03,1.032,1.595,2.416,1.595,3.88   c0,1.463-0.564,2.858-1.595,3.887L27.619,42.192h66.916l-0.156-0.034C97.393,42.159,100,44.553,100,47.564',
  };

  const [photoSource, setPhotoSource] = useState(undefined);

  function capitalizeFirstLetter(s) {
    s = s.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return (
    <div id="galeria">
      <Container>
        <Nav>
          <Flickity
            elementType={'div'}
            options={{
              asNavFor: `.carousel.carousel-main.flic-${id}`,
              contain: true,
              buttongroup: false,
              prevNextButtons: false,
              pageDots: false,
              draggable: false,
            }}
          >
            {data.map(item => (
              <button
                key={`gallery-photo-${item.photoId}`}
                onClick={async () => {
                  await setIndexPhoto(item.photoId);
                  setPhotoSource(item.photos);
                  await setVersion(itemFull);

                  DataLayer.push(
                    'Fotos_ClicouFotos',
                    `${versionName}-foto-${item.photoId}`,
                  );
                }}
              >
                <img
                  src={item.photos}
                  alt={
                    item.imageAlt !== undefined
                      ? item.imageAlt
                      : `Galeria de fotos ${capitalizeFirstLetter(
                          itemFull.version,
                        )} ${item.photoId} `
                  }
                  title={
                    item.title !== undefined
                      ? item.title
                      : `Fotos da versão ${capitalizeFirstLetter(
                          itemFull.version,
                        )} ${item.photoId}`
                  }
                />
              </button>
            ))}
          </Flickity>
        </Nav>

        <div
          style={{
            width: '100%',
            marginRight: '1rem',
            flex: 1.68,
          }}
        >
          <Flickity
            id={id}
            className={`carousel carousel-main flic-${id}`}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            freeScroll={true}
          >
            {data.map(item => (
              <img
                onClick={async () => {
                  await setIndexPhoto(item.photoId);
                  await setVersion(itemFull);
                  await setExpand(true);
                }}
                key={`gallery-photo-slide${item.photoId}`}
                src={photoSource || item.photos}
                alt={`Galeria de fotos ${capitalizeFirstLetter(
                  itemFull.version,
                )} ${item.photoId} `}
                title={`Fotos da versão ${capitalizeFirstLetter(
                  itemFull.version,
                )} ${item.photoId}`}
              />
            ))}
          </Flickity>
        </div>
      </Container>
    </div>
  );
};

export default Tabs;
