import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Brand } from './styles';

const DataSheet = ({ data }) => {
  return (
    <Swiper>
      {data.map((sheet, index) => (
        <SwiperSlide key={`datasheet-${index}`}>
          <>
            <Brand>
              <h1>{sheet.brand}</h1>
            </Brand>
          </>

          <Swiper>
            <SwiperSlide />
          </Swiper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DataSheet;
