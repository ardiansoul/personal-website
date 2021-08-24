import React from "react";
import { Background, Construction } from "../../components";

type Props = {};

const Blog: React.FC<Props> = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Background>
        <Construction />
      </Background>
    </div>
  );
};

export default Blog;
