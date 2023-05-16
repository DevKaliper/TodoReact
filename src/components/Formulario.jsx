import Controlado from "./Controlado"
import NoControlado from "./NoControlado"

const Formulario = () => {
  return (
    <>
    <div className="container">

    <h2>Formularios </h2>
    <hr />
    <h3>No controlados</h3>

    <NoControlado />

    <hr />
    <hr />
    <h3>Controlados</h3>
    <Controlado />


    </div>




    
    
    </>
  )
}

export default Formulario