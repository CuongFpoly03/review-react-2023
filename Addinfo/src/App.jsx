import { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] =useState('');
  const [hometwo, setHometwo] = useState('');

  const testName = (event) => {
    setName(event.target.value);
  };

  const testAge = (event) => {
    setAge(event.target.value);
  };

  const testHometwo = (event) => {
    setHometwo(event.target.value);
  };

  console.log(info)
  const clickmeInfo = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && age.trim() !== "" && hometwo.trim() !== "") {
      const id = info.length + 1;
      const infos = { id: id,name: name, age: age, hometwo: hometwo };
      setInfo([...info, infos]);
      setName("");
      setAge("");
      setHometwo("");
    } else {
      alert("vui lòng nhập thông tin cá nhân");
    }
  };

  const deleteInfo =(id) => {
      const deletes = info.filter((del) => del.id !== id);
      setInfo(deletes);
  }
  console.log(info);
  return (
    <div className="flex justify-between">
      <form action="" className="border-solid border-2">
        <h1 className="text-red-500 border-solid border-2 border-indigo-600 bg-lime-300 rounded-md p-3">
          Thêm thông tin cá nhân
        </h1>
        <div className="m-2.5">
          <input
            type="text"
            onChange={testName}
            value={name}
            className="w-80 text-sm p-3 border-solid border-2 border-indigo-600"
            placeholder="Họ tên"
          />
        </div>
        <div className="m-2.5">
          <input
            type="text"
            onChange={testAge}
            value={age}
            className="w-80 text-sm p-3 border-solid border-2 border-indigo-600"
            placeholder="Tuổi"
          />
        </div>
        <div className="m-2.5">
          <input
            type="text"
            onChange={testHometwo}
            value={hometwo}
            className="w-80 text-sm p-3 border-solid border-2 border-indigo-600"
            placeholder="Quê quán"
          />
        </div>
        <div>
          <button type="submit" onClick={clickmeInfo} className="bg-lime-200">
            ADD thông tin
          </button>
        </div>
      </form> <br></br>
      <div>
      <h1 className="text-red-500 border-solid border-2 border-indigo-600 bg-lime-300 rounded-md p-3">
          Danh sách thông tin
        </h1>
        <table className="table-fixed">
          <tr>
            <th>id</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Quê quán</th>
            <th>Action</th>
          </tr>
          {info.map((test) => (
            <tr key={test.id}>
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.age}</td>
              <td>{test.hometwo}</td>
              <td><button className="bg-red-600" onClick={() => deleteInfo(test.id)}>Xoá</button></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
