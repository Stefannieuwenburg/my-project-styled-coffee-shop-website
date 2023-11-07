import React, { Fragment } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
    background-color: var(--bg);
    min-height: 90vh;
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
const Price = styled.p`
    font-size: 1.2rem;
    margin: 0.2rem;
    color: var(--white);
    span {
        color: red;
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
    padding:1.2rem;
    margin: 1.2rem;
    background: var(--bg);
    text-align: center;
    border: 3px solid var(--main-color);
    border-radius: 20px;
    color: white;
`;
const Icons = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 1.9rem;
    margin:1.2rem;
    :hover {
    color: var(--main-color);
}
`;

const Stars = styled.div`
    color:yellow;
`;
const Button = styled.button`
    background-color: var(--bg);
    cursor: pointer;
    border: none;
    outline: none;
`;


const ProductPage = () => {
    const handleClickCart = (e) => {
         e.preventDefault(alert("add to cart"));
    }
    return (
        <Fragment>
            <ProductContainer id="Product">
                <PageTitle>
                    our <span>products</span>
                </PageTitle>
                <Boxes>
                    <Box>
                        <img
                            src={require("../assets/pictures/product-1.png")}
                            alt="i"
                        />
                        <Stars>
                            <BoxTitle>fresh coffee</BoxTitle>
                            <div class="Stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <Price>
                                <span>Sale</span> $15.99
                            </Price>
                            <Button onClick={handleClickCart}> <Icons 
                                className="fas fa-shopping-cart"
                            /></Button>
                        </Stars>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/product-2.png")}
                            alt="i"
                        />
                        <Stars>
                            <BoxTitle>fresh coffee</BoxTitle>
                            <div class="Stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <Price>
                                <span>Sale</span>$15.99
                            </Price>
                            <Button onClick={handleClickCart}> <Icons 
                                className="fas fa-shopping-cart"
                            /></Button>
                        </Stars>
                    </Box>

                    <Box>
                        <img
                            src={require("../assets/pictures/product-3.png")}
                            alt="i"
                        />
                        <Stars>
                            <BoxTitle>fresh coffee</BoxTitle>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <Price>
                                <span>Sale</span>$15.99
                            </Price>
                            <Button onClick={handleClickCart}> <Icons 
                                className="fas fa-shopping-cart"
                            /></Button>
                           
                        </Stars>
                    </Box>
                </Boxes>
            </ProductContainer>
        </Fragment>
    );
};
export default ProductPage;