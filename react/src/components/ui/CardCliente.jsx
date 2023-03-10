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
}
`;

const CardCliente = ({
  nombre,
  apellidos,
  direccion,
  email,
  dni,
  telefono,
  fechaingreso,
}) => {
  return (
    <Container>
      <h3>
        {nombre} {apellidos}
      </h3>
      <p>Dirección: {direccion}</p>
      <p>Email: {email}</p>
      <p>DNI: {dni}</p>
      <p>Telefono: {telefono}</p>
      <p>Fecha ingreso: {dayjs(fechaingreso).format("DD MMMM YYYY")}</p>
    </Container>
  );
};

export default CardCliente;
