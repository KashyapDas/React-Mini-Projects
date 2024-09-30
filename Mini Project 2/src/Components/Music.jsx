import React from 'react'

const Music = ({data,index,handleClick}) => {
    const {image,song,artist,added} = data;
  return (
    <div className='h-fit w-fit bg-yellow-300 rounded-md overflow-hidden p-3 flex gap-x-2 whitespace-nowrap'>
        <div className="imageDiv w-32 h-24 bg-red-300 rounded-md overflow-hidden">
            <img src={image} alt="Image not found" className='w-full h-full object-cover' />
        </div>
        <div className="info h-fit wi-fit">
            <h1 className='font-bold text-xl font-mono px-1'>{song}</h1>
            <h2 className='font-semibold text-xs font-mono px-1'>{artist}</h2>
            <button onClick={()=>{handleClick(index)}} className={`${added ? "bg-green-600" : "bg-blue-600"} text-white w-40 px-2 py-1 font-mono font-bold cursor-pointer rounded-md mt-2`}>{added ? "Added" : "Add to Favourite"}</button>
        </div>
    </div>
  )
}

export default Music
