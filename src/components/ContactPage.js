import React, { Fragment } from "react";
import styled from "styled-components";

import ImgKoff from "../assets/pictures/ImgKoff.jpg"

const ContactContainer = styled.div`
    min-height: 100vh;
    background-image: url(${ImgKoff});
    background-image:'no-repeat';
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ImageContainer = styled.div`
    border: 3px solid var(--main-color);
    border-radius: 20px;
`;
const Wrapper = styled.div`
    margin: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 1%;
    min-width:1%;
    border: 3px solid var(--main-color);
    border-radius: 20px;
`;

const HeaderTitle = styled.h2`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: var(--main-color);
    font-size: 4rem;
    letter-spacing: 2px;
    border-radius: 20px;
    span {
        color: #fff;
        text-transform: uppercase;
        border-radius: 20px;
    }
`;
const WrapperForm = styled.div`
     letter-spacing: 0.2rem;
`;

const InputBox = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    padding: 1.2rem;
    color: white;
    span {
        color: var(--gray);
    }
    input{
         padding: 0.4rem;
         color: var(--white);
         border-radius: 20px;
    }
`;
const BoxTitle = styled.h3`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    const handleSubmit = (e) => {
        e.preventDefault(alert("Thank you for contacting us"));
    }
    return (
        <Fragment>
            <ContactContainer id="Contact">
                <HeaderTitle>
                    {" "}
                    <span>contact</span> us{" "}
                </HeaderTitle>
                <ImageContainer>
                <Wrapper>
                        <WrapperForm>
                            <BoxTitle>Get in touch</BoxTitle>
                            <InputBox>
                                <span>Name: </span>
                                <input type="text" placeholder="Name" />
                            </InputBox>
                            <InputBox>
                                <span >Email: </span>
                                <input type="email" placeholder="Email" />
                            </InputBox>
                            <InputBox>
                                <span >Phone:</span>
                                <input type="number" placeholder="Phone Number" />
                            </InputBox>
                        <Button onClick={handleSubmit} input type="submit" value="contact now">
                                submit
                            </Button>
                        </WrapperForm>
                   
                </Wrapper>
                </ImageContainer>
            </ContactContainer>
        </Fragment>
    );
};
export default ContactPage;