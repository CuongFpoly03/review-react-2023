import React from "react";
import Nav from "../components/nav";
import Footer from './footer'
import Header from './header'
const about = () => {
  return (
    <div>
      <Nav />
        <Header/>
      <h1>Đây là trang about</h1>
      <Footer/>
    </div>
  );
};

export default about;
