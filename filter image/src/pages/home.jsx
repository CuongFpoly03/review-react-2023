import { useState } from "react";
import Nav from "../components/nav";
import Header from "./header";
import Footer from "./footer";
const home = () => {

  return (

    <div>
      <Nav />
      <Header />
      <div>
        home
      </div>
      <Footer />
    </div>
  );
};

export default home;
