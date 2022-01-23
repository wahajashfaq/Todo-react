import React from "react";

type TaskItemProps = {
    name: string,
    done: boolean,
    id: number,
    onTaskToogle: (id: number, checked: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({id, name, onTaskToogle, done}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        onTaskToogle(id,event.currentTarget.checked)
    }
    return <div>
        <span><input type="checkbox" checked={done}  onChange={handleChange} /></span><span style={{padding: 12}}>{name}</span>
    </div>
}

export default TaskItem;