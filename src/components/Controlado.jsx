import { useState } from "react";
const Controlado = () => {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState({
    tittle: "",
    description: "",
    estado: "pendiente",
    priority: false,
  });

  const { tittle, description, estado, priority } = todo;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setError(null);
    if (name === "description" && !value.trim()) {
      setError("No puedes dejar la descripción vacia ");
    }
    if (name === "tittle" && value.length < 5) {
      setError("El titulo debe tener al menos 5 caracteres");
    }

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setError("La descripcion no puede estar vacia");
      return;
    }
    if (tittle.length < 5) {
      setError("El titulo debe tener al menos 5 caracteres");
      return;
    }
    console.log(tittle, description, estado, priority);
  };
  return (
    <>
      <form
        className="form-group"
        onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={tittle}
          type="text"
          placeholder="ingresa todo"
          className="form-control mb-2"
          name="tittle"
        />
        <textarea
          onChange={handleChange}
          value={description}
          className="form-control mb-2"
          placeholder="ingresa descripcion"
          name="description"
        />
        <select
          onChange={handleChange}
          value={estado}
          className="form-select mb-2"
          name="estado">
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check mb-2">
          <label htmlFor="inputCheck">Dar prioridad</label>
          <input
            id="inputCheck"
            type="checkbox"
            name="priority"
            className="form-check-input"
            checked={priority}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary">
          procesar
        </button>
      </form>

      {error && (
        <div className="alert alert-danger m-3 text-center">{error}</div>
      )}
    </>
  );
};
export default Controlado;
