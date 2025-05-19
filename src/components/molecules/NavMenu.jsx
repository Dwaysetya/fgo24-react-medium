import React from "react";
import Input from "../atom/Input";
import { FaRegPenToSquare } from "react-icons/fa6";

function NavMenu() {
  return (
    <div className="flex w-full h-20 justify-between px-[30px] items-center shadow-md">
      <div className="flex gap-5 justify-center items-center">
        <h1 className="text-5xl font-extrabold font-serif">Medium</h1>
        <Input id="search" type="text" placeholder="seacrh" />
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <FaRegPenToSquare /> <span className="font-light">Write</span>
        <div className="flex justify-center items-center ml-10">
          <h1 className="text-2xl font-bold">Setya</h1>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
