import React, { Fragment } from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <div>
            <section class="footer">
                <div class="share">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                </div>

                <div class="links">
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">menu</a>
                    <a href="#">products</a>
                    <a href="#">review</a>
                    <a href="#">contact</a>
                    <a href="#">blogs</a>
                </div>

                <div class="credit">
                    created by <span>Stefan Nieuwenburg</span> | all rights
                    reserved
                </div>
            </section>
        </div>
    );
};
