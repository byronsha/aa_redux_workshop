const FiltersReducer = (state = "ALL", action) => {
  switch(action.type) {
    case "TOGGLE_FILTER":
      return action.filter;
      break;
    default:
      return state;
  }
}

export default FiltersReducer;
