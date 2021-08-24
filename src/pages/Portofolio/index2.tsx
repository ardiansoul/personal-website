import React, { useState, useEffect, Suspense, lazy } from "react";
import { useHistory } from "react-router-dom";
import { Background, ImageSlideshow, Spinner } from "../../components";
import { portofolioModel } from "../../redux/model";
import { getDatas } from "./portofolioSplice";

type Props = {};

export interface dataSourceModel {
  datas: portofolioModel[];
  loading: boolean;
  error: string;
}

const Card = lazy(() => import("../../components/moleculs/Card/Portofolio"));

const Portofolio: React.FC<Props> = () => {
  const [dataSource, setDataSource] = useState<dataSourceModel>({
    datas: [
      {
        id: "",
        title: "",
        image: "",
        stacks: [],
        description: "",
        role: "",
      },
    ],
    loading: false,
    error: "",
  });
  const history = useHistory();

  useEffect(() => {
    let { datas, loading, error } = getDatas();
    setDataSource({ datas: datas, loading: loading, error: error });
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Background>
        <div className="w-full h-full p-10 xl:p-36 relative z-10">
          <h1 className="text-4xl font-bold">What projects have I made?</h1>
          <div className="w-full h-full py-10">
            <div className="w-full h-full xl:flex xl:flex-wrap overflow-y-scroll xl:overflow-hidden">
              <Suspense fallback={<Spinner />}>
                {dataSource.datas.map((data) => (
                  <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    image={data.image}
                    stacks={data.stacks}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default Portofolio;
