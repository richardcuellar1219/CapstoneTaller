import { Navigate } from "react-router-dom";
import { useLoggedContext } from "../providers/LoggedProvider";

const LoginGuard = ({ children }) => {
  //console.log(children);
  const isLogged = useLoggedContext();

  if (!isLogged) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
  {
    /* <img
        className="imagen-testimonio"
        src={require("../imagenes/Emma-5a662db9bcf55809a1fefb2ea17634bc.png")}
        alt="foto de emma"
      /> */
  }
};

export default LoginGuard;
