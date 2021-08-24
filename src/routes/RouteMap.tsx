import { FunctionComponent } from "react";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Portofolio from "../pages/Portofolio";
import Detail from "../pages/Portofolio/Detail";

type Route = {
  path?: string;
  component: FunctionComponent;
  options?: {};
};

export const RouteMap: Route[] = [
  { path: "/", component: Home, options: { exact: true } },
  { path: "/portofolio", component: Portofolio, options: { exact: true } },
  { path: "/portofolio/:id", component: Detail, options: { exact: true } },
  { path: "/blog", component: Blog, options: { exact: true } },
];
