import React from "react";

const Rocket = ({ ignition }) => {
  return (
        <>
        <div className="h-[380px] w-[350px]">
        <div className="absolute h-[380px] w-[350px] rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full blur-3xl animate-bounce opacity-60"></div>   
        <div className="relative"><img src={ignition} /> </div>
        </div>
   

    </>
  );
};

export default Rocket;
