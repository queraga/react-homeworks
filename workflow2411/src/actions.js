export const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};
export const resetAction = () => {
  return {
    type: "RESET",
  };
};

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: text,
  };
};
