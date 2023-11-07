import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import {Paragraph} from '../GlobalStyle';


const FooterContainer = styled.div`
    background-color: var(--bg);
    padding-top: 0.2rem;
`;
const ParagraphStyled = styled.p`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: var(--Grey);
`;
const FooterFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin: 0.2rem;
    padding: 0.2rem;
    a {
        color: white;
        text-decoration: none;
        margin: 0.2rem;
        padding: 1.2rem;
        
    }
`;
const FlexParagraph = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0.2rem;
    padding: 0.2rem;
`;

const Footer = () => {
    return (
        <Fragment>
            <FooterContainer id="Info">
                <FooterFlex>
                    <a href="https://www.facebook.com/stefan.nieuwenburg.35/?locale=nl_NL">
                        <FaFacebook style={{ height: '40px', width: '40px', color: 'blue' }} />
                        Facebook
                    </a>
                    <a href="https://www.linkedin.com/in/stefan-nieuwenburg/" ><FaLinkedin style={{ height: '40px', width: '40px', color: 'purple' }} />
                        Linkedin
                    </a>
                    <a href="https://github.com/Stefannieuwenburg" >
                        <FaGithub style={{ height: '40px', width: '40px',color: 'green' }} />
                        GitHub
                    </a>
                </FooterFlex>
                <FlexParagraph>
                    <Paragraph>
                    created by <ParagraphStyled> Stefan Nieuwenburg </ParagraphStyled> | all rights reserved
                    </Paragraph> 
                </FlexParagraph>
            </FooterContainer>
        </Fragment>
    );
};
export default Footer;