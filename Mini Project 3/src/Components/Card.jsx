import React from "react";
import style from "./regular.module.css";

function Card({items,index,removeElem}) {
  return (
    <div className="h-56 w-60 bg-yellow-300 rounded-md flex flex-col items-center leading-none">
      <div className="image h-20 w-20 rounded-full">
        <img src={items.url} alt="Img Not found" className="rounded-full w-full h-full object-cover" />
      </div>
      <h1 className="font-semibold font-mono font-xl mt-1.5">
        {items.name}
      </h1>
      <p className="font-mono font-medium w-[80%] text-center text-xs leading-none mt-1.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        molestiae repudiandae nam aperiam, et vero.
      </p>
      <button onClick={()=>removeElem(index)}
        className={`${style.gango} p-2 bg-red-700 text-white text- mt-2 rounded-md px-7 text-sm cursor-pointer`}
      >
        Remove it
      </button>
    </div>
  );
}

export default Card;
