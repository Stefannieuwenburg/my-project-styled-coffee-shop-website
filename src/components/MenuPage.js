import React, { Fragment } from "react";
import styled from "styled-components";


const MenuContainer = styled.div`
    background-color: var(--bg);
    min-height: 100vh;
    padding-top:80px;
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
const Price = styled.p`
    font-size: 1.2rem;
    margin: 0.2rem;
    color: var(--white);
`;
const BoxTitle = styled.h3`
    font-size: 1.2rem;
    margin: 1.2rem;
    color: var(--white);
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

const GridBox = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Box = styled.div`
    margin: 1.2rem;
    background: var(--bg);
    text-align: center;
    border: 3px solid var(--main-color);
    border-radius: 20px;
    color: white;
`;

const MenuPage = () => {
    const handleClickCart = (e) => {
         e.preventDefault(alert("add to cart"));
    }
    return (
        <Fragment>
            <MenuContainer id="Menu">
                <PageTitle>
                    our <span>menu</span>
                </PageTitle>

                <GridBox>
                    <Box>
                        <img
                            src={require("../assets/pictures/menu-1.png")}
                            alt="i"
                        />
                        <BoxTitle>tasty and healty</BoxTitle>
                        <Price>
                            $3.99 
                        </Price>
                        <Button onclick={handleClickCart}>add to cart</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/menu-2.png")}
                            alt="i"
                        />
                        <BoxTitle>tasty and healty</BoxTitle>
                        <Price>
                            $3.99 
                        </Price>
                        <Button onClick={handleClickCart}>add to cart</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/menu-3.png")}
                            alt="i"
                        />
                        <BoxTitle>tasty and healty</BoxTitle>
                        <Price>
                            $2.99 
                        </Price>
                        <Button onClick={handleClickCart}>add to cart</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/menu-4.png")}
                            alt="i"
                        />
                        <BoxTitle>tasty and healty</BoxTitle>
                        <Price>
                            $2.99 
                        </Price>
                        <Button onClick={handleClickCart}> add to cart</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/menu-5.png")}
                            alt="i"
                        />
                        <BoxTitle>tasty and healty</BoxTitle>
                        <Price>
                            $2.99 
                        </Price>
                        <Button onClick={handleClickCart}>add to cart</Button>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/menu-6.png")}
                            alt="i"
                        />
                        <BoxTitle>tasty and healty</BoxTitle>
                        <Price>
                            $3.99 
                        </Price>
                        <Button onClick={handleClickCart}>add to cart</Button>
                    </Box>
                </GridBox>
            </MenuContainer>
        </Fragment>
    );
};
export default MenuPage;