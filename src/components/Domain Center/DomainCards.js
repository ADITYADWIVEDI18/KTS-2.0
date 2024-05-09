import React from "react";

const DomainCards = ({index,name,description,image}) => {
  return (
    <div className="w-[20vmax]  overflow-hidden  text-white flex flex-col hover:scale-105 hover:ease-in-out">
      <div className="">
        <img
          src={image}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="flex items-center p-2 font-mono">
        <span className="text-gray-500 text-3xl font-bold pr-2">{index}</span>
        <span className="text-lg  font-bold">{name}</span>
      </div>
      <div className="text-sm text-blue-100 max-w-full p-2 flex-grow inline-block break-words">
        {description}
      </div>
    </div>
  );
};

export default DomainCards;
