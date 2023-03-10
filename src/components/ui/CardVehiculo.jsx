import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs().locale("es-ES");

const Container = styled.div`
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  padding: 20px;
  font-family: Lato, sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 13px 1px rgb(0 0 0 /9%);
`;

const CardVehiculo = ({
  marca,
  modelo,
  color,
  matricula,
  numerochasis,
  kilometraje,
  observaciones,
  imagen,
  id,
  nombre,
  recepcion,
}) => {
  return (
    <Container>
      <h3>
        {marca} {modelo}
      </h3>
      <p>Color: {color}</p>
      <p>Matrícula: {matricula}</p>
      <p>Número de chasis: {numerochasis}</p>
      <p>Kilometraje: {kilometraje}</p>
      <p>Observaciones: {observaciones}</p>
      <p>Imagen: {imagen}</p>
      <p>Cliente: {nombre}</p>
      <p>Recepción: {dayjs(recepcion).format("DD MMMM YYYY")}</p>
    </Container>
  );
};

export default CardVehiculo;
