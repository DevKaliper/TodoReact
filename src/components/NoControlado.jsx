import { useRef } from "react";

const NoControlado = () => {
  const error = (msg) => {
    console.error(msg);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(form.current);

    const { titulo, description, estado } = Object.fromEntries([
      ...data.entries(),
    ]);

    if (!titulo.trim() || !description.trim() || !estado.trim()) {
      return error("todos los campos son obligatorios");
    }

    console.log(titulo, description, estado);
  };

  const form = useRef(null);

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}>
      <input
        type="text"
        placeholder="ingresa todo"
        className="form-control mb-2"
        name="titulo"
        defaultValue="Todo 1"
      />
      <textarea
        className="form-control mb-2"
        placeholder="ingresa descripcion"
        name="description"
        defaultValue="Descripcion totral"
      />
      <select
        className="form-select mb-2"
        name="estado">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <button
        type="submit"
        className="btn btn-primary">
        {" "}
        procesar{" "}
      </button>
    </form>
  );
};
export default NoControlado;
