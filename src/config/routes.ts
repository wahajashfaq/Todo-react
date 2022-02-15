import React from "react";
import TaskListPage from "../pages/TaskListPage";
import TaskDetailPage from "../pages/TaskDetailPage";

type Route = {
  Element: React.FC,
  path: string
};

const routes: Route[] = [
  {
    Element: TaskListPage,
    path: "/"
  },
  {
    Element: TaskDetailPage,
    path: "/detail/:id"
  }
];

export default routes;
