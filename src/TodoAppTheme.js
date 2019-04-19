import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import primary from "@material-ui/core/colors/deepPurple";

const theme = createMuiTheme({
  palette: {
    primary
  },
  typography: {
    useNextVariants: true
  }
});

const TodoAppTheme = props => (
  <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);

export default TodoAppTheme;
