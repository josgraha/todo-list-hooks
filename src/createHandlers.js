const createHandlers = dispatch => ({
  handleAddClick: id => {
    dispatch({ type: "add", payload: { id } });
  },

  handleDeleteClick: id => {
    dispatch({ type: "remove", payload: { id } });
  },

  handleToggleShowDone: (e, showDone) => {
    dispatch({
      type: "toggle-show-done",
      payload: { showDone }
    });
  },

  handleInputChange: (id, value) => {
    dispatch({
      type: "update",
      payload: { id, changes: { value } }
    });
  },

  handlePageClick: payload =>
    dispatch({
      type: "page",
      payload
    }),

  handleToggleDone: (id, done) => {
    dispatch({
      type: "update",
      payload: {
        id,
        changes: { done }
      }
    });
  }
});

export default createHandlers;
