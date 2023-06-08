import styled from 'styled-components';


export const ClientContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`;

export const ContentContainer = styled.div`
    height: 700px;
    margin-bottom: 100px;
`;

export const Title = styled.div`
    width: 100%;
`;

export const Tag = styled.div`
    display: flex;
    justify-content: center;
    color: #1A0289;
    font-size: 22px;
`;

export const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    color: #000;
    font-size: 32px;
`;

export const Carousel = styled.div`
    background-image: url(${(props) => props.theme.backgroundCarousel.background});
    background-size: cover;
    float: right;
    width: 50%;
    height: 474px;
    margin-top: 90px;
    margin-right: 4%;
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
    padding-left: 50px;
    color: #A39AD0;
    margin-bottom: 20px;
    margin-top: -40px;
    font-size: 20px;
`;

export const SubTitleContent = styled.div`
    width: 481px;
    padding-left: 50px;
    color: #000;
    margin-bottom: 20px;
    font-size: 20px;
`;

export const TextContent = styled.div`
    width: 470px;
    padding-left: 50px;
    color: #000;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const Highlight = styled.span`
    color: #1A0289;
    font-weight: 600;
`;

export const AdjustButton = styled.div`
    padding-left: 50px;
`;

export const ImgLow = styled.div`
    display: flex;
    background-image: url(${(props) => props.theme.backgroundLowClient.background});
    background-size: cover;
    width: 100%;
    height: 172px;
`;


