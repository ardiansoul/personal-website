// add route in here

import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { RouteMap } from "./RouteMap";

type Props = {};

const Routes: React.FC<Props> = (props) => {
  return (
    <Switch>
      {RouteMap.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            component={item.component}
            {...item.options}
          />
        );
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
