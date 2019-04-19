import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    wwidth: "100%"
  },
  grow: {
    flexGrow: 1
  }
});

const TodoListAppBar = ({
  showDone,
  title = "Todo List",
  handleToggleShowDone
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
          <div className={classes.grow} />
          <FormControlLabel
            control={
              <Switch checked={showDone} onChange={handleToggleShowDone} />
            }
            label="Show Done"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

TodoListAppBar.propTypes = {
  title: PropTypes.string
};

export default TodoListAppBar;
