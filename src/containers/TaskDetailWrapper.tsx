import React, { useState } from "react";
import TaskItem from "../componsnts/TaskItem";

const initialTasks = [
  {
    id: "1",
    name: "Task 1",
    done: false
  },
  {
    id: "2",
    name: "Task 2",
    done: false
  },
  {
    id: "3",
    name: "Task 3",
    done: true
  },
  {
    id: "4",
    name: "Task 4",
    done: false
  }
];

const TaskListWrapper = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const handleToogle = (id: any, checked: any) => {
    const currentTaskIndex = tasks.map((item) => item.id).indexOf(id);
    const newTasks = [
      ...tasks.slice(0, currentTaskIndex),
      {
        ...tasks[currentTaskIndex],
        done: checked
      },
      ...tasks.slice(currentTaskIndex + 1)
    ];
    setTasks(newTasks);
  };
  return (
    <div>
      {tasks.map(({ id, done, name }) => (
        <TaskItem
          key={id}
          onTaskToogle={handleToogle}
          id={id}
          done={done}
          name={name}
        />
      ))}
    </div>
  );
};

export default TaskListWrapper;
