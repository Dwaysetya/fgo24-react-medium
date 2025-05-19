import React from "react";
import Chip from "../atom/Chip";

function Recommend() {
  return (
    <div>
      <section className="flex flex-col w-full py-[100px] justify-center items-center">
        <div className=" flex flex-col w-[100%] p-5 gap-5">
          <div>
            <h1 className="font-bold">Staff picks</h1>
            <p className="font-light">
              Stories from across Medium, hand-selected by our team.
            </p>
          </div>
          <h1 className="font-light">Recommended topics</h1>
          <div className="grid grid-cols-2 gap-5">
            <Chip>Relationship</Chip>
            <Chip>Paython</Chip>
            <Chip>Science</Chip>
            <Chip>Politics</Chip>
            <Chip>Software Engginer</Chip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recommend;
