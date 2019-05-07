import React from "react";

import TodoItem from "./TodoItem";

const TodoItemList = ({
  items,
  handleAddClick,
  handleDeleteClick,
  handleInputChange,
  handleToggleDone,
  pagination
}) => {
  const { limit, offset } = pagination;
  const firstIndex = offset + 1;
  const lastIndex = offset + limit + 1;
  const firstItem = items[0];
  const itemList = items.slice(firstIndex, lastIndex);
  return (
    <React.Fragment>
      <TodoItem
        item={firstItem}
        isNewItem
        key={firstItem.id}
        showDeleteButton={false}
        onAddClick={handleAddClick}
        onInputChange={handleInputChange}
      />
      {itemList.map(item => {
        const { id } = item;
        return (
          <TodoItem
            item={item}
            key={id}
            onDeleteClick={handleDeleteClick}
            onInputChange={handleInputChange}
            onToggleDone={handleToggleDone}
          />
        );
      })}
    </React.Fragment>
  );
};

export default TodoItemList;
