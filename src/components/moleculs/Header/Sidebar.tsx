import React, { useState } from "react";
import { ArrowLeftCircle } from "react-feather";
import { useHistory } from "react-router-dom";
import { navigate } from "./headerSplice";

type Props = {};

const Header: React.FC<Props> = () => {
  const [openned, setOpenned] = useState(false);
  const history = useHistory();

  return (
    <div
      className={`w-1/12 transition-all duration-500 delay-300 ease-in-out ${
        openned ? "w-full" : ""
      } h-screen absolute z-50`}
    >
      <div className="w-full h-full" style={{ backgroundColor: "#FCDEC0" }}>
        <div
          className={`w-full h-full opacity-0 transform translate-x-0 transition-all duration-500 ease-in-out -ml-4 p-20 ${
            openned ? "opacity-100 translate-x-4 delay-700" : ""
          }`}
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <button
              className="font-base font-bold text-2xl my-4 focus:outline-none text-white"
              onClick={() => navigate("/", history, setOpenned)}
            >
              Home
            </button>
            <button
              className="font-base font-bold text-2xl my-4 focus:outline-none text-white"
              onClick={() => navigate("/portofolio", history, setOpenned)}
            >
              Portofolio
            </button>
            <button
              className="font-base font-bold text-2xl my-4 focus:outline-none text-white"
              onClick={() => navigate("/blog", history, setOpenned)}
            >
              Blog
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-20 h-20 absolute z-50"
        style={{ top: "50%", right: -50 }}
      >
        <button
          className="w-full h-full rounded-full shadow-lg focus:outline-none bg-white flex justify-center items-center"
          onClick={() => setOpenned(!openned)}
        >
          <ArrowLeftCircle
            className="transition:all duration-100"
            style={{ transform: openned ? "rotate(360deg)" : "rotate(180deg)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
