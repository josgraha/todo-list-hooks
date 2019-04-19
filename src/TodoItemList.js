import React from "react";

import TodoItem from "./TodoItem";

const TodoItemList = ({ items = [] }) => {
  const firstIndex = 1;
  const lastIndex = 5;
  const firstItem = items[0];
  const itemList = items.slice(firstIndex, lastIndex);
  return (
    <React.Fragment>
      <TodoItem
        item={firstItem}
        isNewItem
        key={firstItem.id}
        showDeleteButton={false}
      />
      {itemList.map(item => {
        const { id } = item;
        return <TodoItem item={item} key={id} />;
      })}
    </React.Fragment>
  );
};

export default TodoItemList;
