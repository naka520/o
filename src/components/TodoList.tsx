import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className="list-disc list-inside">
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
