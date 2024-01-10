import { useState } from "react";

import "./App.css";

function App() {
  const [select, setSelect] = useState({
    name: "",
    price: 0,
  });
  const [seats, setSeats] = useState(new Array(12).fill(false));
  const [total, setTotal] = useState(0);

  const movies = [
    { name: "Người anh hùng", price: 10 },
    { name: "Thợ săn giày", price: 8 },
    { name: "Vẽ lên cuộc đời", price: 5 },
    { name: "Nói là làm", price: 68 },
  ];
  const clickSelect = (event) => {
    const selects = movies.find((movie) => movie.name === event.target.value);
    setSelect(selects);
    setTotal(0);
    setSeats(new Array(12).fill(false));
  };

  const clickSeats = (index) => {
    const clicksear = [...seats]
    clicksear[index] = !clicksear[index]

    const price = select.price
    let selectSeart = clicksear.filter(seat => seat).length
    
    const newpriceToltal = price * selectSeart
    setSeats(clicksear)
    setTotal(newpriceToltal)
  };

  return (
    <>
      <div>
        <form action="">
          <span className="text-white">Chọn loại phim:</span>
          <select name="" id="" className="rounded" onClick={clickSelect}>
          {movies.map((movie, index) => (
            <option key={index} value={movie.name}>
              {movie.name}(${movie.price})
            </option>
            ))} 
          </select>
        </form>
      </div>

      <div className="mt-5">
        <span>🟦 N/A</span>
        <span className="mr-5 ml-5">🟩 Chọn</span>
      </div>

      <div>
        <div className="bg-white w-60 h-28 ml-8 mt-10"></div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
      {seats.map((seat, index) => (
        <div
          key={index}
          onClick={() => clickSeats(index)}
          className={`border bg-blue-800 text-white ${
            seat ? "bg-green-500" : "bg-blue-800"
          }`}
        >
          {index + 1}
        </div>
        ))}
      </div>

      <div>
        <p className="text-white mt-16">
          Bạn đã chọn{''} <span>{seats.filter(seat=>seat).length}</span> ghế với giá là <span>${total}</span>
        </p>
      </div>
    </>
  );
}

export default App;
