import React, { useState } from 'react';
import { CarouselContainer, CarouselImage } from './styles';

const images = [
  'https://i.im.ge/2023/06/09/hBAfor.carousel1.png',
  'https://i.im.ge/2023/06/09/hBAKWm.carousel2.png',
  'https://i.im.ge/2023/06/09/hBAZjf.carousel3.png',
];

export const Carousel: React.FC = () => {
  const [image, setImage] = useState(0);

  return (
    <CarouselContainer>
      <CarouselImage
        src={images[image]}
        alt=""
        onClick={() => {
          if (image === 2) {
            if (((image + 1) % images.length) < 3) {
              setImage(1);
            } else {
              setImage(2);
            }
          } else if (image === 1) {
            if (((image + 1) % images.length) < 2) {
              setImage(0);
            } else {
              setImage(2);
            }
          } else if (image === 0) {
            if (((image + 1) % images.length) < 1) {
              setImage(0);
            } else {
              setImage(1);
            }
          }
        }}
      />
    </CarouselContainer>
  );
};
