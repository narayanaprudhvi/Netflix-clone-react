import React from "react";

const Navbar = () => {
  return (
    <div className="text-white flex items-center justify-between py-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer hover:italic ml-10">
        {" "}
        NETFLIX{" "}
      </h1>
      <div>
        <button className="text-white pr-4 font-bold text-2xl">
          {" "}
          Sign In{" "}
        </button>
        <button className="bg-red-600 px-6 py-2 text-2xl rounded-xl cursor-pointer mr-10">
          {" "}
          Sign Up{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
