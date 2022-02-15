import React from "react";
import { Link } from "react-router-dom";

type TaskItemProps = {
  name: string,
  done: boolean,
  id: string,
  pending?: boolean
  onTaskToogle: (id: string, checked: boolean) => void
};

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  name,
  onTaskToogle,
  done
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTaskToogle(id, event.currentTarget.checked);
  };
  return (
    <div>
      <span>
        <input type="checkbox" checked={done} onChange={handleChange} />
      </span>
      <Link to={`/detail/${id}`}>
        <span style={{ padding: 12 }}>{name}</span>
      </Link>
    </div>
  );
};

export default TaskItem;
