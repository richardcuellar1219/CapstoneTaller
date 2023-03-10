import jwtDecode from "jwt-decode";
import { useLocalStorage } from "../hooks";

const RoleGuard = ({ children, roles }) => {
  const [token] = useLocalStorage("token");
  const { user_role } = jwtDecode(token);
  //console.log(roles);
  if (!roles.includes(user_role)) {
    return <h1>PRIVADO: Espacio solo para administradores</h1>;
  }
  return children;
};

export default RoleGuard;
