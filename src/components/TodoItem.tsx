import React from "react";

interface TodoItemProps {
  item: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, toggleTodo }) => {
  return (
    <li
      className={`cursor-pointer ${
        item.completed ? "line-through text-gray-500" : ""
      }`}
      onClick={() => toggleTodo(item.id)}
    >
      {item.text}
    </li>
  );
};

export default TodoItem;
