import React, { useState } from "react";

const AddTask: React.FC = () => {

  const [name, setName] = useState<string>('');

  const handleClick = () => {
    console.log("Add clicked ")
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
      setName(event.currentTarget.value)
  }

  return (
    <div style={{display: "flex"}}>
      <input onChange={handleNameChange} /> <button onClick={handleClick}  style={{marginLeft: 12}}>Add</button>
    </div>
  );
};

export default AddTask;
