import React from "react";
import { Menu } from "react-feather";
import { useHistory } from "react-router-dom";

type Props = {
  openned: boolean;
  setOpenned: Function;
};

const Header: React.FC<Props> = ({ openned, setOpenned }) => {
  const history = useHistory();

  return (
    <div className="w-full h-20 md:h-28">
      <div className="w-full h-full flex flex-col md:flex-row relative">
        <button
          onClick={() => {
            setOpenned(!openned);
          }}
        >
          <Menu />
        </button>
        <div className="h-full">
          <img
            src="/assets/images/logo.png"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
