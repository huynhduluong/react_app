import React, { Component } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList/>
        <Footer />
      </div>
    );
  }
}
