import React from "react";
import { useState } from "react";

type Props = {};

const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden relative z-0">
      {/* <div className="w-5/12 h-5/12 absolute transform -translate-y-10 -top:20 -right:20 xl:-top-64 xl:-right-64">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            // fill="#FF0066"
            className="fill-current text-red-600"
            d="M64.4,-50.6C78.2,-34,80.5,-7.6,74.1,15.6C67.8,38.7,52.8,58.5,32.2,69.3C11.7,80.2,-14.3,82,-35.4,72.3C-56.6,62.6,-72.7,41.5,-76.7,19C-80.6,-3.5,-72.3,-27.2,-57.4,-44C-42.6,-60.7,-21.3,-70.5,2,-72.1C25.3,-73.7,50.6,-67.1,64.4,-50.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> */}
      <div className="pl-12 xl:40 w-full h-full">{children}</div>
      {/* <div className="w-5/12 h-5/12 absolute transform -translate-y-10 -bottom-2/4 right-80">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-current text-red-600"
            // fill="#FF0066"
            d="M33.2,-58.7C41.9,-52.4,47.2,-41.4,53.6,-30.8C60.1,-20.2,67.6,-10.1,65.1,-1.5C62.5,7.1,49.8,14.3,44.2,26.2C38.5,38.1,39.9,54.8,33.7,64.6C27.5,74.4,13.8,77.4,1.4,74.9C-10.9,72.5,-21.8,64.6,-35.1,58.9C-48.5,53.2,-64.2,49.7,-74.8,40.2C-85.5,30.8,-91,15.4,-84,4C-77.1,-7.3,-57.6,-14.7,-49.5,-28.4C-41.3,-42.2,-44.5,-62.4,-38.1,-70.1C-31.8,-77.8,-15.9,-73.1,-1.8,-69.9C12.2,-66.7,24.4,-65.1,33.2,-58.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Background;
