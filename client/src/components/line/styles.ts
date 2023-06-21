import styled from 'styled-components';

export const LineStyle = styled.img`
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 275%;
    margin-top: 20px;

    /* Responsividade Linha */

    @media (min-width: 1680px){
        height: 250%;
    }

    @media (min-width: 1280px) and (max-width: 1380px) {
        height: 285%;
    }

    @media (min-width: 880px) and (max-width: 1080px){
        height: 205%;
      }
`;
