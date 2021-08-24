import React, { useState } from "react";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { changeIndex } from "./ImageSlidesowSplice";

type Props = {};

const ImageSlideshow: React.FC<Props> = () => {
  const [index, setIndex] = useState(1);
  const [x, setX] = useState(false);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1628888862323-dd1d134769fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1628887391400-0c8cc8f3fac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1628887391400-0c8cc8f3fac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 1500);
    setX(false);
  }, [x]);

  return (
    <div className="w-2/6 h-2/6 bg-red-600">
      <div className="w-full h-full relative">
        <button
          onClick={() => {
            setX(true);
            setTimeout(() => {
              setIndex(changeIndex(index, "dec", images));
            }, 3000);
          }}
          className="w-10 h-10 absolute bg-red-200 flex items-center justify-center focus:outline-none z-50"
          style={{
            left: 0,
            top: "50%",
            transform: "translate(0, -50%)",
          }}
        >
          <ArrowLeft />
        </button>
        <div className="w-full h-full flex relative">
          <div
            className={`w-72 h-full transform absolute ${
              animated ? "scale-50 opacity-0 z-20" : "scale-90 opacity-100"
            } transition-all duration-300`}
            style={{
              left: 0,
            }}
          >
            <img
              src={images[index]}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div
            className={`w-72 h-full transform absolute ${
              animated ? "scale-90 opacity-100 z-0" : "scale-75 opacity-0"
            } transition-all duration-300 delay-500`}
            style={{
              left: animated ? 0 : 150,
            }}
          >
            <img
              src={images[index + 1]}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <button
          onClick={() => {
            setX(true);
            setTimeout(() => {
              setIndex(changeIndex(index, "inc", images));
            }, 2000);
          }}
          className="w-10 h-10 absolute bg-red-200 flex items-center justify-center z-50 focus:outline-none"
          style={{
            right: 0,
            top: "50%",
            transform: "translate(0, -50%)",
          }}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;
