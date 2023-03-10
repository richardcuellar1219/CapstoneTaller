import FormControl from "../ui/FormControl";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Servicios = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onRegistro = async (values) => {
    const res = await axios.post(
      "http://localhost:3000/api/vehicles/servicio",
      values
    );
    if (res.data.fatal) {
      Swal.fire({
        title: "Error!",
        text: res.data.fatal,
        icon: "error",
      });
    } else {
      await Swal.fire({
        title: "Correcto!",
        text: "El registro se ha realizado",
        icon: "success",
      });
      reset();
    }
  };
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Servicios</h2>
      <div>
        <form onSubmit={handleSubmit(onRegistro)}>
          <FormControl>
            <label>Tipo de Servicos</label>
            <input type="text" {...register("servicio")} />
          </FormControl>
          <FormControl>
            <label>Precio</label>
            <input type="number" {...register("costo")} />
          </FormControl>
          <input type="submit" value="Enviar" />
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Servicios;
