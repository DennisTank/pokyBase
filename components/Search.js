import { useState } from "react";
import Router from "next/router";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <div className=" my-2 p-2 text-lg font-semibold flex">
      <input
        className="shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Pokemon name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        className=" ml-1 p-1 text-lg text-white font-semibold bg-red-500  rounded-sm w-fit cursor-pointer"
        onClick={() => {
          if (value === "" || !value.replace(/\s/g, "").length) return;
          Router.push(
            `/pokemon?name=${value.toLowerCase().replaceAll(/\s/g, "")}`
          );
        }}
      >
        Search
      </div>
    </div>
  );
}
