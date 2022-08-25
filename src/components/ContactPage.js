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
    margin: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const IframeBox = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const Action = styled.div`
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
                    <IframeBox>
                        <iframe
                            class="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </IframeBox>

                    <Action>
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
                    </Action>
                </Wrapper>
            </ContactContainer>
        </Fragment>
    );
};
export default ContactPage;