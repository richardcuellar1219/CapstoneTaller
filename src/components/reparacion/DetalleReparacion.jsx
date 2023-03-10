import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CardDetalleRepara from "../ui/CardDetalleR";
import bmas from "../../imagenes/mas.png";
import { useLocalStorage } from "../../hooks";
import jwtDecode from "jwt-decode";
import axios from "axios";

const Div = styled.div`
  font-family: Lato, sans-serif;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  width: 1600px;
  color: white;
`;
const CountContexto = createContext(null);

export const SetCountContext = () => {
  return useContext(CountContexto);
};
const DetalleRepara = () => {
  const [token] = useLocalStorage("token");
  const [fila, setFila] = useState(0);
  const [count, setCount] = useState(0);
  const [component, setComponenet] = useState("");
  const [listarrepar, setListarrepar] = useState([]);
  const [mecanic] = [
    {
      id: jwtDecode(token)["user_id"],
      name: jwtDecode(token)["user_name"],
    },
  ];
  //console.log(mecanic.);

  useEffect(() => {
    const cargarDatos = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/vehicles/mecanico/" + mecanic.id
      );
      console.log(count);
      setListarrepar(res.data);
      setCount(res.data.length);
    };
    cargarDatos();
    //setComponenet(() => alert("mas fila"));
  }, [fila]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Detalle Reparacion</h2>
      </div>
      <Div>
        <CountContexto.Provider value={count}>
          {
            /** poner el id reparacion identificar al guardar el costo
             * creo cardetalle a medida q recorro el la consulta
             */
            listarrepar.map((list) => (
              <CardDetalleRepara key={list.idreparacion} {...list} />
            ))
          }
        </CountContexto.Provider>
        <input
          style={{ height: "30px", width: "30px" }}
          type="image"
          alt="+"
          id={fila}
          src={bmas}
          onClick={() => setFila(fila + 1)}
        />
      </Div>
      <div></div>
    </div>
  );
};

export default DetalleRepara;
