// ./src/actions/todos.js

export const addTodo = (todo) => {
    return { 
      type: 'ADD_TODO',
      todo: todo
    };
  };