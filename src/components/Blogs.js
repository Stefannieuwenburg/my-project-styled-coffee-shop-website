import React, { Fragment } from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
    background-color: var(--bg);
    min-height: 100vh;
    padding-top: 80px;
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
const TitleGold = styled.h3`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: gold;
`;

const Button = styled.button`
    font-family: "Roboto", sans-serif;
    margin: 1.2rem;
    padding: 0.5rem 1rem;
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
        color: var(--bg);
        transition: 0.6s;
    }
`;

const Boxes = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Box = styled.div`
    margin: 1.5rem;
    background: var(--bg);
    text-align: center;
    border: 3px solid var(--main-color);
    border-radius: 20px;
    color: white;
`;
const Paragraph = styled.p`
    margin: 1.5rem;
    background: none;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: white;
`;

const Blogs = () => {
    return (
        <Fragment>
            <BlogContainer id="Blogs">
                <PageTitle>
                    {" "}
                    our <span>blogs</span>
                </PageTitle>

                <Boxes>
                    <Box>
                        <img
                            src={require("../assets/pictures/blog-1.jpg")}
                            alt="i"
                        />

                        <BoxTitle href="/#">
                            tasty and refreshing coffee
                        </BoxTitle>
                        <TitleGold>by admin / 21st may, 2021</TitleGold>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non, dicta.
                        </Paragraph>
                        <Button href="/#">read more</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/blog-2.jpg")}
                            alt="i"
                        />
                        <BoxTitle href="/#">
                            tasty and refreshing coffee
                        </BoxTitle>
                        <TitleGold>by admin / 21st may, 2021</TitleGold>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non, dicta.
                        </Paragraph>
                        <Button href="/#">read more</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/blog-3.jpg")}
                            alt="i"
                        />
                        <BoxTitle href="/#">
                            tasty and refreshing coffee
                        </BoxTitle>
                        <TitleGold>by admin / 21st may, 2021</TitleGold>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non, dicta.
                        </Paragraph>
                        <Button href="/#">read more</Button>
                    </Box>
                </Boxes>
            </BlogContainer>
        </Fragment>
    );
};
export default Blogs;