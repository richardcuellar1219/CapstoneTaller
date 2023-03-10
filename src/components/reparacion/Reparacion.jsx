import FormControl from "../ui/FormControl";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const Div = styled.div`
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  box-shadow: 0 3px 13px 1px rgb(0 0 0 /9%);
`;

const Reparacion = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  //const [boton, setBoton] = useState(true);
  const [cliente, setCliente] = useState("");
  const [mecanico, setMecanico] = useState([]);

  const [lista, setLista] = useState([]);

  const onCliente = async (e) => {
    //if (e.key === "Enter") {
    const res = await axios.get(
      "http://localhost:3000/api/clients/" + e.target.value
    );
    setCliente(res.data.id);
  };

  const onRegister = async (values) => {
    console.log(values);
    const res = await axios.post(
      "http://localhost:3000/api/vehicles/albaran",
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
      // alert('Correcto');
      navigate("/vehiculo/new");
    }
  };

  useEffect(() => {
    const detalleR = async () => {
      console.log(cliente);
      if (cliente > 0) {
        const resCar = await axios.get(
          "http://localhost:3000/api/clients/info/" + cliente
        );
        setLista(resCar.data);
        console.log(resCar);
      }
    };
    detalleR();
    const mecan = async () => {
      const resMecan = await axios.get("http://localhost:3000/api/users");
      //setMecanico({ ...mecanico, resMecan.data });
      setMecanico(resMecan.data);
      console.log(mecanico);
    };
    mecan();
  }, [cliente]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(onRegister)}>
        <FormControl>
          <label>Fecha de Entrada</label>
          <input
            value={dayjs(new Date()).format("YYYY-MM-DD")}
            type="text"
            {...register("fechaentrada")}
            readOnly
          />
        </FormControl>
        <FormControl>
          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "0px 20px",
            }}
          >
            <label>Cliente </label>
            <input
              type="text"
              id="txtclient"
              {...register("cliente", {
                onBlur: (e) => onCliente(e),
                value: cliente,
              })}
            />
            <label>Vehiculo</label>
            <select name="seletvehiculo" {...register("vehiculos_idvehiculos")}>
              {lista.map((vehi) => (
                <option key={vehi.id} value={vehi.id}>
                  {vehi.modelo}
                </option>
              ))}
            </select>
            <label>Mecanico </label>
            <select name="listmecanico" {...register("idusuario")}>
              {mecanico.map((m) => (
                <option key={m.idusuario} value={m.idusuario}>
                  {m.username}
                </option>
              ))}
            </select>
          </Div>
        </FormControl>

        <FormControl>
          <label>Tipo Reparacion</label>
          <input type="text" {...register("tiporeparacion")} />
        </FormControl>

        <FormControl>
          <label>Descripcion</label>
          <input type="text" {...register("descripcion")} />
        </FormControl>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Reparacion;
