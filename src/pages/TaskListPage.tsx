import React from "react";
import NavigationWrapper from "../containers/NavigationWrapper";
import AddTaskWrapper from "../containers/AddTaskWrapper";
import TaskListWrapper from "../containers/TaskListWrapper";

const TaskListPage: React.FC = () => {
  return (
    <div style={{ padding: 32 }}>
      <NavigationWrapper />
      <h1>List Page</h1>
      <AddTaskWrapper />
      <TaskListWrapper />
    </div>
  );
};
export default TaskListPage;
