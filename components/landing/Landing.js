import styled from 'styled-components'
import Logo from '../../public/logocolor.svg'

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
                <NavUl>
                    <li>about</li>
                    <li>pricing</li>
                    <li>contact</li>
                </NavUl>
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
  width: 100 vw;
  height: 100vh;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
`;

const Content = styled.div`
  position: absolute;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
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
`;

const NavUl = styled.ul`
  position: absolute; 
  right: 0;
  top: 0;
  list-style: none;

  li {
    display: inline;
    color: white;
    padding: 0 40px;

    :hover {
      border-bottom: 1px solid white;
    }
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

`;