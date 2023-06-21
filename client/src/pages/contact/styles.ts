import styled from 'styled-components';


export const ContactContainer = styled.div`
    background-image: url(${(props) => props.theme.backgroundImageContact.background});
    background-size: cover;
    height: 900px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
    color: #1A0289;
    font-weight: 400;
    margin-top: 255px;
    margin-bottom: 215px;

    /* Responsividade Contact */
    @media (min-width: 1500px) {
      margin-top: 95px;
    }

    @media (min-width: 880px) and (max-width: 1080px){
      margin-top: 135px;
    }
  }
`;

export const Content = styled.h1`
    color: #FFF;
    font-size: 64px;
    text-shadow: #000 1px 1px 2px;

    /* Responsividade Contact */
    @media (min-width: 1150px) and (max-width: 1250px){
      font-size: 54px;
    }

    @media (min-width: 1000px) and (max-width: 1150px){
      font-size: 44px;
    }

    @media (min-width: 760px) and (max-width: 1000px){
      font-size: 40px;
    }
  }
`;

export const ContentContainer = styled.div`
    margin-left: -630px;

    /* Responsividade Contact */
    @media (min-width: 1500px){
      margin-left: -860px;
    }

    @media (min-width: 1000px) and (max-width: 1150px){
      margin-left: -550px;
    }

    @media (min-width: 760px) and (max-width: 1000px){
      margin-left: -380px;
    }
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
      align-items: center;

      /* Responsividade Contact */
      @media (min-width: 880px) and (max-width: 1080px){
        width: 230px;
        font-size: 18px;
      }
  }
`;

export const AdjustImage = styled.img`
    /* Responsividade Contact */
    @media (min-width: 880px) and (max-width: 1080px){
      height: 31px;
      margin-top: 3px;
    }
  }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #FFF;
  }
`;

export const AdjustButton = styled.div`
    float: right;
    margin-top: 9px;
  }
`;

export const ContainerFooter = styled.div`
    margin-top: 290px;
    width: 100%;

    /* Responsividade Contact */
    @media (min-width: 880px) and (max-width: 1080px){
      margin-top: 200px;
    }
  }
`;