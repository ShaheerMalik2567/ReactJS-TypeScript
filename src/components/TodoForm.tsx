import React, { useContext, useRef } from "react";
import styles from "./TodoForm.module.css";
import { todoContext } from "../store/todo-context";

const TodoForm: React.FC = () => {
  const todoctx = useContext(todoContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todoctx.addTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <label htmlFor="text">Todo text</label>
      <input ref={textInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
