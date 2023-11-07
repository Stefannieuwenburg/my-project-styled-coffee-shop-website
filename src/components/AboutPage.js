import React, { Fragment } from "react";
import styled from "styled-components";

import AboutImage from "../assets/pictures/ImgKoff.jpg";

const AboutContainer = styled.div`
    min-height: 100vh;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const AboutSection = styled.div`
    min-height: 60vh;
    background-image: url(${AboutImage});
    background-image:'no-repeat';
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const PageTitle = styled.h2`
    font-family: "Roboto", sans-serif;
    color: #fff;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 1.2rem;
    font-size: 4rem;
    span {
        color: var(--main-color);
        text-transform: uppercase;
    }
`;
const Paragraph = styled.p`
    margin: 1.5rem;
    background: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: white;
`;

const HeaderTitle = styled.h3`
    background: none;
    font-family: "Roboto", sans-serif;
    margin: 1.5rem;
    margin-bottom: 20px;
    color: var(--main-color);
    font-size: 3.1rem;
    letter-spacing: 2px;
`;
const Button = styled.button`
    font-family: "Roboto", sans-serif;
    margin: 4.2rem;
    padding: 0.9rem 3rem;
    background-color: var(--main-color);
    color: var(--white);
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: 0.6s;
    &:hover {
        letter-spacing: 0.2rem;
        color: var(--black);
        transition: 0.6s;
    }
`;



const AboutPage = () => {
    const onclickAbout = () => {
        window.location.href = "#Blogs";
    }
    return (
        <Fragment>
            <AboutContainer id="About">
                <PageTitle>
                    <span>about</span> us
                </PageTitle>

                <AboutSection>
                        <HeaderTitle>what makes our coffee special?</HeaderTitle>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus qui ea ullam, enim tempora ipsum
                            fuga alias quae ratione a officiis id temporibus
                            autem? Quod nemo facilis cupiditate.
                        </Paragraph>
                        <Button onClick={onclickAbout}>
                            learn more
                        </Button>
                </AboutSection>
            </AboutContainer>
        </Fragment>
    );
};
export default AboutPage;