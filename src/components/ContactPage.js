import React, { Fragment } from "react";
import styled from "styled-components";

import ImgKoff from "../assets/pictures/ImgKoff.jpg"

const ContactContainer = styled.div`
    background-image: url(${ImgKoff});
    background-position: "center";
    min-height: 100vh;
    padding:5.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    border-radius: 20px;
    margin: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



const HeaderTitle = styled.h2`
    background: none;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: var(--main-color);
    font-size: 4rem;
    letter-spacing: 2px;
    span {
        color: #fff;
        text-transform: uppercase;
    }
`;

const InputBox = styled.p`
    background: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    padding: 1.2rem;
    color: white;
    span {
        color: var(--main-color);
    }
`;
const BoxTitle = styled.h3`
    font-family: "Roboto", sans-serif;
    font-size: 2.2rem;
    margin: 1.2rem;
    color: var(--main-color);
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

const ContactPage = () => {
    return (
        <Fragment>
            <ContactContainer id="Contact">
                <HeaderTitle>
                    {" "}
                    <span>contact</span> us{" "}
                </HeaderTitle>

                <Wrapper>
                    
                        <form>
                            <BoxTitle>get in touch</BoxTitle>
                            <InputBox>
                                <span>Name: </span>
                                <input type="text" placeholder="name" />
                            </InputBox>
                            <InputBox>
                                <span >email: </span>
                                <input type="email" placeholder="email" />
                            </InputBox>
                            <InputBox>
                                <span >Phone:</span>
                                <input type="number" placeholder="number" />
                            </InputBox>
                            <Button input type="submit" value="contact now">
                                submit
                            </Button>
                        </form>
                   
                </Wrapper>
            </ContactContainer>
        </Fragment>
    );
};
export default ContactPage;