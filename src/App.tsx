import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // ToDoアイテムを取得する関数
  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>("http://localhost:5000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  // コンポーネントのマウント時にToDoアイテムを取得
  useEffect(() => {
    fetchTodos();
  }, []);

  // ToDoアイテムの追加
  const addTodo = async (text: string) => {
    try {
      // 新しいToDoアイテムのIDを生成する
      const newId = new Date().getTime(); // 現在のタイムスタンプをIDとして使用

      const newTodo = {
        id: newId,
        text,
        completed: false,
      };

      const response = await axios.post<Todo>(
        "http://localhost:5000/todos",
        newTodo
      );
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };
  // ToDoアイテムの更新
  const toggleTodo = async (id: number) => {
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      const updatedTodo = { ...todo, completed: !todo.completed };
      await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo);
      setTodos(todos.map(t => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error toggling todo", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
