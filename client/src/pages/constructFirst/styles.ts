import styled from 'styled-components';


export const ConstructContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 135px;

    /* Responsividade Construct first */
    @media (max-width: 1280px) {
        margin-top: 80px;
    }
`;

export const ContentContainer = styled.div`
    height: 700px;
`;

export const LeftSide = styled.div`
    float: left;
    width: 50%;
    height: 474px;
    margin-top: 90px;
    margin-left: 4%;
`;

export const Content = styled.div`
    float: right;
    width: 46%;
    margin-top: 135px;

    /* Responsividade Construct first */
    @media (min-width: 880px) and (max-width: 1360px) {
        margin-top: 126px;
    }
`;

export const TitleContent = styled.div`
    width: 450px;
    padding-left: 50px;
    color: #A39AD0;
    margin-bottom: 10px;
    margin-left: 25px;
    font-size: 20px;

    /* Responsividade Construct first */
    @media (min-width: 1280px) and (max-width: 1360px) {
        font-size: 19px;
        margin-bottom: 8px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 18px;
        margin-bottom: 5px;
    }

    @media (min-width: 980px) and (max-width: 1180px) {
        font-size: 17px;
        margin-bottom: 4px;
    }

    @media (min-width: 980px) and (max-width: 1080px) {
        padding-left: 10px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        font-size: 16px;
        margin-bottom: 4px;
        padding-left: 0;
    }
`;

export const SubTitleContent = styled.div`
    width: 460px;
    padding-left: 50px;
    color: #000;
    margin-bottom: 20px;
    margin-left: 25px;
    font-size: 20px;

    /* Responsividade Construct first */
    @media (min-width: 1280px) and (max-width: 1360px) {
        font-size: 19px;
        margin-bottom: 15px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 17px;
        margin-bottom: 12px;
        width: 430px;
    }

    @media (min-width: 1080px) and (max-width: 1180px) {
        width: 410px;
        font-size: 16px;
        margin-bottom: 12px;
    }

    @media (min-width: 980px) and (max-width: 1080px) {
        width: 370px;
        font-size: 16px;
        margin-bottom: 12px;
        padding-left: 10px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        width: 340px;
        font-size: 15px;
        margin-bottom: 12px;
        padding-left: 0;
    }
`;

export const TextContent = styled.div`
    width: 560px;
    padding-left: 50px;
    color: #000;
    font-size: 20px;
    margin-left: 25px;

    /* Responsividade Construct first */
    @media (min-width: 1280px) and (max-width: 1360px) {
        width: 530px;
        font-size: 19px;
    }

    @media (min-width: 1180px) and (max-width: 1280px) {
        font-size: 17px;
        width: 490px;
    }

    @media (min-width: 1080px) and (max-width: 1180px) {
        font-size: 16px;
        width: 455px;
    }

    @media (min-width: 980px) and (max-width: 1080px) {
        font-size: 16px;
        width: 415px;
        padding-left: 10px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        font-size: 14.8px;
        width: 376px;
        padding-left: 0;
    }
`;


export const Highlight = styled.span`
    color: #1A0289;
    font-weight: bold;
`;

export const AdjustButton = styled.div`
    padding-left: 50px;
    margin-left: 25px;
    
    /* Responsividade Construct first */
    @media (min-width: 980px) and (max-width: 1080px) {
        padding-left: 10px;
    }

    @media (min-width: 880px) and (max-width: 980px) {
        padding-left: 0;
    }
`;

export const ImgLow = styled.div`
    background-image: url(${(props) => props.theme.backgroundLowFirst.background});
    background-size: cover;
    width: 100%;
    height: 172px;
    margin-top: 20px;

    /* Responsividade Construct first */
    @media (min-width: 1680px) {
        margin-top: 130px;
    }

    @media (min-width: 1080px) and (max-width: 1380px) {
        margin-top: -50px;
    }

    @media (min-width: 880px) and (max-width: 1080px) {
        margin-top: -70px;
    }
`;

export const AdjustArrow = styled.a`
    display: flex;
    height: 63px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;

export const AdjustImage = styled.img`
    width: 109%;

    /* Responsividade Construct first */
    @media (min-width: 1080px) and (max-width: 1180px) {
        height: 80%;
    }

    @media (min-width: 880px) and (max-width: 1080px) {
        height: 80%;
    }
`;


