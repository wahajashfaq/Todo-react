import React, { useState } from "react";

const AddTask: React.FC = () => {
  const [name, setName] = useState("");

  const handleClick = () => {
    setName("");
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <input value={name} onChange={handleNameChange} />{" "}
      <button type="button" onClick={handleClick} style={{ marginLeft: 12 }}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
