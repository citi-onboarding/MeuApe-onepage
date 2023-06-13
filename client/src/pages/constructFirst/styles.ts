import styled from 'styled-components';


export const ConstructContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 135px;

`;

export const ContentContainer = styled.div`
    height: 700px;
`;

export const LeftSide = styled.div`
    float: left;
    width: 50%;
    height: 474px;
    margin-top: 90px;
    margin-left: 3%;

`;

export const Content = styled.div`
    float: right;
    width: 46%;
    margin-top: 170px;
`;

export const TitleContent = styled.div`
    width: 450px;
    padding-left: 50px;
    color: #A39AD0;
    margin-bottom: 10px;
    margin-top: -40px;
    margin-left: 25px;
    font-size: 20px;
`;

export const SubTitleContent = styled.div`
    width: 450px;
    padding-left: 50px;
    color: #000;
    margin-bottom: 20px;
    margin-left: 25px;
    font-size: 20px;
`;

export const TextContent = styled.div`
    width: 560px;
    padding-left: 50px;
    color: #000;
    font-size: 20px;
    margin-left: 25px;
`;


export const Highlight = styled.span`
    color: #1A0289;
    font-weight: bold;
`;

export const AdjustButton = styled.div`
    padding-left: 50px;
    margin-left: 25px;

`;

export const ImgLow = styled.div`
    background-image: url(${(props) => props.theme.backgroundLowFirst.background});
    background-size: cover;
    width: 100%;
    margin-top: 30px;
    height: 172px;
`;

export const AdjustArrow = styled.a`
    display: flex;
    height: 63px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;
