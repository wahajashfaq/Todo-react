import React from "react";
import { connect } from "react-redux";
import TaskItem from "../componsnts/TaskItem";

const TaskListWrapper = (props: any) => {
  const handleToogle = (id: any, checked: any) => {
    console.log(id, checked);
  };
  return (
    <div>
      {props.items.map((item: any) => (
        <TaskItem
          key={item.id}
          onTaskToogle={handleToogle}
          id={item.id}
          done={item.done}
          name={item.name}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  items: Object.entries(state.items)
});

export default connect(mapStateToProps)(TaskListWrapper);
