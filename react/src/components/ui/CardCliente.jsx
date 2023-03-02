import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/es';

dayjs().locale('es-ES');

const Container = styled.div`
    background-color:#11cbdc ;
    border: 1px solid dodgerblue;
    padding: 20px;

    display: flex;
    flex-direction: column;
`;

const CardCliente = ({ nombre, apellidos, direccion, email, dni, telefono, fechaingreso }) => {
    return (
        <Container>
            <h3>{nombre} {apellidos}</h3>
            <p>Dirección: {direccion}</p>
            <p>Email: {email}</p>
            <p>DNI: {dni}</p>
            <p>Telefono: {telefono}</p>
            <p>Fecha ingreso: {dayjs(fechaingreso).format('DD MMMM YYYY')}</p>
        </Container>
    );
}

export default CardCliente;


