import styled from 'styled-components';

export const HomeContainer = styled.div`
    
    background-image: url(${(props) => props.theme.backgroundImage.background});
    background-size: cover;
    
    .highlight-line {
    }
  }
`;

export const HomeSection = styled.section`
  position: relative;
  height: 100vh;
  margin-left: 146px;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const BlockContent = styled.section`
  text-align: left;
  color: #fff;
  line-height: 85px;
  letter-spacing: 1.5px;
`;

export const Content = styled.h2`
  font-size: 68px;  
`;

export const BlueLine = styled.span`
  position: absolute;
  left: 0;
  width: 37%;
  height: 4px;
  background-color: #1A0289;
  margin-top: -460px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;