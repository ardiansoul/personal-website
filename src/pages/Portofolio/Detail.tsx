import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Background, ImageSlideshow } from "../../components";
import { portofolioModel } from "../../redux/model";
import { getData } from "./portofolioSplice";

type Props = {};

export interface dataSourceModel {
  item: portofolioModel;
  loading: boolean;
  error: "";
}

const Detail: React.FC<Props> = () => {
  const history = useHistory();
  const [dataSource, setDataSource] = useState<dataSourceModel>({
    item: {
      id: "",
      title: "",
      image: "",
      stacks: [""],
      description: "",
      role: "",
    },
    loading: false,
    error: "",
  });

  useEffect(() => {
    let { item, loading, error } = getData("123");
    setDataSource({
      item: item,
      loading: loading,
      error: error,
    });
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Background>
        <div className="w-full h-full p-10 xl:p-36 relative z-10">
          <h1 className="text-4xl font-bold">{dataSource.item.title}</h1>
          <div className="w-full h-full py-10">
            <div className="w-full h-full flex">
              <div className="w-4/12 h-full">
                <div className="w-full h-full">
                  <img
                    src={dataSource.item.image}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-8/12 h-full">
                <div className="w-full h-full border-2 border-black">
                  <h3>
                    Role <span>{dataSource.item.role}</span>
                  </h3>
                  <div className="w-full h-16">
                    <h3>Stack</h3>
                    <div className="w-full h-full flex">
                      {dataSource.item.stacks.map((stack) => (
                        <div>{stack}</div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-80">
                    <h3>Description</h3>
                    <div>{dataSource.item.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Detail;
