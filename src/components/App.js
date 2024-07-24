
import React, { useState } from "react";
import axios from "axios"
import './../styles/App.css';
import "regenerator-runtime/runtime";
import TableBody from "./TableBody";
import UserTable from "./UserTable";
import Header from "./Header";
const App = () => {
  const [output,setOutput] = useState([]);
  const api ='https://reqres.in/api/users';

  const dataFetch = async()=>{
    try{
      const response = await axios(api);
      console.log(response.data.data);// Use response.data.data to access user data
      setOutput(response.data.data);
      console.log("output: ",output)
    }catch(error){
      console.error("Error fetching data: ",error);
    }
  }

  return (
    <div className="main">
      <Header onFetchData={dataFetch} />
      <UserTable users={output} />
    </div>
  )
}

export default App
