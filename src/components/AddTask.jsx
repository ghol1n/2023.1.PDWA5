import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
    setIsEmpty(false);
  };

  const handleAddTaskClick = () => {
    if (inputData.trim() === "") {
      setIsEmpty(true);
      return;
    }

    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className={`add-task-input ${isEmpty ? "empty-input" : ""}`}
        type="text"
      />
      <div className="add-task-button-container">
        {isEmpty && <div className="empty-input-message">Campo vazio!</div>}
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
