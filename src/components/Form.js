import React, { useState, useContext } from "react";
import { TasksContext } from "../context/Tasks";
import saveTasks from "../hooks/saveTasks";
import styled from "styled-components";
import { colors, themes } from "./theme";

const TaskForm = () => {
  const [tasks, setTasks] = useContext(TasksContext);
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim().length > 3) {
      createTask(name);
      setName("");
    }
  };
  const createTask = task => {
    const updated = [...tasks, { name: task, completed: false }];
    setTasks(updated);
    saveTasks(updated);
  };
  return (
    <Form className="app-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Is there something to do?"
      />
      <button>Add todo</button>
    </Form>
  );
};

export default TaskForm;

const Form = styled.form`
  display: flex;
  flex: 1;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: ${themes.light.nav};
  }
  input {
    flex: 1;
    margin-right: 10px;
    background: #dcdfe7;
    &:focus {
      background: transparent;
      border-radius: 0;
      box-shadow: inset 0 -2px 0 0 ${colors.blue};
    }
    &::placeholder {
      color: #9a9a9a;
    }
  }
  button {
    background: #03a9f4;
    color: #fff;
  }
`;
