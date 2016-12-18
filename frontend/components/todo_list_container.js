import { connect } from 'react-redux';
import TodoList from './todo_list';
import {
  toggleTodo,
  deleteTodo
} from '../actions/todo_actions';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case "COMPLETE":
      return todos.filter((f) => f.done);
      break;
    case "INCOMPLETE":
      return todos.filter((f) => !f.done);
      break;
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
