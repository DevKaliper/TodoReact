/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({addTask}) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: false,
        state: "pendiente",
        });


    const handleSubmit = (e) => { 
        e.preventDefault();
        const { title, description, state } = task;

        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes completar todos los campos!',
                
              })
            
        }

        addTask({
            id: Date.now(),
            ...task, 
            state: state === "completado" 
        });

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea agregada con éxito',
            showConfirmButton: false,
            timer: 1500
          })

        
     }

     const handleChange = (e) => { 
        const { name, value, type, checked } = e.target;
        setTask({
            ...task,
            [name]: type === "checkbox" ? checked : value
        });
      }

    
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        className="form-control mb-2"
        name="title"
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingresa la descripción de tu tarea"
        className="form-control mb-2"
        name="description"
        onChange={handleChange}
        
        
        ></textarea>
      <div className="form-check mb-2">
        <label
          htmlFor="priority"
          className="form-check-label">
          {" "}
          Dar prioridad
        </label>
        <input
        onChange={handleChange}
          type="checkbox"
          name="priority"
          className="form-check-input "
        />
      </div>

      <select
        name="state"
        onChange={handleChange}
        className="form-select mb-2">
        <option value="pentiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button
        className="btn btn-primary btn-block"

        type="submit">
        Agregar
      </button>
    </form>
  );
};

export default Form;
