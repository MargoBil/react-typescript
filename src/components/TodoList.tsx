import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p className='center'>No any to-do yet!</p>
  }
  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onRemove(id);
  }
  return (
    <ul>
      {todos.map((todo) => {
        const {title, id, completed} = todo
        const classes = ["todo"];
        if (completed) {
          classes.push("copmleted");
        }
        return (
          <li className={classes.join(" ")} key={id}>
            <label>
              <input type="checkbox" checked={completed} onChange={()=>onToggle(id)}/>
              <span>{title}</span>
              <i className="material-icons red-text" onClick={e=>removeHandler(e, id)}>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
