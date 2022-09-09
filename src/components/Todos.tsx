import React, { useContext } from "react";
import TodoList from "./TodoList";
import styles from "./Todos.module.css";
import { todoContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todoctx = useContext(todoContext);

  return (
    <ul className={styles.todos}>
      {todoctx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          onRemoveTodo={todoctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
