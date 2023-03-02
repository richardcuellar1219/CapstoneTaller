import { useContext, useEffect, useState } from "react";
import axios from "axios";

import CardVehiculo from "../ui/CardVehiculo";
import classes from './ListaVehiculos.module.css';
import { Link } from "react-router-dom";

const ListaVehiculos = () => {

    const [arrVehiculos, setArrVehiculos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/api/vehicles/clients');
            setArrVehiculos(res.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista de vehículos</h2>
            <h3>Num Vehículos: {arrVehiculos.length}</h3>
            <div className={classes.vehiculos}>
                {arrVehiculos.map(vehiculo => (
                    <Link key={vehiculo.id} to={`/vehiculos/${vehiculo.id}`}>
                        <CardVehiculo {...vehiculo} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ListaVehiculos;