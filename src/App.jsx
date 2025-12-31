import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  function editTodo(id) {
    const newTask = prompt("Write the correct task");
    if (!newTask || newTask.trim() === "") return;

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newTask } : todo))
    );
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <h2 className="text-3xl font-bold text-white mb-6">🔥 Todo List</h2>

      {/* Input */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          placeholder="Enter a task"
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Todo list */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white rounded-lg px-4 py-2 shadow"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`flex-1 cursor-pointer ${
                todo.completed ? "line-through text-red-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>

            <div className="flex gap-2 ml-3">
              <button
                onClick={() => editTodo(todo.id)}
                className="bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => toggleTodo(todo.id)}
                className={`px-3 py-1 rounded text-white ${
                  todo.completed
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
                style={{
                  color: todo.completed ? "red" : "white",
                }}
              >
                Done
              </button>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
