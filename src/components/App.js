import React from "react";
// import Header from "./Header";
// import TasksList from "./TasksList";

// import TasksProvider from "./../context/Tasks";

import styled from "styled-components";
import { themes } from "./theme";
import SimpleForm from "./Form/SimpleForm";

const App = () => {
  return (
    <AppWrapper>
      <SimpleForm />
    </AppWrapper>
  );
};

const AppWrapper = styled.main`
  background-color: ${themes.light.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export default App;
