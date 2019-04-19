import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Pagination from "./Pagination";
import TodoItemList from "./TodoItemList";
import TodoListAppBar from "./TodoListAppBar";

const initialItems = [
  { id: 1, value: "buy a thank you card" },
  { id: 2, value: "call Tony" },
  { id: 3, value: "schedule car service" },
  { id: 4, value: "update transportation benefits in HR portal" },
  { id: 5, value: "schedule steam cleaning" },
  { id: 6, value: "call Julie" },
  { id: 7, value: "call Steve" }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50
  },
  card: {
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
    textAlign: "center"
  },
  todoForm: {
    minHeight: 288
  }
}));

const TodoList = ({ items = initialItems }) => {
  const classes = useStyles();
  return (
    <div>
      <TodoListAppBar />
      <Grid className={classes.root} container spacing={4}>
        <Grid item xs={11}>
          <Card className={classes.card}>
            <form className={classes.todoForm} noValidate autoComplete="off">
              <TodoItemList items={items} />
            </form>
            <Pagination {...{ items: items.slice(1) }} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoList;
