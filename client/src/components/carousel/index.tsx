import React, { useState } from 'react';
import { CarouselContainer, CarouselImage } from './styles';

const images = [
  'https://i.im.ge/2023/06/09/hBAfor.carousel1.png',
  'https://i.im.ge/2023/06/09/hBAKWm.carousel2.png',
  'https://i.im.ge/2023/06/09/hBAZjf.carousel3.png',
];

export const Carousel: React.FC = () => {
  const [image, setImage] = useState(0);

  const ChangePhoto = (index: number) => {
    if (image === 2 && index > image) {
      setImage(2);
    } else if (image === 0 && index < image) {
      setImage(0);
    } else {
      setImage(index);
    }
  };

  return (
    <CarouselContainer>

      <CarouselImage
        src={images[image]}
        alt=""
        onClick={() => ChangePhoto((image + 1) % images.length)}
      />
    </CarouselContainer>
  );
};