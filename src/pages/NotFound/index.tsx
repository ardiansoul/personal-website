import React from "react";
import { useHistory } from "react-router-dom";
import { Background } from "../../components";

type Props = {};

const NotFound: React.FC<Props> = () => {
  const history = useHistory();

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Background>
        <div className="w-full h-full p-10 xl:p-36 relative z-10">
          404 - Not Found
        </div>
      </Background>
    </div>
  );
};

export default NotFound;
