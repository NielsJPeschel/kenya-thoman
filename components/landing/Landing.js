import styled from 'styled-components'
import Logo from '../../public/logocolor.svg';
import {Nav} from '../nav';

export const Landing = () => {
    return (
        <Container>
            <video 
            src={require('../../public/video.mp4')} 
            autoPlay = {true}
            loop = {true}
            muted = {true}
            />
            <Overlay>
                <Content>
                <LogoContainer>
                    <Logo />
                    <h3>Kenya Thoman</h3>
                    <h4>freelance drone pilot</h4>
                </LogoContainer>
                <NavWrapper>
                  <Nav />
                </NavWrapper>
                <Tagline>
                    <h2>Your favorite views</h2>
                    <h1>From a <span>new</span><br />perspective</h1>
                </Tagline>
                </Content>
            </Overlay>
        </Container>
    );
}

const Container = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 900px) {
    height: 70vh;
  }

`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
`;

const Content = styled.div`
  position: absolute;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;

  @media only screen and (max-width: 900px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  
`;


const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 15%; */
  color: white;
  svg{
    width: 15vw;
  }
  h3 {
    color: inherit;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 2rem;
  }
  h4 {
    color: inherit;
    font-size: 0.9rem;
    text-transform: lowercase;
    letter-spacing: 0.7rem;
    line-height: 2rem;
  }

  @media only screen and (max-width: 900px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;


    svg {
      width: 60vw;
      margin-bottom: 10px;

    }

    h3 {
      line-height: 0.7rem;
      font-size: 1.7rem;
      margin-bottom: 10px;

    }
    h4 {
      line-height: 1rem;
      font-size: 0.7rem;
      letter-spacing: 0.4rem;
      white-space: nowrap;

    }
  }
`;

const NavWrapper = styled.div`
  position: absolute; 
  right: 0;
  top: 0;
  
  @media only screen and (max-width: 900px) {

    text-align: center;
    top: 15px;
    left: 0;
  }
`;


const Tagline = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  text-transform: uppercase;
  text-align: right;
  
  h2 {
    font-size: 1.25rem;
    letter-spacing: 1rem;
  }
  h1{
    font-size: 5rem;
    letter-spacing: 1rem;
  }
  span {
    color: #E29700;
  }
  
  @media only screen and (max-width: 900px) {
    display: none;
  }

`;