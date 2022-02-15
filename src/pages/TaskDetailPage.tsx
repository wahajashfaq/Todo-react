import React from "react";
import NavigationWrapper from "../containers/NavigationWrapper";
import TaskDetailWrapper from "../containers/TaskDetailWrapper";

const TaskDetailPage: React.FC = () => {
  return (
    <div style={{ padding: 32 }}>
      <NavigationWrapper />
      <h1>Detail Page</h1>
      <TaskDetailWrapper />
    </div>
  );
};
export default TaskDetailPage;
