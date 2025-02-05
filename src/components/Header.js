import { useState } from "react";

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState("");

  // Fungsi untuk menambah data todo melalui API
  const addTodo = () => {
    if (!title.trim()) {
      alert("Title cannot be empty!");
      return;
    }

    const newTodo = { title, done: false };

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // Reset input setelah menambahkan todo
      setTitle("");

      // Pastikan `setRefresh` adalah fungsi sebelum memanggilnya
      if (typeof setRefresh === "function") {
        setRefresh(true);
      } else {
        console.error("setRefresh is not a function!");
      }

      setTimeout(() => {
        alert("Data Berhasil Ditam");
      }, 500);
    });
  };

  return (
    <div id="todo-header" className="header">
      <h2>CRUD REACT.JS KEPIN</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Masukan data baru"
      />
      <span className="add-button" onClick={addTodo}>
        Add
      </span>
    </div>
  );
};

export default Header;
