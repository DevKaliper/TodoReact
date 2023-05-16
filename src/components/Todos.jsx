import Todo from "./Todo";

/* eslint-disable react/prop-types */
const Todos = ({ todos, deleteTask, updateTodo}) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-5">Task</h2>
      <ul className="list-group">
        {todos.map((todo) => (
         <Todo key={todo.id} todo={todo} deleteTask={deleteTask} updateTodo={updateTodo}/>
        ))}

        {
            todos.length === 0 && (
                <div className="alert alert-primary" role="alert">
                    No hay tareas para mostrar
                </div>
            )
        }
      </ul>
    </div>
  );
};

export default Todos;
