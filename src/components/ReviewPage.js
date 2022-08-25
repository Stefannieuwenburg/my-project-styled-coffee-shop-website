import React, { Fragment } from "react";
import styled from "styled-components";

const ReviewContainer = styled.div`
    background-color: var(--bg);
    min-height: 90vh;
    padding-top: 70px;
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

const BoxTitle = styled.h3`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: var(--white);
`;

const Boxes = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Box = styled.div`
    padding: 1.2rem;
    margin: 1.2rem;
    background: var(--bg);
    text-align: center;
    border: 3px solid var(--main-color);
    border-radius: 20px;
    color: white;
`;
const Paragraph = styled.p`
    margin: 1.2rem;
    background: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: white;
`;

const Stars = styled.div`
    color: yellow;
`;

const ReviewPage = () => {
    return (
        <Fragment>
            <ReviewContainer id="Review">
                <PageTitle>
                    customer's <span>review</span>
                </PageTitle>

                <Boxes>
                    <Box>
                        <img
                            src={require("../assets/pictures/quote-img.png")}
                            alt="i"
                        />
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi nulla sit libero nemo fuga sequi nobis?
                            Necessitatibus aut laborum, nisi quas eaque
                            laudantium consequuntur iste ex aliquam minus vel?
                            Nemo.
                        </Paragraph>
                        <img
                            src={require("../assets/pictures/pic-1.png")}
                            alt="i"
                        />
                        <BoxTitle>john jansen</BoxTitle>
                        <Stars>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </Stars>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/quote-img.png")}
                            alt="i"
                        />
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi nulla sit libero nemo fuga sequi nobis?
                            Necessitatibus aut laborum, nisi quas eaque
                            laudantium consequuntur iste ex aliquam minus vel?
                            Nemo.
                        </Paragraph>
                        <img
                            src={require("../assets/pictures/pic-2.png")}
                            alt="i"
                        />
                        <BoxTitle>jolin frank</BoxTitle>
                        <Stars>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </Stars>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/quote-img.png")}
                            alt="i"
                        />
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi nulla sit libero nemo fuga sequi nobis?
                            Necessitatibus aut laborum, nisi quas eaque
                            laudantium consequuntur iste ex aliquam minus vel?
                            Nemo.
                        </Paragraph>
                        <img
                            src={require("../assets/pictures/pic-3.png")}
                            alt="i"
                        />
                        <BoxTitle>Kees Klaas</BoxTitle>
                        <Stars>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </Stars>
                    </Box>
                </Boxes>
            </ReviewContainer>
        </Fragment>
    );
};
export default ReviewPage;