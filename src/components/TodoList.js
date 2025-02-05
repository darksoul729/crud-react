import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ isRefresh, setRefresh }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data); // Simpan data sebelum mematikan refresh
        setRefresh(false); // Matikan refresh setelah update berhasil
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setRefresh(false);
      });
  }, [isRefresh, setRefresh]);

  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setRefresh={setRefresh} />
      ))}
    </ul>
  );
};

export default TodoList;
