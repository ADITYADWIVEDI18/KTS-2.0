import React, { useState, useEffect } from "react";
import kts from "../assets/Frame 39.png";
import rocket from "../assets/3dicons.png";
import Rocket from "./LandingPage/Rocket";
import space from "../assets/space.png";
import Kinesis from "./LandingPage/Kinesis";
import cpp from "../assets/domains/cpp.png";
import reactImg from "../assets/domains/react.png";
import python from "../assets/domains/python.png";
import flutter from "../assets/domains/flutter-logo.png";
import figma from "../assets/domains/figma 1.png";
import kotlin from "../assets/domains/kotlin.png";
import arrow from "../assets/Group 41.png";
import { Outlet } from "react-router-dom";
import KTSteam from "./Team Center/KTSteam";
import Navigation from "./Navigation Bar/Navigation";

const mystyle = {
  background: `url(${space})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};


const Body = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 768); // Assuming medium screen size is 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-[100vh] min-w-[100vw] pb-[10vh]" style={mystyle}>
     <div className="pt-16"><Navigation /></div>
      <div className="flex  flex-wrap justify-evenly items-center ml-24">
        <Rocket ignition={rocket} />
        <div className="flex flex-col justify-center items-center mr-16 w-[30vw] ">
          <img src={kts} alt="kts" className="" />
          <br />
          <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent ">
            Meet the Team
          </p>
          <button className="mt-[1rem]">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <Kinesis />
      </div>
      {!isMediumScreen && (
        <div className="">
          <div className="absolute top-0 left-[11rem] w-28 hover:animate-spin">
            <img src={flutter} alt="flutter" />
          </div>
          <div className="absolute top-[7rem] left-[4rem] w-28 hover:animate-spin">
            <img src={reactImg} alt="react" />
          </div>
          <div className="absolute top-[16rem] left-[9rem] w-28 hover:animate-spin">
            <img src={python} alt="python" />
          </div>
          <div className="absolute top-[27rem] left-[3rem] w-28 hover:animate-spin">
            <img src={cpp} alt="cpp" />
          </div>
          <div className="absolute top-[37rem] left-[10rem] w-28 hover:animate-spin">
            <img src={figma} alt="figma" />
          </div>
          <div className="absolute top-[40rem] left-[3rem] w-28 hover:animate-bounce ">
            <img src={kotlin} alt="kotlin" />
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Body;
