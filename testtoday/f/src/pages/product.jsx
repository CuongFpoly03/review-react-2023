import React from "react";
import Footer from "./footer";
import Header from "./header";
import Nav from "../components/nav";
import img from "../assets/348-536x354.jpg"
const product = () => {
  return (
    <div>
      <Nav />
      <Header />
      <p className="text-3xl">product</p>
      <div className="columns-5">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default product;
