import React, { useState } from 'react';
import { CarouselContainer, CarouselImage } from './styles';

const images = [
  'https://i.im.ge/2023/06/09/hBAfor.carousel1.png',
  'https://i.im.ge/2023/06/09/hBAKWm.carousel2.png',
  'https://i.im.ge/2023/06/09/hBAZjf.carousel3.png',
];

export const Carousel: React.FC = () => {
  const [image, setImage] = useState(0);

  const changePhoto = (event: React.MouseEvent<HTMLImageElement>) => {
    const { width, left } = (event.target as HTMLImageElement).getBoundingClientRect();
    const position = event.clientX - left;
    const half = width / 2;

    if (position < half) {
      if (image === 2) {
        setImage(1);
      } 
      else if (image === 1) {
        setImage(0);
      } 
      else if (image === 0) {
        setImage(0);
      }
    } else {
      if (image === 2) {
        setImage(2);
      } 
      else if (image === 1) {
        setImage(2);
      } 
      else if (image === 0) {
        setImage(1);
      }
    }
  };

  return (
    <CarouselContainer>
      <CarouselImage
        src={images[image]}
        alt=""
        onClick={changePhoto}
      />
    </CarouselContainer>
  );
};
