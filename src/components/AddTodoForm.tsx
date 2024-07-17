import React, { useState } from "react";

interface AddTodoFormProps {
  addTodo: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="border border-gray-400 p-2 rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
