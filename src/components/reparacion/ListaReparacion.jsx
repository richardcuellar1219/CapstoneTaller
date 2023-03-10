import axios from "axios";
import { useEffect, useState } from "react";

import CardReparacion from "../ui/CardReparacion";
import classes from "../vehiculos/ListaVehiculos.module.css";

const ListaReparacion = () => {
  const [arrRepa, setArrRepa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/api/vehicles/albaran");
      setArrRepa(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Reparacion</h2>
      <div className={classes.vehiculos}>
        {arrRepa.map((repa) => (
          <li key={repa.idreparacion}>
            <CardReparacion {...repa} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default ListaReparacion;
