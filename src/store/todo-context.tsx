import React, { useState } from "react";
import Todo from "../Model/Todo";

type Context = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const todoContext = React.createContext<Context>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };
  const onRemoveTodoHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((t) => t.id !== todoId);
    });
  };

  const contextValue: Context = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onRemoveTodoHandler,
  };

  return (
    <todoContext.Provider value={contextValue}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodosContextProvider;
