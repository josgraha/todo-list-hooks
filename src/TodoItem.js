import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const DoneColumn = ({ done }) => (
  <Grid item xs={1}>
    <Checkbox checked={done} />
  </Grid>
);

const createInputProps = ({ isNewItem }) => {
  const ariaLabel = isNewItem ? "Add" : "Delete";
  const color = isNewItem ? "primary" : "secondary";
  const IconComponent = isNewItem ? AddIcon : DeleteIcon;
  return {
    endAdornment: (
      <IconButton aria-label={ariaLabel} color={color}>
        <IconComponent />
      </IconButton>
    )
  };
};

const createTextAreaProps = ({ id, isNewItem, value }) => {
  const placeholder = isNewItem ? "Add a Todo item..." : "Edit Todo";
  return {
    id,
    placeholder,
    value
  };
};

const TodoItem = ({ item, isNewItem = false }) => {
  const { done, id } = item;
  const fieldWidth = isNewItem === true ? 12 : 11;
  const inputProps = createInputProps({ isNewItem, ...item });
  const textAreaProps = createTextAreaProps({ isNewItem, ...item });
  return (
    <Grid className="todoRow" container>
      {!isNewItem && <DoneColumn done={done} id={id} />}
      <Grid item xs={fieldWidth}>
        <TextField
          disabled={done}
          fullWidth
          InputProps={inputProps}
          {...textAreaProps}
        />
      </Grid>
    </Grid>
  );
};

export default TodoItem;
