import React from "react";
import { ClientContainer} from './styles';
import { Carousel } from "../../components";


export const Client: React.FC = () => {

  return (
    <ClientContainer>
        <Carousel />
    </ClientContainer>
  );
}