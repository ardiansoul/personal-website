import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

type Props = {
  id: string;
  image: string;
  title: string;
  stacks: string[];
};

const NotFound: React.FC<Props> = ({ id, image, title, stacks }) => {
  const history = useHistory();
  const [openned, setOpenned] = useState(false);

  return (
    <div className="w-12/12 xl:w-3/12 h-80 px-0 md:px-4 py-4 md:py-2">
      <div
        className="w-full h-full bg-red-200 bg-cover bg-center overflow-hidden relative shadow-xl"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="w-full h-40 bg-white absolute bottom-0 p-4 transform translate-y-28 transition-all duration-500 delay-150 ease-in-out rounded-t-lg hover:translate-y-0">
          <span className="w-4/12 h-1 bg-red-200 rounded-lg block m-auto"></span>
          <h4 className="font-lg font-bold">{title}</h4>
          <div className="w-full px-10 flex justify-center">
            <div className="w-full mt-2 pb-4 flex overflow-x-scroll scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-100">
              {stacks.map((stack, index) => (
                <span className="p-1 mx-0.5 bg-red-200 text-sm" key={index}>
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full px-10 mt-2">
            <button
              className="w-full h-10 focus:outline-none bg-red-200 active:bg-red-400 rounded-lg"
              onClick={() => history.push(`/portofolio/${id}`)}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
