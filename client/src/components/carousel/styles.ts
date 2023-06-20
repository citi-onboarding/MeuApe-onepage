import styled from 'styled-components';

export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-top: 100px;
    width: 105%;

    /* Responsividade Construct first */
    @media (min-width: 880px) and (max-width: 1180px) {
        width: 90%;
    }

`;

export const CarouselImage = styled.img`
    max-width: 600px;
    max-height: 600px;
    cursor: pointer;
    
    /* Responsividade Carousel */
    @media (min-width: 880px) and (max-width: 1180px) {
        height: 400px;
    }
`;