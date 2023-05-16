import { useEffect, useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];


const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  const updateTodo = (id) => {
    const newArray = tasks.map((task) =>
      task.id === id ? { ...task, state: !task.state } : task
    );
    setTasks(newArray);
  };

  const orderTodo = (array) => { 
      return  array.sort((a, b) => {
       if (a.priority === b.priority) return 0
       if (a.priority) return -1
        if (b.priority) return 1
        
    
    ;
    })
   
    
   }

  return (
    <div className="container mb-2">
      <h1 className="m-5">Todo List</h1>
      <Form addTask={addTask} />
      <Todos
        todos={orderTodo(tasks)}
        deleteTask={deleteTask}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
