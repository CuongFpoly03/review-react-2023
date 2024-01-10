import { useState } from "react";
import Nav from "../components/nav";
import Header from "./header";
import Footer from "./footer";
const home = () => {
    const [values, setValues] = useState('0');
    const numberClick = (value) => {
        if(values=== "0"){
            setValues(value);
        }else {
            setValues(values + value);
        }
    }

    const characterClick = (charactor) => {
        if(charactor === '%'){
            const percentValue = parseFloat(values)/100;
            setValues(percentValue.toString());
        }else {
            setValues(values + " " + charactor + " ");
        }
    }
    
    const dotsClick= () => {
        if(!values.includes(".")){
            setValues(values + ".");
        }
    };

    const equaClick =() => {
        try {
            if(!values.trim()){
                setValues('0');
            }else {
                const result = eval(values);
                setValues(result.toString());
            }
        }catch (error){
            setValues('Error');
        }
    }
    const clearClick= ()=> {
        setValues('0');
    }
    const deleteClick =() => {
        setValues(values.slice(0, -1));
    }





  return (

    <div>
      <Nav />
      <Header />
      <div>
        <div className="border-solid border-2 border-white bg-current p-8">
          <span className="text-white">{values}</span>
        </div>
        <div className="columns-4 ...">
          <div>
            <div
              className="border-solid border-2 border-white bg-red-800 text-white font-bold "
            onClick= {()=> clearClick()}
            >
              AC
            </div>
            <div
              className="border-solid border-2 border-white bg-red-800 text-white font-bold "
            onClick= {()=> deleteClick()}
            >
              DEL
            </div>
            <div
              className="border-solid border-2 border-white bg-red-800 text-white font-bold "
            onClick= {()=> dotsClick()}
            >
              .
            </div>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number) => (
              <div
                key={number}
                className="border-solid border-2 border-white bg-red-800 text-white font-bold "
                onClick={() => numberClick(number.toString())}
              >
                {number}
              </div>
            ))}
          </div>
          <div>
            {["+", "-", "*", "/", "%", "="].map((character) => (
              <div
                key={character}
                className="border-solid border-2 border-white bg-orange-800 text-white font-bold"
                onClick={() => {
                  if (character === "=") {
                    equaClick();
                  } else {
                    characterClick(character);
                  }
                }}
              >
                {character}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
