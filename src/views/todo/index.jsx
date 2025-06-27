import { useState } from "react";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import Todo from "../../components/Todo";
import TodoForm from "../../components/TodoForm";
import "./index.css"

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade do sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Trabalho do Quezado",
      category: "estudar",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Atividade de inglês",
      category: "dever",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <a 
            href="/" 
            className="fixed top-4 left-4 z-50 group flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
            <svg 
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
            </svg>
            <span className="font-medium text-sm">Home</span>
        </a>

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
