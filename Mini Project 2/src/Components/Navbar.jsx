import React from "react";

const Navbar = ({data}) => {
  return (
    <div className="w-full h-fit p-4 flex items-center justify-between">

      <h1 className="text-orange-600 font-bold text-2xl font-mono">Orange</h1>
      
      <div className="favourite bg-orange-500 text-white font-semibold w-fit h-fit flex items-center justify-left gap-x-2 text-xl px-6 py-2 rounded-md cursor-pointer font-mono ">
        <h1>Favourite</h1>
        <h2 className="bg-orange-700 p-1 rounded-full w-fit h-fit ">
            {data.filter(item=>item.added).length}
        </h2>
      </div>

    </div>
  );
};

export default Navbar;
