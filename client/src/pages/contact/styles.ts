import styled from 'styled-components';


export const ContactContainer = styled.div`
    background-image: url(${(props) => props.theme.backgroundImageContact.background});
    background-size: cover;
    height: 784px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
    color: #1A0289;
    font-weight: 300;
    margin-bottom: 200px;
  }
`;

export const Content = styled.h1`
    color: #FFF;
    font-size: 64px;
    text-shadow: #000 1px 1px 2px;
  }
`;

export const ContentContainer = styled.div`
    margin-left: -630px;
    margin-bottom: 150px;
  }
`;

export const ButtonContact = styled.button`
      background-color: #1A0289;
      margin-top: 20px;
      color: #fff;
      padding: 8px 17px;
      font-size: 31px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      letter-spacing: 1px;
      width: 350px;
      border-radius: 10px;
      border: none;
      text-shadow: #000 2px 2px 4px;
      align-items: center;
  }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #FFF;
  }
`;

