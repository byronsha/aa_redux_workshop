const TodosReducer = (state = [], action) => {
  switch(action.type) {
    case "RECEIVE_ALL_TODOS":
      return action.todos;
    case "RECEIVE_TODO":
      return state.concat(action.todo);
    case "TOGGLE_TODO":
      const toggleIdx = state.findIndex( todo => todo.id === action.id );
      const status = !state[toggleIdx].done;
      const newTodo = Object.assign({}, state[toggleIdx], {done: status});

      return [
        ...state.slice(0, toggleIdx),
        newTodo,
        ...state.slice(toggleIdx + 1)
      ];
    case "DELETE_TODO":
      const deleteIdx = state.findIndex( todo => todo.id === action.id );

      return [
        ...state.slice(0, deleteIdx),
        ...state.slice(deleteIdx + 1)
      ];
    default:
      return state;
  }
}

export default TodosReducer;
