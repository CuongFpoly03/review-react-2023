import { useState } from "react";
import "./App.css"

function App() {
  const [formData, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [validateform, setValidateform] = useState({
    username: false,
    email: false,
    password: false,
    confirmpassword: false,
  });

  const submitForm = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.confirmpassword]: e.target.value,
    });
  };

  const submitForms = (e) => {
    e.preventDefault();

    let updateValidate = { ...validateform };
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        updateValidate[key] = true;
      } else {
        updateValidate[key] = false;
      }
    });
    setValidateform(updateValidate);
  };
  console.log("Độ dài của username:", validateform.username);
  console.log("log ra Object ", formData);
  return (
    <>
      <form
        action=""
        className="border-solid border-2 border-red-200 w-96 h-full"
        onSubmit={submitForms}
      >
        <legend className=" m-6 text-base border-solid border-2  border-white-700 bg-red-600 text-white p-2 rounded">
          FORM ĐĂNG KÝ
        </legend>
        <div>
          <label
            className=" float-left ml-7 m-3 font-bold text-base"
            htmlFor=""
          >
            Tên đăng nhập:
          </label>
          <br></br>
          <input
            className={`border-solid border-2 border-red-500 p-2 w-80 rounded ${validateform.username ? 'bg-red-700' : 'bg-green-700 text-white'}`}
            placeholder="name"
            type="text"
            name="username"
            value={formData.username}
            id=""
            onChange={submitForm}
          />
         {
          validateform.username && (
            <p className="text-red-700 font-bold">Tên đăng nhập không được để trống</p>
          )
         }
          
        </div>
        
        <div>
          <label className="font-bold float-left ml-7 m-3" htmlFor="">
            Email:
          </label>
          <br></br>
          <input
            className={`border-solid border-2 border-red-500 p-2 w-80 rounded ${validateform.email ? "bg-red-700" : "bg-green-700"}`}
            placeholder="email"
            type="email"
            value={formData.email}
            name="email"
            onChange={submitForm}
            id=""
          />
          {
            validateform.email && (
              <p className="text-red-700 font-bold">Vui lòng nhập email</p>
            )
            
          }
        </div>
        <div>
          <label className="font-bold float-left ml-7 m-3" htmlFor="">
            Password:
          </label>
          <br></br>
          <input
            className={`border-solid border-2 border-red-500 p-2 w-80 rounded ${validateform.password? "bg-red-700" : "bg-green-700"}`}
            type="password"
            name="password"
            value={formData.password}
            onChange={submitForm}
            placeholder="pass"
            id=""
          />
          {
            validateform.password && (
              <p className="text-red-700 font-bold">Vui lòng nhập password</p>
            )
          }
        </div>
        <div>
          <label className="font-bold float-left ml-7 m-3" htmlFor="">
            Confirm password:
          </label>
          <br></br>
          <input
            className={`border-solid border-2 border-red-500 p-2 w-80 rounded  ${validateform.confirmpassword ? "bg-red-700" : "bg-green-700"}`}
            type="password"
            placeholder="con pass"
            name="confirmpassword"
            id=""
            value={formData.confirmpassword}
            onClick={submitForm}
          />
          {
            validateform.confirmpassword && (
              <p className="font-bold text-red-700">Vui lòng nhập lại mật khẩu</p>
            )
          }
        </div>
        <div>
          <button
            type="submit"
            className="border-solid border- border-blue-700 bg-blue-700 text-white p-2 m-3"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
