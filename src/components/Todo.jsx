/* eslint-disable react/prop-types */
const Todo = ({ todo, deleteTask, updateTodo }) => {
  const { title, description, priority, state, id} = todo;
  return (
    <li className="list-group-item mb-2">
      <div className="d-flex justify-content-between align-items-start">
        
        <div >
          <h5 className={`${state && "text-decoration-line-through"}`}>{title}</h5>
          <p className={`${state && "text-decoration-line-through"}`}>{description}</p>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-danger" onClick={() => deleteTask(id)}>Eliminar</button>
            <button className="btn btn-sm btn-warning" onClick={() => updateTodo(id) }>Actualizar</button>
          </div>
        </div>
        <span className="badge text-bg-primary">{ priority && "Prioritario"}</span>
      </div>
    </li>
  );
};

export default Todo;
