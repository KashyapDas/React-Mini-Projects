import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Music from "./Components/Music";

const App = () => {

  const rawData = [
    {image:"https://i.pinimg.com/564x/c1/10/b4/c110b498d2da9d5d8d85f1b8d7a65301.jpg", song: "The legend of speed", artist: "Amman", added: false},
    {image:"https://i.pinimg.com/564x/2f/51/dd/2f51dd8839127a48dbe3ed5addc18719.jpg", song: "Vecteezy backwater", artist: "Rohit Negi", added: false},
    {image:"https://i.pinimg.com/564x/65/cc/f8/65ccf86e994f922a5462d879f8b7560d.jpg", song: "Time for trip", artist: "InStyle", added: false},
    {image:"https://i.pinimg.com/564x/c6/90/4d/c6904de267778a2864debb5e4b41d85e.jpg", song: "Homies Down", artist: "Nigga Tig", added: false},
    {image:"https://i.pinimg.com/564x/76/f1/00/76f1004591f725f8faa780407e810bf5.jpg", song: "Lips on you", artist: "NaX Lao", added: false},
    {image:"https://i.pinimg.com/564x/e0/44/aa/e044aa43fd62225158cab78531923fa6.jpg", song: "Summer Lips", artist: "Pnaxi Horer", added: false},
    {image:"https://i.pinimg.com/736x/3a/fe/0e/3afe0e53c99f686d12dede26f46d51f5.jpg", song: "I got You", artist: "Lil Tigga", added: false},
    {image:"https://i.pinimg.com/736x/32/1f/aa/321faa9aa68a954809ddb3a78c2ee844.jpg", song: "God's Time", artist: "Red Wax Gove", added: false},
  ]

  const [data, setData] = useState(rawData);

  const handleClick = (cardIndex)=>{
    setData((prevData)=>prevData.map((elem,currIndex)=>{
        if(currIndex === cardIndex)
        {
            return {...elem, added : !elem.added};
        }
        return elem;
    }))
  }

  return (
    <div className="bg-slate-300 w-screen h-screen overflow-x-hidden relative">
      <Navbar data={data} />
      <div className="music w-full h-fit px-4 mt-6 flex items-start justify-start flex-wrap gap-x-10 gap-y-8 ">
        {data.map((items,index)=>(
            <Music data={items} key={index} index={index} handleClick={handleClick}/>
        ))}
      </div>
    </div>
  );
};

export default App;
