import React from "react";

type Props = {};

const Construction: React.FC<Props> = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-8/12 h-40 xl:h-80 relative animate-shake">
          <div
            className="w-full h-full bg-center bg-cover filter blur-sm absolute"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1629448936750-18589d6d8d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=617&q=80')",
            }}
          ></div>
          <div className="w-full h-full relative flex items-center justify-center">
            <h1 className="text-xl xl:text-4xl font-bold text-black absolute transform translate-x-2 filter blur-sm translate-y-2 block">
              Coming Soon
            </h1>
            <h1 className="text-xl xl:text-4xl font-bold text-white relative block">
              Coming Soon
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
