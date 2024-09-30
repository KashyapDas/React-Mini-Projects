import React from "react";
import Card from "./Card";

function Cards({data,removeElem}) {
  return (
    <div className="w-full h-[70%] max-h-1/2 overflow-auto p-3 flex items-start justify-start gap-x-2 gap-y-4 flex-wrap">
      {data.map((items,index)=>{
        return <Card items={items} key={index} index={index} removeElem={removeElem} />
      })}
    </div>
    
  );
}

export default Cards;
