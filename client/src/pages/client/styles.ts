import styled from 'styled-components';


export const ClientContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 90px;
`;

export const ContentContainer = styled.div`
    height: 700px;
    margin-bottom: 70px;
`;

export const Title = styled.div`
    width: 100%;
    margin-bottom: -50px;
`;

export const Tag = styled.div`
    display: flex;
    justify-content: center;
    color: #1A0289;
    font-size: 22px;

`;

export const Subtitle = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    color: #000;
    font-size: 32px;

    /* Responsividade Client */
    @media (min-width: 1280px) and (max-width: 1360px) {
        font-size: 30px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 28px;
    }

    @media (min-width: 980px) and (max-width: 1180px) {
        font-size: 26px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        font-size: 24px;
    }
`;

export const CarouselBackground = styled.div`
    background-image: url(${(props) => props.theme.backgroundCarousel.background});
    background-size: cover;
    float: right;
    width: 50%;
    height: 474px;
    margin-top: 90px;
    margin-right: 4%;

    /* Responsividade Client */
    @media (min-width: 1680px){
        height: 524px;
    }

    @media (min-width: 980px) and (max-width: 1180px) {
        height: 424px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        height: 404px;
    }
`;

export const AdjustCarousel = styled.div`
    margin-top: -60px;
    margin-left: -40px;

    /* Responsividade Client */
    @media (min-width: 1680px){
        margin-top: -12px;
    }

    @media (min-width: 980px) and (max-width: 1180px) {
        margin-top: -75px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        margin-top: -95px;
    }
`;

export const Content = styled.div`
    float: left;
    width: 36%;
    margin-top: 170px;
    margin-left: 10%;
    margin-bottom: 100px;
`;

export const TitleContent = styled.div`
    width: 450px;
    color: #A39AD0;
    margin-bottom: 10px;
    margin-top: -40px;
    font-size: 24px;
    font-weight: 600;

    /* Responsividade Client */
    @media (min-width: 1280px) and (max-width: 1360px) {
        font-size: 22px;
        margin-bottom: 8px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 21px;
        margin-bottom: 5px;
    }

    @media (min-width: 980px) and (max-width: 1180px) {
        font-size: 20px;
        margin-bottom: 4px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        font-size: 19px;
        margin-bottom: 4px;
    }
`;

export const SubTitleContent = styled.div`
    width: 470px;
    color: #000;
    margin-bottom: 20px;
    font-size: 20px;

    /* Responsividade Client */
    @media (min-width: 1280px) and (max-width: 1360px) {
        font-size: 19px;
        margin-bottom: 15px;
        width: 440px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 17px;
        margin-bottom: 12px;
        width: 400px;
    }

    @media (min-width: 1080px) and (max-width: 1180px) {
        width: 360px;
        font-size: 16px;
        margin-bottom: 12px;
    }

    @media (min-width: 980px) and (max-width: 1080px) {
        width: 370px;
        font-size: 16px;
        margin-bottom: 12px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        width: 340px;
        font-size: 15px;
        margin-bottom: 12px;
    }
`;

export const TextContent = styled.div`
    width: 505px;
    color: #000;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 400;

    /* Responsividade Client */
    @media (min-width: 1280px) and (max-width: 1360px) {
        width: 482px;
        font-size: 19px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 17px;
        width: 430px;
    }

    @media (min-width: 1080px) and (max-width: 1180px) {
        font-size: 16px;
        width: 405px;
    }

    @media (min-width: 980px) and (max-width: 1080px) {
        font-size: 16px;
        width: 385px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        font-size: 14.4px;
        width: 350px;
        margin-bottom: 10px;
    }
`;

export const Highlight = styled.span`
    color: #1A0289;
    font-weight: bold;
`;

export const AdjustButton = styled.div`
    padding-left: 0px;
`;

export const ImgLow = styled.div`
    background-image: url(${(props) => props.theme.backgroundLowClient.background});
    background-size: cover;
    width: 100%;
    height: 172px;

    /* Responsividade Client */
    @media (min-width: 980px) and (max-width: 1180px) {
        margin-top: -60px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        margin-top: -80px;
    }
`;

export const AdjustArrow = styled.a`
    display: flex;
    height: 63px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;



