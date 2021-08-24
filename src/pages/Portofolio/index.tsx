import React, { useState, useEffect, lazy } from "react";
import { useHistory } from "react-router-dom";
import { Background, Construction } from "../../components";
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
        <Construction />
      </Background>
    </div>
  );
};

export default Portofolio;
