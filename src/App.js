import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import MenuPage from "./components/MenuPage"
import ProductPage from "./components/ProductPage"
import ReviewPage from "./components/ReviewPage"
import Blogs from "./components/Blogs"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"
const App = () =>{
    return (
      <Fragment>
          <GlobalStyle />
          <Navbar />
          <Home />
          <AboutPage />
          <MenuPage />
          <ProductPage />
          <ReviewPage />
          <ContactPage />
        <Blogs /> 
        <Footer />
        </Fragment>
    );
}

export default App;
