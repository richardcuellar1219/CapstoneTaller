import { useContext, useEffect, useState } from "react";
import axios from "axios";

import CardCliente from "../ui/CardCliente";
import classes from "./ListaClientes.module.css";
import { Link } from "react-router-dom";

const ListaClientes = () => {
  const [arrClientes, setArrClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/api/clients");
      setArrClientes(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de clientes</h2>
      <h3>Num Clientes: {arrClientes.length}</h3>
      <div className={classes.clientes}>
        {arrClientes.map((cliente) => (
          <Link key={cliente.id} to="">
            <CardCliente {...cliente} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListaClientes;
