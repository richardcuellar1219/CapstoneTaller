import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardVehiculo from "../ui/CardVehiculo";

const DetalleVehiculo = () => {
  const [vehiculo, setVehiculo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      //const response = await axios.get(`http://localhost:3000/api/vehicles/${vehiculoId}`);
      //setVehiculo(response.data);
      console.log(id);
    }
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {vehiculo ? (
        // <>
        //     <h2>{vehiculo.marca} {vehiculo.modelo}</h2>
        //     <p>Color: {vehiculo.color}</p>
        //     <p>Matrícula: {vehiculo.matricula}</p>
        //     <p>Número de chasis: {vehiculo.numerochasis}</p>
        //     <p>Kilometraje: {vehiculo.kilometraje}</p>
        //     <p>Observaciones: {vehiculo.observaciones}</p>
        //     <p>Imagen: {vehiculo.imagen}</p>
        //     <p>Clientes_id: {vehiculo.clientes_id}</p>
        //     <p>Recepción: {vehiculo.recepcion}</p>
        // </>
        <CardVehiculo {...vehiculo} />
      ) : (
        <p>Recuperando vehiculo</p>
      )}
    </div>
  );
};

export default DetalleVehiculo;
