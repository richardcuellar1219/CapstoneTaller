import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormControl from "../ui/FormControl";
import { useEffect, useState } from "react";

const FormularioVehiculos = () => {
  const { register, handleSubmit, reset } = useForm();
  const [idc, setIdc] = useState("");
  const navigate = useNavigate();
  let recuperaCliente;

  const onCliente = async (e) => {
    //e.preventDefault();
    //if (!e.currentTarget === e.target) {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/clients/" + e.target.value
      );
      if (res.data.fatal === "No se ha encontrado el cliente") {
        alert("DNI no válido");
      } else {
        //recuperaCliente = res.data.id;
        setIdc(res.data.id);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const creaVehiculo = async ({
    marca,
    modelo,
    color,
    matricula,
    numerochasis,
    kilometraje,
    observaciones,
    imagen,

    recepcion,
  }) => {
    let values = {
      marca: `${marca}`,
      modelo: `${modelo}`,
      color: `${color}`,
      matricula: `${matricula}`,
      numerochasis: `${numerochasis}`,
      kilometraje: `${kilometraje}`,
      observaciones: `${observaciones}`,
      imagen: `${imagen}`,
      clientes_id: `${idc}`,
      recepcion: `${recepcion}`,
    };
    console.log(values);
    const res = await axios.post("http://localhost:3000/api/vehicles/", values);
    if (res.data.fatal) {
      alert("Error en el server");
    } else {
      alert("Vehiculo creado correctamente");
      //navigate("/vehiculos/new");
      reset();
    }
    //console.log(values);
  };

  /*  useEffect(() => {
    const allCliente = () => {
      setIdc(recuperaCliente);
    };
    allCliente();
  }, []); */

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Nuevo vehiculo</h2>
      <form name="formulario" onSubmit={handleSubmit(creaVehiculo)}>
        <FormControl>
          <label>Marca</label>
          <input type="text" id="marca" {...register("marca")} />
        </FormControl>
        <FormControl>
          <label>Modelo</label>
          <input type="text" id="modelo" {...register("modelo")} />
        </FormControl>
        <FormControl>
          <label>Color</label>
          <input type="text" id="color" {...register("color")} />
        </FormControl>
        <FormControl>
          <label>Matrícula</label>
          <input type="text" id="matricula" {...register("matricula")} />
        </FormControl>
        <FormControl>
          <label>Número de chasis</label>
          <input type="text" id="numerochasis" {...register("numerochasis")} />
        </FormControl>
        <FormControl>
          <label>Kilometraje</label>
          <input type="number" id="kilometraje" {...register("kilometraje")} />
        </FormControl>
        <FormControl>
          <label>Observaciones</label>
          <input
            type="text"
            id="observaciones"
            {...register("observaciones")}
          />
        </FormControl>
        <FormControl>
          <label>Imagen</label>
          <input type="text" id="imagen" {...register("imagen")} />
        </FormControl>
        <FormControl>
          <label>Cliente</label>
          <input
            type="text"
            {...register("clientes_id", {
              onBlur: (e) => onCliente(e),
              //value: idc,
            })}
          />
        </FormControl>
        <FormControl>
          <label>Recepción</label>
          <input type="date" id="recepcion" {...register("recepcion")} />
        </FormControl>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioVehiculos;
