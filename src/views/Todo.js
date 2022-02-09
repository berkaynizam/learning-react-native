import * as React from 'react';
import { Text } from 'react-native';

import TodoForm from '../components/TodoForm';
import TodoList from "../components/TodoList";

function TodoScreen(){
  return (
      <>
          <TodoForm />
          <TodoList />
      </>

  );
}

export default TodoScreen;