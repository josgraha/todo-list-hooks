import createId from "uuid/v4";

const filterDone = (items = []) => items.filter(({ done }) => done !== true);

const paginate = ({ items, offset = 0, limit }) => {
  const totalItems = items.length - 1;
  const nextOffset = offset >= totalItems ? 0 : offset;
  return totalItems <= limit
    ? { limit, offset: nextOffset, pagination: false }
    : {
        limit,
        offset: nextOffset,
        paginate: true,
        previousDisabled: nextOffset <= 0,
        nextDisabled: nextOffset + limit >= totalItems
      };
};

const createItem = value => ({ done: false, id: createId(), value });

const addItem = ({ allItems }) =>
  allItems[0].value === "" ? allItems : [createItem(""), ...allItems];

const updateItem = ({ allItems, changes, id }) =>
  allItems.map(item => {
    if (item.id === id) {
      const nextItem = { ...item, ...changes };
      return nextItem;
    }
    return item;
  });

const removeItem = ({ allItems, id }) =>
  allItems.filter(item => item.id !== id);

const stateWithPagination = ({ allItems, pagination, showDone, ...rest }) => {
  const items = showDone === true ? allItems : filterDone(allItems);
  return {
    ...rest,
    allItems,
    items,
    pagination: paginate({ items, ...pagination }),
    showDone
  };
};

function reducer(state, action) {
  const { allItems, items } = state;
  switch (action.type) {
    case "add":
      return stateWithPagination({
        ...state,
        allItems: addItem({ allItems })
      });
    case "update":
      return stateWithPagination({
        ...state,
        allItems: updateItem({ allItems, ...action.payload })
      });
    case "remove":
      return stateWithPagination({
        ...state,
        allItems: removeItem({ allItems, ...action.payload })
      });
    case "page":
      return {
        ...state,
        pagination: paginate({ items, ...action.payload })
      };
    case "toggle-show-done":
      return stateWithPagination({
        ...state,
        ...action.payload,
        allItems
      });
    default:
      throw new Error();
  }
}

export const initialState = (initialItems, pageSize) => {
  const items = ["", ...initialItems].map(createItem);
  return {
    allItems: items,
    items,
    pagination: paginate({ items, limit: pageSize }),
    showDone: false
  };
};

export default reducer;
