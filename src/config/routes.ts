import React from "react";
import TaskListPage from "../pages/TaskListPage";

type Route = {
  Element: React.FC,
  path: string
};

const routes: Route[] = [
  {
    Element: TaskListPage,
    path: "/"
  }
];

export default routes;
