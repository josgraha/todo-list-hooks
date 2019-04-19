import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Pagination from "./Pagination";
import TodoItemList from "./TodoItemList";
import TodoListAppBar from "./TodoListAppBar";
import reducer, { initialState } from "./reducer";
import createHandlers from "./createHandlers";

const PAGE_SIZE = 5;

const initialItems = [
  "buy a thank you card",
  "call Tony",
  "schedule car service",
  "update transportation benefits in HR portal",
  "schedule steam cleaning",
  "call Julie",
  "call Steve"
];

const defaultInitialState = initialState(initialItems, PAGE_SIZE);

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

const TodoList = ({ initialState }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items, pagination, showDone } = state;
  const {
    handleAddClick,
    handleDeleteClick,
    handleInputChange,
    handlePageClick,
    handleToggleDone,
    handleToggleShowDone
  } = createHandlers(dispatch);

  return (
    <div>
      <TodoListAppBar {...{ showDone, handleToggleShowDone }} />
      <Grid className={classes.root} container spacing={4}>
        <Grid item xs={11}>
          <Card className={classes.card}>
            <form className={classes.todoForm} noValidate autoComplete="off">
              <TodoItemList
                {...{
                  items,
                  handleAddClick,
                  handleDeleteClick,
                  handleInputChange,
                  handleToggleDone,
                  pagination
                }}
              />
            </form>
            {pagination.paginate === true && (
              <Pagination
                {...{ handlePageClick, items: items.slice(1), ...pagination }}
              />
            )}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

TodoList.defaultProps = {
  initialState: defaultInitialState
};

TodoList.propTypes = {
  initialState: PropTypes.object
};

export default TodoList;
