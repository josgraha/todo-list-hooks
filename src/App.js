import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./app.css";

import TodoAppTheme from "./TodoAppTheme";
import TodoList from "./TodoList";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TodoAppTheme>
        <TodoList />
      </TodoAppTheme>
    </React.Fragment>
  );
}

export default App;
