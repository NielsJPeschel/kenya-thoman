import styled from 'styled-components';

export const Nav = () => {

    return (
        <Wrapper>
            <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>pricing</li>
                    <li>contact</li>
            </ul>
        </Wrapper>
    )
}



const Wrapper = styled.nav`
    ul {
        list-style: none;
        
        li {
            display: inline;
            color: white;
            padding: 0 40px;

            :hover {
                border-bottom: 1px solid white;
            }
        }
    }
    

    


    @media only screen and (max-width: 900px) {
        width: 100vw;
        ul {
            font-size: 0.8rem;

            li {
                padding: 0 20px
            }
        }

    }
`;