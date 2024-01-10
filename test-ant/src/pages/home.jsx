/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import Grid from '../components/Antd'
import Nav from '../components/nav'
import Search from '../components/Search'
import Product from './product'
const home = () => {
  const [data, setData] = useState([]);
  useEffect(
    function(){
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes`)
        .then((res) => res.json())
        .then((data)=> setData(data))
        .catch((err) => console.error("lỗi đường dẫn",err));
    },[]
  )
  console.log(data);
  return <div>
    <h1 className="border-2 border-solid border-red-700 bg-red-700 text-white rounded">xin chào mọi người tối test ant</h1>
    <Nav/>
    <Search></Search>
    {data.map((da) => {
    <Product
    key={1}
    name={da.name}
    price ={da.price}
    description={da.description}
    />
  })}
    <Grid></Grid>
  </div>;
};

export default home;
