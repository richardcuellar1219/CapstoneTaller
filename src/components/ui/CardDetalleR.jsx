import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Contendido = styled.div`
  display: flex;

  border-radius: 10px;
  background-color: #34495e;
  padding: 0 5px;
  align-items: baseline;
  width: 1560px;
  //margin-left: 10px;
  //margin: auto;
  //padding: 0 10px;
`;

const CardDetalleRepara = ({ codrepar, tiporeparacion, coche }) => {
  const [servicio, setServcio] = useState([]);
  const [costo, setCosto] = useState(); //guardo el costo del servicio ralizado
  const { register, handleSubmit } = useForm();
  const [id, setId] = useState(0);

  const onSelect = (e) => {
    //console.log(e.target.value);
    setId(e.target.value);
  };

  const onGuardar = async (values) => {
    //console.log(values);

    const res = await axios.post(
      "http://localhost:3000/api/vehicles/mecanico/new",
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
      navigator("/albaran");
    }
  };

  useEffect(() => {
    //cargo los tipo de servicio en el select
    const listaservicio = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/vehicles/servicio"
      );
      setServcio(res.data);
      //console.log(res.data.length);
    };
    listaservicio();
  }, []);

  return (
    <Contendido>
      <div>
        <p>servicio: {tiporeparacion}</p>
      </div>
      <div>
        <p>
          fecha <input type="date" {...register("fecha")} />
        </p>
      </div>
      <div>
        <p>
          Item
          <select
            id="mservicios"
            {...register("idservicio", {
              onChange: (e) => onSelect(e),
              value: id,
            })}
          >
            {servicio.map((serv) => (
              <option key={serv.idtiposervcio} value={serv.idtiposervcio}>
                {serv.servicio}
              </option>
            ))}
          </select>
        </p>
      </div>
      <div>
        <p>
          cantidad <input type="number" {...register("cantidad")} />
        </p>
      </div>
      <div>
        <p>precio</p>
      </div>
      <div>
        <p>
          observacion
          <input type="text" {...register("observaciones")} />
        </p>
      </div>
      <div>
        <p>
          estado
          <select name="mestado" id="" {...register("estado")}>
            <option value="proceso">Proceso</option>
            <option value="terminado">Terminado</option>
          </select>
        </p>
      </div>
      <div>
        <p hidden>idreparacion</p>
        <input
          type="text"
          {...register("reparacion_idreparacion", { value: codrepar })}
          readOnly
          hidden
        />
      </div>
      <button key={codrepar} onClick={handleSubmit(onGuardar)}>
        Guardar
      </button>
    </Contendido>
  );
};

export default CardDetalleRepara;
