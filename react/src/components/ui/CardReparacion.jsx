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

const CardReparacion = ({
  modelo,
  fechaentrada,
  tiporeparacion,
  fechasalida,
  descripcion,
  estado,
  mecanico,
}) => {
  return (
    <Container>
      <h3>{modelo}</h3>

      <p>Mecanico:{mecanico} </p>
      <p>Fecha Entrada: {dayjs(fechaentrada).format("DD MMMM YYYY")}</p>
      <p>Tipo Reaparacion: {tiporeparacion}</p>
      <p>Fecha Salida: {fechasalida}</p>
      <p>Descripcion: {descripcion}</p>
      <p>Estado: {estado}</p>
      <button onClick={""}>notificar cliente </button>
    </Container>
  );
};

export default CardReparacion;
