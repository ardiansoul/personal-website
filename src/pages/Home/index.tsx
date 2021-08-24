import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Background, ImageSlideshow } from "../../components";

type Props = {};

const Home: React.FC<Props> = () => {
  const history = useHistory();
  const [openned, setOpenned] = useState(false);

  return (
    <div className="w-full h-full overflow-x-hidden relative">
      <Background>
        <div className="w-full h-full p-10 xl:p-20 flex">
          <div className="w-full flex justify-end">
            <h1 className="w-40 xl:w-64 block text-4xl xl:text-6xl font-bold self-end leading-normal">
              Hi, I am Ardiyana Saputra.
            </h1>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Home;
