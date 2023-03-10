import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardCliente from "../ui/CardCliente";

const DetalleCliente = () => {

    const [cliente, setCliente] = useState({});

    const { clienteId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3000/api/clients/${clienteId}`);
            setCliente(response.data);
        }
        fetchData();
    }, [clienteId]);

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            {cliente ?
                (
                    // <>
                    //     <h2>{cliente.nombre} {cliente.apellidos}</h2>
                    //     <p>Dirección: {cliente.direccion}</p>
                    //     <p>Email: {cliente.email}</p>
                    //     <p>DNI: {cliente.dni}</p>
                    //     <p>Telefono: {cliente.telefono}</p>
                    //     <p>Fecha ingreso: {cliente.fechaingreso}</p>
                    // </>
                    <CardCliente {...cliente} />
                )
                :
                <p>Recuperando cliente</p>}
        </div>
    );
}

export default DetalleCliente;