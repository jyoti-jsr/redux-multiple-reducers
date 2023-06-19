const initState = {
  todos: [
    { id: 1, todo: "buy milk" },
    { id: 2, todo: "buy bread" }
  ]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.todo] };

    case "DELETE_TODO":
      let modifiedTodo = state.todos.filter((todo) => todo.id !== action.id);
      return { ...state, todos: modifiedTodo };

    default:
      return state;
  }
};

export default todoReducer;
