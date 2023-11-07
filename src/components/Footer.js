import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import {Paragraph} from '../GlobalStyle';

const FlexHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.2rem;
    padding: 0.2rem;
    background-color: var(--bg);
`;	
const HeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: var(--main-color);
    font-size: 4rem;
    letter-spacing: 2px;
    background-color: var(--bg);
    span {
        color: #fff;
        text-transform: uppercase;
    }
`;

const FooterContainer = styled.div`
    background-color: var(--bg);
    padding-top: 0.2rem;
`;
const ParagraphStyled = styled.p`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: var(--Grey);
`;
const FlexFooter = styled.div`
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
const BoxFooter = styled.div`
    margin: 1.2rem;
    background: var(--bg);
    text-align: center;
    border: 3px solid var(--main-color);
    border-radius: 20px;
    color: white;
    background-color: var(--bg);
`;

const Footer = () => {
    return (
        <Fragment>
            <FlexHeader>
                <HeaderTitle>
                    <span>info </span>contact
                </HeaderTitle>
            </FlexHeader>
            <BoxFooter>
                <FooterContainer id="Info">
                <FlexFooter>
                    <a href="https://www.facebook.com/stefan.nieuwenburg.35/?locale=nl_NL">
                        <FaFacebook style={{ height: '30px', width: '30px', color: "#d3ad7f"}} />
                        Facebook
                    </a>
                    <a href="https://www.linkedin.com/in/stefan-nieuwenburg/" ><FaLinkedin style={{ height: '30px', width: '30px', color: '#d3ad7f' }} />
                        Linkedin
                    </a>
                    <a href="https://github.com/Stefannieuwenburg" >
                        <FaGithub style={{ height: '30px', width: '30px',color: '#d3ad7f' }} />
                        GitHub
                    </a>
                </FlexFooter>
                <FlexParagraph>
                    <Paragraph>
                            Created by
                            <ParagraphStyled>
                                Stefan Nieuwenburg
                            </ParagraphStyled>
                    </Paragraph> 
                </FlexParagraph>
                </FooterContainer>
            </BoxFooter>
        </Fragment>
    );
};
export default Footer;