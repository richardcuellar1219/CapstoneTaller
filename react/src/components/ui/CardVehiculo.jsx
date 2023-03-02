import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/es';

dayjs().locale('es-ES');

const Container = styled.div`
    background-color: #11cbdc ;
    border: 1px solid dodgerblue;
    padding: 20px;

    display: flex;
    flex-direction: column;
`;

const CardVehiculo = ({ marca, modelo, color, matricula, numerochasis, kilometraje, observaciones, imagen, clientes_id, recepcion }) => {
    return (
        <Container>
            <h3>{marca} {modelo}</h3>
            <p>Color: {color}</p>
            <p>Matrícula: {matricula}</p>
            <p>Número de chasis: {numerochasis}</p>
            <p>Kilometraje: {kilometraje}</p>
            <p>Observaciones: {observaciones}</p>
            <p>Imagen: {imagen}</p>
            <p>Clientes_id: {clientes_id}</p>
            <p>Recepción: {dayjs(recepcion).format('DD MMMM YYYY')}</p>
        </Container>
    );
}

export default CardVehiculo;


