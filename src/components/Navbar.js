import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import ImageLogo from "../assets/logo/coffee-logo.png"


const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: sticky;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`;

const Logo = styled.a`
    img {
        height: 5rem;
        width: 5rem;
        object-fit: cover;
        border-radius: 50px;
    }
`;

const MenuLink = styled.a`
    border: 0.1px solid black;
    border-radius: 1rem;
    padding: 0.2rem 3.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    text-align: center;
    color: var(--white);
    transition: all 0.5s ease-in;
    font-size: 1rem;
    &:hover {
        letter-spacing: 0.2rem;
        color: var(--main-color);
        background-color: var(--gray);
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Nav>
                <Logo href="#Home">
                    <img src={ImageLogo} alt="logo" />
                </Logo>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu
                        style={{ color: "var(--main-color)", fontSize: "30px" }}
                    />
                </Hamburger>
                <GiShoppingCart
                    href="./#"
                    style={{ color: "var(--main-color)", fontSize: "30px" }}
                />
                <Menu isOpen={isOpen}>
                    <MenuLink href="#Home">Home</MenuLink>
                    <MenuLink href="#About">About</MenuLink>
                    <MenuLink href="#Menu">Menu</MenuLink>
                    <MenuLink href="#Product">Product</MenuLink>
                    <MenuLink href="#Review">Review</MenuLink>
                    <MenuLink href="#Contact">Contact</MenuLink>
                    <MenuLink href="#Blogs">Blogs</MenuLink>
                </Menu>
            </Nav>
        </Fragment>
    );
};

export default Navbar;


