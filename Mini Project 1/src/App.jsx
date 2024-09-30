import React, { useState } from "react";

function App() {
  const [data, setData] = useState([
    { name: "Kashyap Das", age: 21, location: "Assam" },
    { name: "Prachi Kapoor", age: 32, location: "Karnataka" },
    { name: "Harsh Sharma", age: 19, location: "Chennai" },
    { name: "Sarthak Baishya", age: 28, location: "Mumbai" },
    { name: "Saif Alam", age: 45, location: "Delhi" },
  ]);

  let [inputData, setInputData] = useState("");
  let [fetchGender, setGender] = useState("");
  let [updateAge, setAge] = useState(-1);


  const btnHandle = ()=>{
    setData(data.map(elem=>elem.name == inputData ? {...elem,age:updateAge,Gender : `${(fetchGender=== "Male" || fetchGender=== "Female") ? fetchGender : ""}`} : elem))
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll bg-slate-300">
      <div className="cards w-full h-1/2 bg-blue-300 flex items-center justify-center gap-x-5">

        {data.map((elem, index) => (
          <div key={index} className="card w-80 h-80 bg-slate-300 rounded-lg flex flex-col items-center justify-top p-2">
            <h1 className="font-mono text-xl">Name : {elem.name}</h1>
            <h2 className={`font-mono text-xl ${elem.age<=0 ? "hidden" : "block"}`}>Age : {elem.age}</h2>
            <h2 className="font-mono text-xl">Loaction : {elem.location}</h2>
            <h3
              className={`font-mono text-xl ${
                (elem.hasOwnProperty("Gender") && elem.Gender) ? "block" : "hidden"
              }`}
            >
              Gender : {elem.Gender}
            </h3>
          </div>
        ))}
      </div>

      <div className="user-input w-full h-1/2 bg-violet-400 flex items-center justify-center">
        <input
          onChange={() =>
            setInputData(() => document.querySelector(".inputVal").value)
          }
          type="text"
          placeholder="Enter the name"
          className="text-black inputVal p-2 text-lg w-80 outline-none rounded-l-lg"
        />
        <button
          onClick={()=>(
            btnHandle()
          )}
          className="bg-white p-2 text-lg rounded-r-lg font-mono"
        >
          Update
        </button><br/>
        <input
          onChange={()=>setGender(document.querySelector(".genderType").value)}
          type="text"
          placeholder="Enter the gender type"
          className="text-black inputVal p-2 text-lg w-80 outline-none rounded-lg ml-3 genderType"
        />
        <input
          onChange={()=>setAge(Number(document.querySelector(".ageUpdate").value))}
          type="text"
          placeholder="Enter Age for updation"
          className="text-black inputVal p-2 text-lg w-80 outline-none rounded-lg ml-3 ageUpdate"
        />
      </div>
    </div>
  );
}

export default App;
