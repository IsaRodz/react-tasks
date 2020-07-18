import React, { useContext } from "react";
import { TasksContext } from "../context/Tasks";
import draw from "../assets/draw.svg";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const TasksList = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <main className="app-body">
      {tasks.length > 0 ? (
        <List>
          <h2>Tasks</h2>
          {tasks.map((task, id) => (
            <TaskItem task={task} id={id} key={id} />
          ))}
        </List>
      ) : (
        <center>
          <h3>Yuppy!! You have no tasks pending</h3>
          <img src={draw} alt="No tasks pendind" />
        </center>
      )}
    </main>
  );
};

export default TasksList;

const List = styled.ul`
  width: 100%;
  max-width: 0500px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
`;
