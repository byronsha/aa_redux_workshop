import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import TodoListContainer from './components/todo_list_container';
import NewTodoFormContainer from './components/new_todo_form_container';
import { requestAllTodos } from './actions/todo_actions';

const Root = () => (
  <Provider store={Store}>
    <div>
      <TodoListContainer />
      <NewTodoFormContainer />
    </div>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
  Store.dispatch(requestAllTodos());
});
