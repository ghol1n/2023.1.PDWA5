import React, { useState } from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();
  const [isEmpty, setIsEmpty] = useState(false);

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIsEmpty(inputValue === "");
  };

  return (
    <div
      className={`task-container ${isEmpty ? "empty-input" : ""}`}
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      {isEmpty && <div className="empty-input-message">Campo vazio!</div>}

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;