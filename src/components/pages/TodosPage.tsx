import React, { useState, useEffect } from 'react';
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { ITodo } from "../../interfaces";

declare var confirm:(question: string) => boolean;

export const TodosPage:React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=> {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(savedTodos);
  }, [])

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((todos) => [newTodo, ...todos]);
  };

  const toggleHandler = (id: number) => { 
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemoveTodo = confirm('Are you sure want to delete to-do?');
    if (shoudRemoveTodo) {
         setTodos((todos) =>todos.filter((todo) => todo.id !== id))
         }
  };
    return (<>
      <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onRemove={removeHandler}
          onToggle={toggleHandler}
        />
    </>);
}