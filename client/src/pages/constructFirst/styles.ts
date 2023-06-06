import styled from 'styled-components';


export const ConstructContainer = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContentContainer = styled.div`
    height: 700px;
`;

export const Content = styled.div`
    float: right;
    width: 50%;
    margin-top: 170px;
`;

export const TitleContent = styled.div`
    width: 497px;
    padding-left: 110px;
    color: #A39AD0;
    margin-bottom: 10px;
`;

export const SubTitleContent = styled.div`
    width: 497px;
    padding-left: 110px;
    color: #000;
    margin-bottom: 10px;
`;

export const TextContent = styled.div`
    width: 497px;
    padding-left: 110px;
    color: #000;
    font-size: 15px;
`;

export const Highlight = styled.span`
    color: #1A0289;
    font-weight: 600;
`;

export const AdjustButton = styled.div`
    padding-left: 110px;
`;

export const ImgLow = styled.div`
    display: flex;
    background-image: url(${(props) => props.theme.backgroundLowFirst.background});
    background-size: cover;
    width: 100%;
    height: 172px;
`;
