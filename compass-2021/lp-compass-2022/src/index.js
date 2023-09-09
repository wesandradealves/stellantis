import React from 'react';
import ReactDOM from 'react-dom';
import { Container, connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import App from './App';
import Controller from './pages/Agende/Controller';
import CalculatorProvider from './context/Calculator/CalculatorProvider';
import GalleryProvider from './context/Gallery/GallreryProvider';

const putDeviceTypeOnBody = mobile => {
  document.body.classList.remove(
    mobile ? 'is-desktop' : 'is-mobile',
  );
  document.body.classList.add(
    mobile ? 'is-mobile' : 'is-desktop',
  );
};

const Device = connect(
  { media: state`useragent.media` },
  ({ media, ...props }) => {
    putDeviceTypeOnBody(media.mobile);
    return (
      <CalculatorProvider>
        <GalleryProvider>
          <App
            {...props}
            mobile={media.mobile}
            desktop={!media.mobile}
          />
        </GalleryProvider>
      </CalculatorProvider>
    );
  },
);

ReactDOM.render(
  <Container controller={Controller}>
    <Device />
  </Container>,
  document.getElementById('root'),
);
