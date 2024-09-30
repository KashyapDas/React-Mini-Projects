import React from "react";
import style from "./regular.module.css";
import { useForm } from "react-hook-form";

function Form({ loadData }) {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="w-full h-[30%] flex items-center justify-center">
      <form
        onSubmit={handleSubmit((data) => {
          if ((data.name.trim().length > 0) && (data.url.trim().length > 0)) {
            loadData(data);
            reset();
            console.log(data);
          }
          else{
            alert("Plz field the specific field")
          }
        })}
        action="POST"
        className="p-2 flex flex-col gap-3 w-fit h-fit items-center"
      >
        <input
          {...register("url")}
          className="p-2 w-[30vw] text-center rounded-md border-2 border-solid border-black"
          type="text"
          placeholder="Enter the image url"
        />
        <input
          {...register("name")}
          className="p-2 w-[30vw] text-center rounded-md border-2 border-solid border-black"
          type="text"
          placeholder="Enter the name"
        />
        <input
          className={`w-[15vw] p-2 rounded-md cursor-pointer bg-orange-600 text-white font-semibold ${style.gango} mt-1 hover:border-2 border-solid border-black transition-all duration-200 ease-linear delay-100 `}
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
