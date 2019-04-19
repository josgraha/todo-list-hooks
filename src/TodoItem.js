import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const DoneColumn = ({ done, id, onToggleDone }) => (
  <Grid item xs={1}>
    <Checkbox checked={done} onChange={(e, done) => onToggleDone(id, done)} />
  </Grid>
);

const createInputProps = ({ id, isNewItem, onClick }) => {
  const ariaLabel = isNewItem ? "Add" : "Delete";
  const color = isNewItem ? "primary" : "secondary";
  const IconComponent = isNewItem ? AddIcon : DeleteIcon;
  return {
    endAdornment: (
      <IconButton aria-label={ariaLabel} color={color} onClick={onClick}>
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

const TodoItem = ({
  item,
  onAddClick,
  onInputChange,
  onDeleteClick,
  onToggleDone,
  isNewItem = false
}) => {
  const { done, id } = item;
  const fieldWidth = isNewItem === true ? 12 : 11;
  const onClick = isNewItem ? () => onAddClick(id) : () => onDeleteClick(id);
  const inputProps = createInputProps({ isNewItem, onClick, ...item });
  const textAreaProps = createTextAreaProps({ isNewItem, ...item });
  return (
    <Grid className="todoRow" container>
      {!isNewItem && (
        <DoneColumn done={done} id={id} onToggleDone={onToggleDone} />
      )}
      <Grid item xs={fieldWidth}>
        <TextField
          disabled={done}
          fullWidth
          onChange={e => onInputChange(id, e.target.value)}
          InputProps={inputProps}
          {...textAreaProps}
        />
      </Grid>
    </Grid>
  );
};

export default TodoItem;
