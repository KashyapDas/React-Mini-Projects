import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {

  const [data, setData] = useState([]);

  const loadData = (elemObj) =>{
    setData([...data,elemObj])
  }

  const removeElem = (removeIndex) =>{
    setData(prevData=>prevData.filter((item,currIndex)=> currIndex!=removeIndex))
  }

  return (
    <div className="w-full h-screen bg-slate-200">
      <Cards data={data} removeElem={removeElem} />
      <Form loadData={loadData} />
    </div>
  );
}

export default App;
