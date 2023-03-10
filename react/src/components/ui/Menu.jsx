import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  useLoggedContext,
  useRoleContext,
  useSetLoggedContext,
} from "../../providers/LoggedProvider";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Li = styled.li`
  background-color: ;
  border: 1p solid gray;
  font-size: calc(12px + 1.1vmin);
  color: white;
  width: auto;
  cursor: pointer;
  display: flex;
`;

const Menu = () => {
  const navigate = useNavigate();

  const isLogged = useLoggedContext();
  const setIsLogged = useSetLoggedContext();
  const role = useRoleContext();

  const onLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    navigate("/login");
  };

  return (
    <nav>
      <Ul>
        {isLogged && (
          <>
            {/* <Link to={'/home'}>
                        <Li>Home</Li>
                    </Link> */}
            <Link to={"/login"}>
              <Li>Home</Li>
            </Link>
            {/*   <Link to={"/clientes/new"}>
              <Li>Nuevo Cliente</Li>
            </Link> */}
            {["Administracion"].includes(role) && (
              <Link to={"/clientes"}>
                <Li>Lista Clientes</Li>
              </Link>
            )}
            {["Administracion"].includes(role) && (
              <Link to={"/clientes/new"}>
                <Li>Nuevo Cliente</Li>
              </Link>
            )}
            <Link to={"/vehiculos"}>
              <Li>Lista Vehículos</Li>
            </Link>
            {["Administracion"].includes(role) && (
              <Link to={"/vehiculos/new"}>
                <Li>Nuevo Vehículo</Li>
              </Link>
            )}

            {["Administracion"].includes(role) && (
              <Link to={"/reparacion/new"}>
                <Li>Reparación</Li>
              </Link>
            )}
            {["Administracion"].includes(role) && (
              <Link to={"/reparacion/lista"}>
                <Li>Lista Reparación</Li>
              </Link>
            )}
            {["Administracion", "Mecanico"].includes(role) && (
              <Link to={"/reparacion/detalle"}>
                <Li>Albarán</Li>
              </Link>
            )}
            {["Administracion"].includes(role) && (
              <Link to={"/reparacion/servicios"}>
                <Li>Servicios</Li>
              </Link>
            )}
            {["Administracion"].includes(role) && (
              <Link to={"/email"}>
                <Li>Email</Li>
              </Link>
            )}
            {["Administracion"].includes(role) && (
              <Link to={"/reparacion/factura"}>
                <Li>Factura</Li>
              </Link>
            )}
            {/*  {['admin', 'moderator'].includes(role) && (
                        <>
                            <Link to={'/clientes/18'}>
                                <Li>18</Li>
                            </Link>
                            <Link to={'/clientes/15'}>
                                <Li>15</Li>
                            </Link>
                            <Link to={'/clientes/28'}>
                                <Li>28</Li>
                            </Link>

                            <Link to={'/vehiculos/18'}>
                                <Li>18</Li>
                            </Link>
                            <Link to={'/vehiculos/15'}>
                                <Li>15</Li>
                            </Link>
                            <Link to={'/vehiculos/28'}>
                                <Li>28</Li>
                            </Link>


                        </>
 
            )}*/}
            <Li onClick={onLogout}>Logout</Li>
          </>
        )}
        {!isLogged && (
          <>
            <Link to={"/registro"}>
              <Li>Registro</Li>
            </Link>
            <Link to={"/login"}>
              <Li>Login</Li>
            </Link>
          </>
        )}
      </Ul>
    </nav>
  );
};

export default Menu;
