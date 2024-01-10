import { useState } from "react";
import Img1 from "./imgs/OIP.jpg";

import "./App.css";

function App() {
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);

  const tabMenu = () => {
    setMenu(!menu);
  };

  const tabSigup = () => {
    setLogin(!login);
  };

  const close= ()=> {
    setLogin(false)
  }

  return (
    <>
      <div className="container fluid">
        {menu && (
          <div className="border-dotted border-2 border-red-700 bg-blue-700 text-white">
            <div className="flex ">
              <img className="w-10 m-2" src={Img1} alt="" />
              <span className="ml-2 font-bold text-2xl">Profile my name</span>
            </div>
            <div className="text-left ml-16 ">
              <p className="">My info</p>
              <p className="">Contacts</p>
              <p>Logout</p>
            </div>
          </div>
        )}
        <div>
          <p
            onClick={tabMenu}
            className="border-solid border-2 border-red-700 p-3 rounded bg-red-700 text-white hover:bg-red-400 m-2 w-100%"
          >
            Menu
          </p>
          <p
            onClick={tabSigup}
            className="border-solid border-2 border-red-700 p-3 rounded bg-blue-700 text-white hover:bg-blue-400 w-85%"
          >
            Sigup
          </p>
        </div>
        {login && (
        <div className="bg-rgb-0-0-60 bg-rgba-0-0-0-10 left-0 top-0 z-10 w-100% h-100% fixed">
          <form
            action=""
            className="border-solid border-2 border-red-700 bg-orange-700"
          >
            <span onClick={close} className="font-bold text-white text-2xl float-right mr-4 mt-2 cursor-pointer hover:text-3xl">
              &times;
            </span>
            <h1 className="tex-center font-bold m-5 text-2xl text-white">
              Form Đăng Nhập
            </h1>
            <div>
              <label
                className="float-left ml-24 text-white font-bold"
                htmlFor=""
              >
                Username:{" "}
              </label>{" "}
              <br></br>
              <input
                type="text"
                placeholder="username"
                value=""
                onChange=""
                className="border-solid border-2 border-white p-2 m-5"
              />
            </div>
            <div>
              <label
                className="float-left ml-24 text-white font-bold"
                htmlFor=""
              >
                Password:{" "}
              </label>{" "}
              <br></br>
              <input
                type="password"
                placeholder="password"
                value=""
                onChange=""
                className="border-solid border-2 border-white p-2 m-5"
              />
            </div>
            <button className="m-5 border-solid border-2 text-white border-white bg-green-700 hover:bg-blue-700">
              Sign Up
            </button>
          </form>
        </div>
        )}
      </div>
    </>
  );
}

export default App;
