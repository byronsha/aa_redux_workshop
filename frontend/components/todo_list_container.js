import { connect } from 'react-redux';
import TodoList from './todo_list';
import {
  toggleTodo,
  deleteTodo,
  toggleFilter
} from '../actions/todo_actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleFilter: filter => dispatch(toggleFilter(filter))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
