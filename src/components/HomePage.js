import React, { Fragment } from "react";
import styled from "styled-components";


import ImageHome from "../assets/pictures/home.jpg";


const Home = styled.div`
    background-image: url(${ImageHome});
    background-position: "center";
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;

`;
const HeaderTitle = styled.h2`
    background: none;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    margin: 1rem;
    margin-bottom: 20px;
    color: var(--main-color);
    font-size: 4rem;
    letter-spacing: 2px;
    span {
        color: #fff;
        text-transform: uppercase;
    }
`;

const Paragraph = styled.p`
    background: none;
    font-family: "Roboto", sans-serif;
    margin: 1.2rem;
    font-size: 1.2rem;
    padding: 0.2rem;
    color: white;
    span{
        color:red;
    }
`;

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    margin: 5.2rem;
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

const HeroPage = () => {
    return (
        <Fragment>
            <Home id="Home">
                <HeaderTitle>
                    fresh coffee in the <span>morning</span> 
                </HeaderTitle>
                <Paragraph>
                    Come to us for a morning coffee look at the site for some special deals we offer this week, 
                    <span> Sale!!</span>
                </Paragraph>
                <Button href="/#"> get yours now</Button>
            </Home>
        </Fragment>
    );
};
export default HeroPage;
